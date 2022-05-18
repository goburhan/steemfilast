import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@macist-m/robinia-uikit'
import bg1 from './mainbg1.png'
import bg2 from './mainbg.png'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
font-family: 'Quicksand', sans-serif;;
  }
  body {
    background-image: url(${bg2});
    background-repeat:no-repeat;
    background-size:cover;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .rbs-bg {
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(45px);
  }

  .mainpagebg{
    background-image: url(${bg1});
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment: local;
  }

  .solofarmcard {
    border:"20px solid transparent";
    borderImage: url(kartbg.svg) 30 stretch;
    borderImageWidth:"110px";
    borderImageOutset:"45px";
    borderImageSlice:"20%";
  }

  .cog{
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin-bottom:30px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
    }
  }

  .pbg{
    background : #3B3172;
    padding-left:45px;
    padding-right:45px;
    background-size:cover;
    height:50px;
    border-radius:30px;
  }

  .stat-card{
    background: #f7f3e4;
    padding: 25px;
    border-radius:30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
  }
  .footer-stats{
    background: rgba(158, 143, 205, 1);
    border-radius:30px;
    
    padding: 14px;
    justify-content: center;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);

  }
  .coborder{
    border:solid;
    border-color: rgba(255, 255, 255, 0.45);
    border-width: 2px;
    box-shadow: 1px 1px 5px rgba(148, 140, 105, 1);

    border-radius: 15px;
}
.cborder{
  border:solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-width: 2px;
  border-radius: 10px;
}
.claim-card{
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-style : solid;
  border-color: rgba(200, 200, 200, 0.25);
  border-width: 2px;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 auto;
}
}

.noclaim-card{
  background: rgba(255, 255, 255, 0.25);
  padding:12px;
  border-radius: 30px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
  margin-left: 6px;
  margin-right: 6px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 auto;
}
}
  .socialbg {
    background: rgba(235, 226, 255, 0.39);
    height: 35px;
    min-width:30px;
    max-width:25px;
    margin-right:5px;
  }
  .selectasset {
    background: rgba(235, 226, 255, 0.39);
    height: 45px;
    width:100px;
    min-width:30px;
    margin-right:5px;
  }

  .footer-right{
    padding: 25px;
    margin-left: 6px;
    margin-right: 6px;
    background :none;
    
  }
  .dropdown:hover > .dropdown-content {
    display: block;
  }

  .farmingcard{
    background: rgba(212, 211, 255, 0.4);
    padding: 25px;

    border-style : solid;
    border-color: white;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
  }

  .calloption{
    background: rgba(30,30,30,0.5);
    padding: 55px;
    border-style : solid;
    border-color: rgba(200, 200, 200, 0.25);
    border-width: 2px;
    border-radius: 30px;
    backdrop-filter: blur(5px);

    
  }

  .partnercard{
    padding: 15px;
    background-color: rgba(20,20,20,0.45);
    border-style : solid;
    border-color: #e0d9b8;
    border-width: 1.5px;
    border-radius: 30px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    
    
  }

  .announcements {
    background: rgba(30,30,30,0.45);
    padding: 25px;
    margin-bottom:30px;
    border-style : solid;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
    }
  }

  .rbs-card {
    background: rgba(0,0,0,0.25);
    padding: 25px;
    margin-bottom:30px;
    border-style : solid;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
    }
  }

  .claim-card{
      background: rgba(212, 211, 255, 0.4);
      padding: 25px;
      border-width: 1.5px;
      border-radius: 30px;
  
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
      margin-left: 6px;
      margin-right: 6px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin: 0 auto;
      }
      ${({ theme }) => theme.mediaQueries.lg} {
        margin: 0 auto;
    }
  }
  .noclaim-card{
    background: rgba(212, 211, 255, 0.4);
    padding:12px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
  }
}
  
  .slick-list> div {
    margin-left:0;
  }
`

export default GlobalStyle
