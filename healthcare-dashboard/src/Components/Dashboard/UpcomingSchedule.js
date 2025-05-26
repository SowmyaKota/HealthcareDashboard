import React from 'react'
import { upcomingSchedule } from '../../Data/ScheduleData'


const UpcomingSchedule = () => {
  return (
    <div className='upcoming-schedule'>
        <h3>The Upcoming Schedule</h3>
            {upcomingSchedule && upcomingSchedule.map((day)=>(
                <div key={day.id} className='schedule-day'>
                    <h4>On {day.day}</h4>
                    <div className='appointments-grid'>
                        {day.appointments && day.appointments.map((appointment, aptIndex)=>{
                            const Icon=appointment.icon
                            return(
                                <div key={aptIndex}
                                className='appointment-card-small'
                                style={{backgroundColor: appointment.color}}>
                                    <Icon size={20}/>
                                    <div>
                                        <h5>{appointment.title}</h5>
                                        <p>{appointment.time}</p>
                                        </div>
                                        </div>
                            )
                            })}
                        </div>
                        </div>
            ))}
        </div>
  )
}

export default UpcomingSchedule
