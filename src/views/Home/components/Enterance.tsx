import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Farm } from 'state/types'
import { QuoteToken } from 'config/constants/types'
import Slider from 'react-slick'
import { provider } from 'web3-core'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, useTotalValue } from 'state/hooks'
import CardValue from 'views/Home/components/CardValue'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import styled from 'styled-components'
import bg from './cardbg.svg'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const Enterance = () => {
  const totalValue = useTotalValue()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const eggPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const marketCap = eggPrice.times(circSupply)
  const cakePriceUsd = usePriceCakeBusd()
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakeSupply = getBalanceNumber(circSupply)
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 750,
    autoplaySpeed: 5000,
    arrows: false,
  }
  const Container = styled.div`
    display: block;
  `
  const Welcome = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
  `
  const Flex = styled.div`
    display: flex;
    background-color: ${(props) => props.color};
    margin-left:20%;
    border: ${(props) => props.datatype};
    margin-right:20%;
    justify-content:center;
    border-radius:10px;
    backdrop-filter:  ${(props) => props.property};
    @media (max-width: 1012px) {
      margin-left:7%;
      margin-right:7%;
    }
    @media (max-width: 450px) {
      margin-left:0%;
      margin-right:0%;
    }

  `
  const Text = styled.div`
    margin-bottom: ${(props) => props.property};
    margin-right: ${(props) => props.property};
    font-size: 20px;

    color: ${(props) => props.color};
  `
  const Values = styled.div`
    background-color: ${(props) => props.color};
    border: solid 1px transparent;
    border-radius: 5px;
    text-align: center;
    text-color: white;
    min-width: 150px;
    min-height: 30px;
    margin: 10px 10px 10px 10px;
  `

  return (
    <Flex>
      <Welcome>
        <img src="/images/welcome.svg" alt="welcome" className="ml-auto mr-auto" />

        <Text property="22px" color="#fff">
          Simpified earning system with optimized yield aggregation and strategy based
          yield farms
        </Text>
        <Flex color="rgba(255,255,255,0.1)" property='blur(4px)' datatype='solid 1px transparent'>
          <Container>
            <Text color="#fff">Total Value Locked</Text>

            <Values color="#eb0c29">
              {totalValue.toNumber() > 0 ? (
                <CardValue
                  value={totalValue.toNumber()}
                  prefix="$"
                  decimals={2}
                  fontSize="18px"
                  color="#fff"
                />
              ) : (
                <CardValue
                  value={0}
                  prefix="$"
                  decimals={2}
                  fontSize="18px"
                  color="#fff"
                />
              )}
            </Values>
          </Container>
          <Container>
            <Text color="#fff">SFT APY</Text>
            <Values color="#1a4f97" >
              {totalValue.toNumber() > 0 ? (
                <CardValue
                  value={totalValue.toNumber()}
                  prefix="$"
                  decimals={2}
                  fontSize="18px"
                  color="#fff"
                />
              ) : (
                <CardValue
                  value={0}
                  prefix="$"
                  decimals={2}
                  fontSize="18px"
                  color="#fff"
                />
              )}
            </Values>
          </Container>
        </Flex>
      </Welcome>
    </Flex>
  )
}

export default Enterance
