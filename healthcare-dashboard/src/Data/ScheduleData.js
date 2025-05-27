
import {Heart, User, Activity, CheckCircle2, Eye, Brain, Syringe } from 'lucide-react'



export const upcomingSchedule = [
    {
        day: 'Thursday',
        appointments:[
            {
                id: 1,
                title: 'Health checkup complete',
                time: '11:00 AM',
                icon: Syringe,
                color: '#e7f3ff',
            },
             {
                id: 2,
                title: 'Ophthalmologist',
                time: '14:00 PM',
                icon: Eye,
                color: '#fff0e6'
            }
        ]
    },
    {
        id:3,
        day: 'Saturday',
        appointments:[
            {
                title: 'Cardiologist',
                time: '12:00 AM',
                icon: Heart,
                color: '#ffe6e6'
            },
             {
                title: 'Neurologist',
                time: '16:00 PM',
                icon: Brain,
                color: '#f0e6ff'
            }
        ]
    }
]

export const calendarData={
    month: 'October 2021',
    days: [
    { date: 25, day: 'Mon', appointments: ['10:00', '11:00', '12:00'] },
    { date: 26, day: 'Tues', appointments: ['08:00', '09:00', '10:00'] },
    { date: 27, day: 'Wed', appointments: ['12:00', '----', '13:00'] },
    { date: 28, day: 'Thurs', appointments: ['10:00', '11:00', '----'] },
    { date: 29, day: 'Fri', appointments: ['----', '14:00', '16:00'] },
    { date: 30, day: 'Sat', appointments: ['12:00', '14:00', '15:00'] },
    { date: 31, day: 'Sun', appointments: ['09:00', '10:00', '11:00'] }
]
}