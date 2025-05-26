import { Activity, Bone, icons, User } from "lucide-react"

const HealthData = [
    {
        name: 'Lungs',
        status: 'Issue detected',
        color: 'bg-red-500',
        date: '2 Oct 2021',
        level:60,
        icon: Activity
    },
    {
        name: 'Teeth',
        status: 'Good condition',
        color: 'bg-green-500',
        date: '5 Oct 2021',
        level:85,
        icon: User
    },
    {
        name: 'Bone',
        status: 'Normal',
        color: '#10B981',
        date: '10 Oct 2021',
        color: 'bg-orange-500',
        icon:Bone
    }
]

export default HealthData
