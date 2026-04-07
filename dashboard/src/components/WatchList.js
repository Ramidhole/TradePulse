import React from 'react'
import { useState  } from 'react';
import { watchlist } from '../data/data';
import{Tooltip , Grow} from "@mui/material"
import {BarChartOutlined, keyboardArrowDown , keyboardArrowUp, MoreHoriz} from "@mui/icons-material"

const WatchList = () => {
  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input
        type='text'
        name='search'
        id='search'
        placeholder='Search eg:infy,bse,nifty fut weekly,gold mcx'
        className='search'
        />
        <span className='counts'>{watchlist.length}/50</span>

      </div>
      <ul className='list'>
        {watchlist.map((stock,index)=>{

          return <WatchListItem stock={stock} key={index} />
      
        })}
      </ul>
    </div>
  );
}
export default WatchList


const WatchListItem = ({stock})=>{
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true)

  }

   const handleMouseLeave = (e) => {
     setShowWatchlistActions(false)
   }

return (
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <keyboardArrowDown className="down" />
        ) : (
          <keyboardArrowUp className=" down" />
        )}
        <span className="price">{stock.price}</span>
      </div>
    </div>

    {showWatchlistActions && <WatchListActions uid={stock.name}/>}
  </li>
)

};


const WatchListActions = ({uid}) =>{

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy(B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="sell (s)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">sell</button>
        </Tooltip>

        <Tooltip
          title="analytics (a)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className='action'>

          <BarChartOutlined className='icon'/>
          </button>
        </Tooltip>

        <Tooltip
          title="more (m)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className='icons'/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}



