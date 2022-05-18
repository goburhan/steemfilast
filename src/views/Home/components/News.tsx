import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { BLOCKS_PER_YEAR } from 'config'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import Slider from 'react-slick'
import Divider from 'views/Farms/components/Divider'
import { FarmWithStakedValue } from '../../Farms/components/FarmCard/FarmCard'
import TopFarmCard from './TopFarmCard'
import FarmingCard from './FarmingCard'

export interface FarmsProps {
  tokenMode?: boolean
}
const Container = styled.div`
display:block;
min-width:200px;
max-width:600px;
margin-bottom:10px;
line-height: 1.4;
text-align:left;
font-size:24px;


`
const Text = styled.text`
font-size:18px;
color:rgba(255,255,255,0.45);

`
const Box = styled.div`
min-height:385px;
padding:60px;
border:1px solid transparent;
border-radius:25px;
background-color:rgba(30,30,30,0.45);
backdrop-filter: blur(25px);
color:#fff;


`

const News: React.FC<FarmsProps> = (farmsProps) => {
  

  return (
    <Box>
    <Container>
      <a  href="https://steemit.com/wisteria/@robinia/2-0-wisteriaswap-12-18">SFT Swap Defi 1.0</a>
      <br/>
      <Text>
        Corini Kindergarden youtube video for Korean
      </Text>
    </Container>
    <Container>
    <a  href="https://steemit.com/wisteria/@robinia/2-0-wisteriaswap-12-18">Yield Farming DeFi 1.0</a>
      <br/>
      <Text>
        Corini Kindergarden youtube video for Korean
      </Text>
      </Container>
      <Container>
    <a  href="https://steemit.com/wisteria/@robinia/2-0-wisteriaswap-12-18">SFT Swap Defi 1.0</a>
      <br/>
      <Text>
        Corini Kindergarden youtube video for Korean
      </Text>
    </Container>

  
     
    </Box>
  )
}

export default News
