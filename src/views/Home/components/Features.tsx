import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import bg1 from './bg1.png'
import bg2 from './bg2.png'

export interface FarmsProps {
  tokenMode?: boolean
}

const Text = styled.text`
  font-size: ${(props) => props.fontSize};
  color:${(props) => props.color}; 
  opacity: ${(props) => props.opacity};
`

const Box = styled.div`
  background-image:url(${bg2});
  background-color: rgba(30,30,30,0.50);
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  min-height: 285px;
  padding: 60px;
  width: 600px;
  border: 1px solid transparent;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
`
const Box1 = styled.div`
  background-image:url(${bg1});
  background-color: rgba(30,30,30,0.50);
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  min-height: 285px;
  padding: 60px;
  width: 600px;
  border:1px solid transparent;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
  margin-top: 40px;
`
const Container = styled.div`
justify-content: center;
margin-left:${(props) => props.property};
margin-right:${(props) => props.about};
`

const FeaturesBoxes = styled.div`
  text-align: center;
`

const News: React.FC<FarmsProps> = (farmsProps) => {
  return (
    <FeaturesBoxes>
      <Container property='40%' about='40%'>
      <Text color='white' fontSize="26px">Features</Text>

      </Container>

      <Flex>
        <Box >
          <Container>
            <Text fontSize="30px">Auto SFT</Text>
            <Text opacity="0.6" fontSize="20px">
              <br />
              <br />
              Steem-fi provides the best APY to users through Auto-Compounding system.
            </Text>
          </Container>

          <img src="images/feature1.png" alt="features" className='sm:hidden md:block'/>
        </Box>

        <Box1>
          <Container>
            <Text fontSize="30px"> Treasury Fund</Text>

            <Text opacity="0.6" fontSize="20px">
              <br />
              <br />
              Treasury Fund designed to maintain the value of SFT. It activates the
              Buy-Burn system using the Treasury Fund when the SFT value
            </Text>
          </Container>
          <img src="images/feature2.png" alt="features" className='sm:hidden md:block'/>
        </Box1>
      </Flex>
    </FeaturesBoxes>
  )
}

export default News
