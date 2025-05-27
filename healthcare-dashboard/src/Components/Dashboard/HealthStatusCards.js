import React from 'react'
import HealthData from '../../Data/HealthData'

const HealthStatusCards = () => {
  return (
    <div className='health-status-cards'>
        {HealthData.map((item)=>{
            const Icon=item.icon
            return(
                <div key={item.id} className='health-card'>
                    <div className='health-card-header'>
                        {Icon && <Icon size={24} style={{color: item.color}}/>}
                        <h4>{item.name}</h4> 
                        </div>
                        <p className='health-date'>{item.date}</p>
                        <div className='progress-bar'>
                            <div className='progress-fill'
                            style={{
                                backgroundColor:item.color,
                                width: `${item.progress}%`
                            }}>

                            </div>
                        </div>
                    </div>
            )
        })}
            
    </div>
  )
}

export default HealthStatusCards
