import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { CalendarAppointments } from '../../Data/AppointmentsData'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed'

const DashboardMainContent = () => {
  return (
    <main className='main-content'>
        <div className='dashboard-header'>
            <h2>Dashboard</h2>
            <span className='week-indicator'>This Week </span>
            </div>
            {/* left column */}
            <div className='dashboard-grid'>
                <div className='left-section'>
                <AnatomySection/>
                <ActivityFeed/>
            </div>

            {/* middle column */}
            <div className='middle-section'>
                <HealthStatusCards/>
            </div>

            {/* Right column */}
            <div className='dashboard-column right-column'>
                <CalendarView/>
                <UpcomingSchedule/>
            </div>
        </div>
    </main>
  )
}

export default DashboardMainContent
