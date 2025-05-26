import React from 'react'
import HealthData from '../../Data/HealthData'

const HealthStatusCards = () => {
  return (
    <div className='health-status-cards'>
        {HealthData.slice(1).map((item, index)=>(
            <div key={index} className='healthcard'>
                <div className='card-header'>
                    <h3 className='card-title'>{item.name}</h3>
                    <div className='status-dot'
                    style={{backgroundColor: item.color}}>
                    </div></div>
                        <p className='card-status'>{item.status}</p>
                        <p className='card-date'>{item.date}</p>
                    </div> 
        ))}
    </div>
  )
}

export default HealthStatusCards
