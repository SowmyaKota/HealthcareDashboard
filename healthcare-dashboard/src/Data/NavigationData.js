import React from 'react'
import { Activity, BarChart3, Calendar, Clock, HelpCircle, History, LayoutDashboard, MessageCircle, Settings, Stethoscope, TestTube } from 'lucide-react'

const NavigationData = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard', active: true },
    { id: 'history', icon: Clock, label: "History" },
    { id: 'calendar', icon: Calendar, label: "Calendar" },
    { id: 'appointments', icon: Stethoscope, label: "Appointments" },
    { id: 'statistics', icon: BarChart3, label: "Statistics" },
    { id: 'tests', icon: Activity, label: "Tests" },
    { id: 'chat', icon: MessageCircle, label: "Chat" },
    { id: 'support', icon: HelpCircle, label: "Supprt" },
    { id: 'setting', icon: Settings, label: "Setting" }
]

export default NavigationData
