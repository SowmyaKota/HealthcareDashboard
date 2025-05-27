import { Activity, Bone, Smile } from "lucide-react"

const HealthData = [
    {
        id: 1,
        name: 'Lungs',
        status: 'warning',
        color: '#ff6b6b',
        date: '26 Oct 2021',
        progress: 70,
        icon: Activity,
    },
    {
        id:2,
        name: 'Teeth',
        status: 'Good',
        color: '#51cf66',
        date: '25 Oct 2021',
        progress: 85,
        icon: Smile,
    },
    {
        id: 3,
        name: 'Bone',
        status: 'warning',
        color: '#ff8787',
        date: '26 Oct 2021',
        progress: 60,
        icon: Bone,
    }
]

export default HealthData

