import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@macist-m/robinia-uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import { useCakeVault } from 'state/hooks'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { fetchPublicVaultData } from 'state/farms/fetchVaultPublic'
import { getBalanceNumber} from 'utils/formatBalance'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
  harvestInterval?:number
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 6s linear infinite;
  border-radius: 16px;
  filter: blur(0px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: rgba(21, 21, 21,0.5);
  backdrop-filter: blur(40px);
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice,ethPrice ,bnbPrice, ethereum, account }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)
  // if(farm.isAutoVault){

  // }
  fetchPublicVaultData()
  const {
    userData: { userShares, isLoading: isVaultUserDataLoading , lastUserActionTime},
    fees: { performanceFee },
    pricePerFullShare,
    tokenTaxRate,
  } = useCakeVault()
  const accountHasSharesStaked = userShares && userShares.gt(0)
  // alert(accountHasSharesStaked)
  const isLoading = !farm.userData || isVaultUserDataLoading
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()


  const vaultData = {
    userShares,

    lastUserActionTime,
    pricePerFullShare,
    tokenTaxRate,
  }

  const farmImage = farm.isTokenOnly
    ? farm.tokenSymbol.toLowerCase()
    : `${farm.tokenSymbol.toLowerCase()}-${farm.quoteTokenSymbol.toLowerCase()}`

  const totalValue: BigNumber = useMemo(() => {
    //   if(farm.isTokenOnly){

    //    return cakePrice.times(farm.lpTotalInQuoteToken)
    //  }
    if (!farm.lpTotalInQuoteToken) {
      return null
    }

    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.ETH) {
      return ethPrice.times(farm.lpTotalInQuoteToken)
    }
    // if(farm.isTokenOnly){

    //   return bnbPrice.times(farm.lpTotalInQuoteToken)
    // }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol,ethPrice])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  const lpLabel =(farm.isAutoVault) ? "Auto SFT" : farm.lpSymbol
  const earnLabel = 'SFT'
  const farmAPY =
    farm.apy && farm.isAutoVault ?
    (farm.apy.times(new BigNumber(100)).toNumber()*performanceFeeAsDecimal).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    :
    farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm

  return (
    <FCard>
      {farm.tokenSymbol === 'xxxxx' && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        risk={risk}
        depositFee={farm.depositFeeBP}
        farmImage={farmImage}
        tokenSymbol={farm.tokenSymbol}
        isAutoVault={farm.isAutoVault}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#aeaeae" bold>
            {(farm.isAutoVault) ?
            TranslateString(351, 'APY')
            :
            TranslateString(352, 'APR')
            }
          </Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' ,color:"white"}}>
            {farm.apy ? (

              <> {farm.isAutoVault ? null :
              <ApyButton
                lpLabel={lpLabel}
                quoteTokenAdresses={quoteTokenAdresses}
                quoteTokenSymbol={quoteTokenSymbol}
                tokenAddresses={tokenAddresses}
                cakePrice={cakePrice}
                apy={farm.apy}
              />}

                {farmAPY}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text color="#aeaeae" bold>
          {TranslateString(318, 'Earn')}:
        </Text>
        <Text color='white' bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent="space-between" >
        <Text style={{ fontSize: '20px' }} color="#aeaeae">
          {(farm.isAutoVault) ?
          TranslateString(10007, 'Performans Fee')
          :
          TranslateString(10001, 'Deposit Fee')
          }

        </Text>
        <Text bold style={{ fontSize: '20px',color:"white" }}>
          {(farm.isAutoVault) ?
          performanceFeeAsDecimal
          :
          farm.depositFeeBP / 100
          }
          %
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="#aeaeae" bold>
          Harvest Interval:
        </Text>
        <Text color='white' bold>{(farm.harvestInterval * 1 / 3600).toFixed(0)} hours</Text>
      </Flex>
      <CardActionsContainer vaultData={vaultData} farm={farm} ethereum={ethereum} account={account} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly
              ? `https://bscscan.com/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://bscscan.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteTokenAdresses}
          quoteTokenSymbol={quoteTokenSymbol}
          tokenAddresses={tokenAddresses}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
