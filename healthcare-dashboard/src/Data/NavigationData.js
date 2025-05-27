import React from 'react'
import { Activity, BarChart3, Calendar, Clock, Grid3X3, Headphones, HelpCircle, History, LayoutDashboard, MessageCircle, Settings, Stethoscope, TestTube } from 'lucide-react'

const NavigationData = [
    { id: 1, name: 'Dashboard', icon: Grid3X3, active: true },
    { id: 2, name: 'History', icon: Clock, active: false },
    { id: 3, name: 'Calendar', icon: Calendar, active: false },
    { id: 4, name: 'Appointments', icon: Stethoscope, active: false },
    { id: 5, name: 'Statistics', icon: BarChart3, active: false },
    { id: 6, name: 'Tests', icon: Activity, active: false },
    { id: 7, name: 'Chat', icon: MessageCircle, active: false },
    { id: 8, name: 'Support', icon: HelpCircle, active: false },
    { id: 9, name: 'Setting', icon: Settings, active: false }
]

export default NavigationData
