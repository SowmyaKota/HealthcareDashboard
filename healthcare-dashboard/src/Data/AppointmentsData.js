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
