import React from 'react'
import { ActivityData } from '../../Data/ScheduleData'

const ActivityFeed = () => {
    const chartBars=[
        { height: 40, color: '#4ecdc4'},
        { height: 60, color: '#45b7d1'},
        { height: 30, color: '#96ceb4'},
        { height: 80, color: '#feca57'},
        { height: 50, color: '#ff9ff3'},
        { height: 70, color: '#54a0ff'},
        { height: 35, color: '#5f27cd'},
    ]
  return (
    <div className='activity-section'>
        <div className='activity-header'>
        <h3>Activity</h3> 
        <p>3 appointments on this week</p>
        </div>

        {/* Simple bar chart */}
        <div className='activity-chart'>
            {chartBars.map((data, index)=> (
                    <div key={index} className='chart-bar-container'>
                        <div className='chart-bar'
                        style={{height: `${data.height}px`,
                        backgroundColor: data.color}}>
                            </div>
                            <span className='chart-label'>
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                            </span>
                            </div>
                ))}
        </div>
    </div>
  )
}

export default ActivityFeed
