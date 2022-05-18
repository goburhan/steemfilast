import React from 'react'
import Page from 'components/layout/Page'
import Socials from 'components/Partials/Socials'
import Divider from 'views/Farms/components/Divider'
import TopSocials from 'components/Partials/TopSocial'
import FarmStakingCard from './components/FarmStakingCard'
import Enterance from './components/Enterance'
import CakeStats from './components/CakeStats'
import TopFarms from './components/TopFarms'
import Announcements from './components/Announcements'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../style/slider-dots.css'
import TokensCard from './components/TokensCard'
import Benefits from './components/Benefits'
import Partners from './components/Partners'
import Sitestat from './components/Sitestat'
import SlideImage from './components/slideimage'
import News from './components/News'
import LaunchPools from './components/LaunchPools'
import Features from './components/Features'

const Home: React.FC = () => {
  return (
    <div className='mainpagebg'>

    <Page>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-8">
          
        
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 lg:mt-20">
            <Enterance />
          </div>
        
          
          <div className="col-span-12  mt-32">
            <SlideImage />
          </div>
          
         
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 mt-20">
            <News />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 mt-20">
            <Announcements />
          </div>
          
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 mt-20">
            <Features />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 mt-20">
            <Partners />
          </div>
          {/* <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 mt-20">
            <Partners />
          </div> */}
          
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 mt-20 mb-20">
            <Sitestat />
          </div>
        
          
          <div className="col-span-12  col-start-0">
          <Divider />
          </div>
          
       
         
        </div>
    </Page>
    </div>

  )
}

export default Home
