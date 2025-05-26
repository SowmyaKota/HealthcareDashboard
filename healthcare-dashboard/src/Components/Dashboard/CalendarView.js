import { Calendar } from 'lucide-react'
import React from 'react'
import { AppointmentsData, CalendarAppointments } from '../../Data/AppointmentsData'

const CalendarView = () => {
    const daysOfWeek= ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const calendarDays=Array.from({length:31}, (_, i)=>i+1)
  return (
    <div className='calendar-view'>
        <div className='calendar-header'>
            <h2 className='calendar-title'>October 2021</h2>
            <button className='calendar-btn'>
                <Calendar className='calendar-icon'/>
            </button>
        </div>
{/* calendar grid */}
        <div className='calendar-grid'>
            {daysOfWeek.map(day=>(
                <div key={day} className='calendar-day-header'>
                    {day}
                    </div>
            ))}
            {calendarDays.map(day=>(
                <div key={day}
                className={`calendar-day ${day===25? 'selected' : ''}`}>
                    {day}
                    </div>
            ))}
        </div>
        {/* appointment times */}
        <div className='appointment-times'>
            {CalendarAppointments[25]?.map(time=>(
                <span key={time} className='time-badge'>
                    {time}
                    </span>
            ))}
            </div>
            {/* appointments cards */}
            <div className='appointment-cards'>
            {AppointmentsData.map((apt, index)=>(
                <div key={index} className='appointment-card'>
                    <div className='appointment-info'>
                        <h4 className='appointment-title'>{apt.type}</h4>
                        <p className='appointment-date'>{apt.date}</p>
                    </div>
                    <span className='appointment-time'>{apt.time}</span>
                    </div>
            ))}
        </div>   
    </div>
  )
}

export default CalendarView
