import { type } from 'jquery'
import {Heart, User, Activity } from 'lucide-react'
import React from 'react'

export const UpcomingSchedule = [
    {
        day: 'Thursday',
        appointments:[
            {
                title: 'Health checkup complete',
                time: '09:00',
                icon: Heart,
                type: 'checkup'
            },
             {
                title: 'Ophthalmogist',
                time: '11:00',
                icon: User,
                type: 'consultation'
            }
        ]
    },
    {
        day: 'Saturday',
        appointments:[
            {
                title: 'Cardiologist',
                time: '10:30',
                icon: Heart,
                type: 'specialist'
            },
             {
                title: 'Neurologist',
                time: '14:00',
                icon: Activity,
                type: 'specialist'
            }
        ]
    }
]

export const ActivityData=[
    { day: 'Mon', appointments: 3 },
    { day: 'Tue', appointments: 4 },
    { day: 'Wed', appointments: 2 },
    { day: 'Thu', appointments: 1 },
    { day: 'Fri', appointments: 2 }
]
