
import {Heart, User, Activity, CheckCircle2, Eye, Brain, Syringe } from 'lucide-react'
import React from 'react'

export const upcomingSchedule = [
    {
        id:1,
        day: 'Thursday',
        appointments:[
            {
                title: 'Health checkup complete',
                time: '11:00 AM',
                icon: Syringe,
                color: '#e7f5ff',
            },
             {
                title: 'Ophthalmogist',
                time: '14:00 PM',
                icon: Eye,
                color: '#f3f0ff'
            }
        ]
    },
    {
        id:2,
        day: 'Saturday',
        appointments:[
            {
                title: 'Cardiologist',
                time: '12:00 AM',
                icon: Heart,
                color: '#ffe3e3'
            },
             {
                title: 'Neurologist',
                time: '16:00 PM',
                icon: Brain,
                color: '#e3f2fd'
            }
        ]
    }
]

export const calendarData={
    month: 'October 2021',
    days: [
    { date: 25, day: 'Mon', times: ['10:00', '11:00', '12:00'] },
    { date: 26, day: 'Tue', times: ['08:00', '09:00', '10:00'] },
    { date: 27, day: 'Wed', times: ['12:00', '13:00'] },
    { date: 28, day: 'Thu', times: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', times: ['14:00', '16:00'] },
    { date: 30, day: 'Sat', times: ['11:00', '14:00', '15:00'] },
    { date: 31, day: 'Sun', times: ['09:00'] }
]
}