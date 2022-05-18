import React from 'react'
import CardValue from 'views/Home/components/CardValue'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { Flex } from '@macist-m/robinia-uikit'
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
} from '../../state/hooks'
import Socials from './Socials'

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
const MainFooter = () => {
  const Box = styled.div`
    color: #fff;
    line-height: 2;
    margin-top: 25px;
  `
  const Values = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
 
  }
`
  const Text = styled.div`
color:${(props) => props.color};
font-weight:${(props) => props.property };
 
  }
`

  return (
    <Values>
      <img src="/images/mainlogo.svg" alt="rbs-ico" />
      <Box>
        <Text color='#3c78cb' property='bold'>Products</Text>
        <Text>Stake(3,3)</Text>
        
       
      </Box>
      <Box>
        <Text color='#3c78cb' property='bold'>
          {' '}
          <a href="https://blokfield.gitbook.io/wisteria-swap/">Docs</a>
        </Text>
        <a href="https://steemit.com/@robinia/posts">News</a>
        <Text>Partners</Text>
        <Text >
          <a href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/December/Wisteria%20Swap.pdf">
            Audit
          </a>
        </Text>
      </Box>
      <Box>
        <Text color='#3c78cb' property='bold'>Service</Text>
        <Text>DAO</Text>
        <a href="https://bridge.robiniaswap.com/">Bridge </a>
      </Box>

      <Box>
        <Text color='#3c78cb' property='bold'>Community</Text>
        <Socials />
      </Box>
    </Values>
  )
}

export default MainFooter
