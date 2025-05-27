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
                <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Mon</span>
                        <span className='day-date'>25</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time'>10:00</div>
                        <div className='appointment-time'>11:00</div>
                        <div className='appointment-time'>12:00</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Tues</span>
                        <span className='day-date'>26</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time'>08:00</div>
                        <div className='appointment-time blue-bg'>09:00</div>
                        <div className='appointment-time'>10:00</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Wed</span>
                        <span className='day-date'>27</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time'>12:00</div>
                        <div className='appointment-time'>-----</div>
                        <div className='appointment-time'>13:00</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Thurs</span>
                        <span className='day-date'>28</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time'>10:00</div>
                        <div className='appointment-time grey-bg'>11:00</div>
                        <div className='appointment-time'>-----</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Fri</span>
                        <span className='day-date'>29</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time'>-----</div>
                        <div className='appointment-time'>14:00</div>
                        <div className='appointment-time'>16:00</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Sat</span>
                        <span className='day-date'>30</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time grey-bg'>12:00</div>
                        <div className='appointment-time'>14:00</div>
                        <div className='appointment-time'>15:00</div>
                        </div>
                        </div>

                         <div className='calendar-day'>
                    <div className='day-header'>
                        <span className='day-name'>Sun</span>
                        <span className='day-date'>31</span>
                    </div>
                    <div className='day-appointments'>
                        <div className='appointment-time grey-bg'>09:00</div>
                        <div className='appointment-time'>10:00</div>
                        <div className='appointment-time'>11:00</div>
                        </div>
                        </div>
            
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
