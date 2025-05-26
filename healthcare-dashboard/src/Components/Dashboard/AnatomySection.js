import React from 'react'
import HealthData from '../../Data/HealthData'

const AnatomySection = () => {
  return (
    <div className='anatomy-section'>
        <div className='anatomy-body'>
            <div className='body'>
                <div className='health'>
                    {HealthData.map((item, index)=>(
                        <div 
                        key={index}
                        className='health-point'
                        style={{
                            top: item.position.top,
                            left: item.position.left,
                            backgroundColor: item.color
                        }}>
                        </div>
                    ))}
                </div>
            </div>
            <div className='health-status-list'>
                {HealthData.map((item, index)=>(
                    <div key={index} className='status -item'>
                        <div className='status-indicator'>
                            <div className='status-dot'
                            style={{backgroundColor: item.color}}>
                                </div>
                                <span className='status-name'>{item.name}</span>
                                </div>
                                <span className='status-label'>{item.status}</span>
                                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AnatomySection
