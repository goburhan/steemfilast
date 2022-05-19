import React from 'react'
import CardValue from 'views/Home/components/CardValue'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import BigNumber from 'bignumber.js/bignumber'
import {
  useTotalSupply,
  useBurnedBalance,
  useCustomTokenBalance,
} from 'hooks/useTokenBalance'
import { BLOCKS_PER_YEAR } from 'config'
import { getCakeAddress } from 'utils/addressHelpers'
import { QuoteToken } from 'config/constants/types'

import {
  useFarms,
  usePriceCakeBusd,
  useTotalValue,
  usePriceBnbBusd,
} from '../../../state/hooks'

declare global {
  interface Window {
    ethereum: any
  }
}
const addToMetamask = function () {
  window.ethereum
    .request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0xaAdFf17d56d80312b392Ced903f3E8dBE5c3ece7',
          symbol: 'WST',
          decimals: 18,
          image: `${window.location.origin}/images/favicons/apple-icon-72x72.png`,
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log('WST successfully added to wallet!')
      } else {
        throw new Error('Something went wrong.')
      }
    })
    .catch(console.error)
}


const Statistics = () => {
  const cakePriceUsd = usePriceCakeBusd()
  // const totalValue = useTotalValue()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const eggPrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const exacutedBalance = useCustomTokenBalance(
    '0xaAdFf17d56d80312b392Ced903f3E8dBE5c3ece7',
    '0xf808b408e464FcaA2a28C673ca7F5C16f6e775aB',
  )
  const circSupply = totalSupply
    ? totalSupply.minus(burnedBalance).minus(exacutedBalance)
    : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)

  const marketCap = eggPrice.times(circSupply)

  let eggPerBlock = 0
  if (farms && farms[0] && farms[0].eggPerBlock) {
    eggPerBlock = new BigNumber(farms[0].eggPerBlock)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }
  const x = []
  farms.map((farm) => {
    // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
    //   return farm
    // }
    const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
      .times(new BigNumber(farm.poolWeight))
      .div(new BigNumber(10).pow(18))
    const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

    let apy = eggPrice.times(cakeRewardPerYear)

    let totalValuex = new BigNumber(farm.lpTotalInQuoteToken || 0)

    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      totalValuex = totalValuex.times(bnbPrice)
    }

    if (totalValuex.comparedTo(0) > 0) {
      apy = apy.div(totalValuex)
    }

    x.push(apy)
    return null
  })
  const topAPY = x.reduce(function (accumulatedValue, currentValue) {
    return Math.max(accumulatedValue, currentValue)
  })
  const Container = styled.div`
    margin-left: 20px;
  `

  const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: space-evenly;
    margin-top: 40px;
    img {
      margin-bottom: 30px;
    }
  `
  const Text = styled.div`
    margin-right: ${(props) => props.property};
    color: ${(props) => props.color};
    font-size: 18px;
    line-height: 1.5;
  `
  const Stats = styled.div`
    justify-content: space-around;
    background-color: rgba(20, 20, 20, 0.45);
    background-size: contain;
    border: solid 1px transparent;
    border-radius: 25px;
    min-height: 150px;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin-top: 40px;
  `

  return (
    <>
      <Stats>
        <Flex>
          <Container>
            <Text color="#3c78cb" property="20px">
              SFT APY
            </Text>
            <Text color="#3c78cb">Total Supply</Text>
            <Text color="#3c78cb">Circulating Supply</Text>
          </Container>

          <Container>
            <CardValue fontSize="18px" value={2} decimals={0} color="white" />

            {cakeSupply && (
              <CardValue
                fontSize="18px"
                value={getBalanceNumber(totalSupply)}
                decimals={0}
                color="white"
              />
            )}

            {cakeSupply && (
              <CardValue fontSize="18px" value={cakeSupply} decimals={0} color="white" />
            )}
          </Container>
        </Flex>
        <Flex>
          <Container>
            <Text color="#eb0c29">Total Burned</Text>
            <Text color="#eb0c29">Market Cap</Text>
            <Text color="#eb0c29">SFT Per Block</Text>
          </Container>

          <Container>
            <CardValue
              fontSize="17px"
              value={getBalanceNumber(burnedBalance)}
              decimals={0}
              color="white"
            />

            {totalSupply && (
              <CardValue
                fontSize="17px"
                value={getBalanceNumber(marketCap)}
                decimals={0}
                prefix="$"
                color="white"
              />
            )}
            {cakeSupply && (
              <CardValue color="white" fontSize="18px" value={eggPerBlock} decimals={0} />
            )}
          </Container>
        </Flex>

        <Flex>
          <img
            style={{ minWidth: '60px', width: '70px' }}
            src="/images/metamask-ico.svg"
            alt="rbs-ico"
          />
          <button
            type="button"
            style={{ minWidth: '135px', maxHeight: '50px' }}
            className="bg-meta  ml-4    rounded-xl sm:mt-2   text-sm  text-white cursor-pointer hover:opacity-75"
            onClick={addToMetamask}
          >
            Add to Metamask
          </button>
        </Flex>
      </Stats>
    </>
  )
}

export default Statistics
