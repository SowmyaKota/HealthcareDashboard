import { Clock } from 'lucide-react'
import React from 'react'

const SimpleAppointmentCard = ({appointment}) => {
    const Icon=appointment.icon || Clock
  return (
    <div className='simple-appointment-card'>
        <div className='appointment-icon'>
            <Icon className='icon'/>
        </div>
        <div className='appointment-details'>
            <h4 className='appointment-title'>{appointment.title}</h4>
            <p className='appointment-time'>{appointment.time}</p>
        </div>
    </div>
  )
}

export default SimpleAppointmentCard
