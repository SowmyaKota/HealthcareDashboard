import { Dumbbell, Smile } from 'lucide-react'
import React from 'react'
import { calendarData } from '../../Data/ScheduleData'

const CalendarView = () => {
  return (
    <div className='calendar-section'>
        <div className='calendar-header'>
            <h3>{calendarData.month}</h3>
            <div className='calendar-nav'>
            <button>&lt;</button>
            <button>&gt;</button>
        </div>
        </div>
{/* calendar grid */}
        <div className='calendar-grid'>
            {calendarData.days && calendarData.days.map((day)=>(
                <div key={day.date} className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>{day.day}</span>
                        <span className='day-date'>{day.date}</span>
                    </div>
                    <div className='day-appointments'>
                        {day.appointments && day.appointments.map((time, index)=>(
                            <div key={index} className='appointment-time'>
                                {time}
                                </div>
                        ))}
                        </div>
                        </div>
            ))}
        </div>
        {/* appointment times */}
        <div className='calendar-appointments'>
            <div className='appointment-card dentist'>
                <Smile size={20}/>
                <div>
                    <h4>Dentist</h4>
                    <p>09:00-11:00</p>
                    <small>Dr. Cameron Williamson</small>
                </div>
            </div>
            <div className='appointment-card physiotherapy'>
                <Dumbbell size={20}/>
                <div>
                    <h4>Physiotherapy Appointment</h4>
                    <p>11:00-12:00</p>
                    <small>Dr. Kevin Djones</small>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default CalendarView
