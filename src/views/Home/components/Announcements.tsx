import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const Announcements = () => {
  return (
    <>

    <div className="announcements relative xxxl ">
      
           <Timeline
            dataSource={{
            sourceType: 'profile',
            screenName: 'robiniaswap',
          }}
          options={{
            height: '327',
            chrome: 'noheader, nofooter , white , noborders , noscrollbar',
            width: '100%',


          }

        }

        />
    </div>
    </>
  )
}

export default Announcements
