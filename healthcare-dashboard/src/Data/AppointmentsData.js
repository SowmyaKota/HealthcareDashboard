import { type } from 'jquery'
import React from 'react'

export const appointments = [
    {
        type: 'Dentist',
        time: "09:00",
        date: 'Oct 25',
        doctor: 'Dr. Johnson',
        status: 'confirmed'
    },
    {
        type: 'Physiotherapy Appointment',
        time: "11:00",
        date: 'Oct 25',
        doctor: 'Dr. Williams',
        status: 'pending'
    }
]

export const calendarAppointments={
    25: ['09:00', "12:00", "14:00", "16:00"]
}

export const activityData=[
    {day: 'Mon', value: 85 },
    {day: 'Tues', value: 45 },
    {day: 'Wed', value: 90 },
    {day: 'Thurs', value: 35 },
    {day: 'Fri', value: 75 },
    {day: 'Sat', value: 60 },
    {day: 'Sun', value: 95 },
]