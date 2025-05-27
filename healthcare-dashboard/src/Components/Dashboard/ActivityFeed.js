import { BarChart2 } from "lucide-react"

const ActivityFeed = () => {
    const chartData=[
        {
            day: 'Mon',
            bars: [
                { height: 20, color: '#e0e7ff' },
                { height: 45, color: '#4ecdc4' },
                { height: 25, color: '#e0e7ff' },
                { height: 35, color: '#4ecdc4' },
                { height: 15, color: '#e0e7ff' },
            ]
        },
        {
            day: 'Tues',
            bars: [
                { height: 25, color: '#e0e7ff' },
                { height: 60, color: '#4ecdc4' },
                { height: 50, color: '#5f27cd' },
                { height: 20, color: '#e0e7ff' },
                { height: 30, color: '#4ecdc4' },
            ]
        },
        {
            day: 'Wed',
            bars: [
                { height: 18, color: '#e0e7ff' },
                { height: 30, color: '#4ecdc4' },
                { height: 35, color: '#5f27cd' },
                { height: 20, color: '#e0e7ff' },
            ]
        },
        {
            day: 'Thurs',
            bars: [
                { height: 25, color: '#e0e7ff' },
                { height: 40, color: '#4ecdc4' },
                { height: 45, color: '#5f27cd' },
                { height: 18, color: '#e0e7ff' },
                { height: 30, color: '#4ecdc4' },
            ]
        },
        {
            day: 'Fri',
            bars: [
                { height: 30, color: '#e0e7ff' },
                { height: 55, color: '#4ecdc4' },
                { height: 35, color: '#5f27cd' },
                { height: 22, color: '#e0e7ff' },
                { height: 40, color: '#4ecdc4' },
                { height: 15, color: '#e0e7ff' },
            ]
        },
        {
            day: 'Sat',
            bars: [
                { height: 25, color: '#e0e7ff' },
                { height: 35, color: '#4ecdc4' },
                { height: 30, color: '#5f27cd' },
                { height: 18, color: '#e0e7ff' },
                { height: 35, color: '#4ecdc4' },
            ]
        },
        {
            day: 'Sun',
            bars: [
                { height: 20, color: '#e0e7ff' },
                { height: 40, color: '#4ecdc4' },
                { height: 25, color: '#5f27cd' },
                { height: 15, color: '#e0e7ff' },
            ]
        },
    ]
  return (
    <div className='activity-section'>
        <div className='activity-header'>
            <div className="activity-title-group">
                <span className="activity-icon">
                    <BarChart2 size={18}/>
                </span>
            <h3 className='activityTitle'>Activity</h3> 
            </div><p className='appointment-text'>3 appointments on this week</p>
        </div>

        {/* Simple bar chart */}
        <div className='activity-chart'>
            {chartData.map((data, index)=> (
                    <div key={index} className='chart-bar-container'>
                        <div className='chart-bars-group'>
                        {data.bars.map((bar, barIndex)=>(
                            <div key={barIndex}
                            className='chart-bar'
                            style={{
                                height:`${bar.height}px`,
                                backgroundColor: bar.color,
                                boxShadow: `0 2px 8px ${bar.color}22`
                            }} title={`${bar.height} units`}/>
                        ))}
                        </div>
                        <span className='chart-label'>{data.day}</span>  
                    </div>
            ))}
            </div>
    </div>
  )
}

export default ActivityFeed
