import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'

const style = {
    eventItem: `flex px-4 py-5 font-medium`,
    event: `flex items-center`,
    eventIcon: `mr-2 text-xl`,
    eventName: `text-lg font-semibold`,
    eventPrice: `flex items-center`,
    eventPriceValue: `text-lg`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#2081e2]`,
  }


const EventItem = ({event}) => {
  return (
    <div className={style.eventItem}>
        <div className={`${style.event} flex-[2]`}>
            <div className={style.eventIcon}>
                <BsFillCartFill></BsFillCartFill>
            </div>
            <div className={style.eventName}>Sale</div>
        </div>
    </div>
  )
}

export default EventItem