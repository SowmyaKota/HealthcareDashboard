import { Eye, Heart, Syringe, User } from "lucide-react"

const UpcomingSchedule = () => {
  return (
    <div className='upcoming-schedule'>
        <h3>The Upcoming Schedule</h3>
                <div className='schedule-day'>
                    <h4>On Thursday</h4>
                    <div className='appointments-row'>
                        <div className='appointment-card-small health-checkup'>
                            <Syringe size={16}/>
                            <div>
                                <h4>Health checkup complete</h4>
                                <p>11:00 AM</p>
                                </div>   
                        </div>
                        <div className="appointment-card-small ophthalmologist">
                            <Eye size={16}/>
                            <div >
                                <h4>Ophthalmologist</h4>
                                <p>14:00 PM</p>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className='schedule-day'>
                    <h4>On Saturday</h4>
                    <div className='appointments-row'>
                        <div className='appointment-card-small cardiologist'>
                            <Heart size={16}/>
                            <div>
                                <h4>Cardiologist</h4>
                                <p>12:00 AM</p>
                                </div>   
                        </div>
                        <div className="appointment-card-small neurologist">
                            <User size={16}/>
                            <div >
                                <h4>Neurologist</h4>
                                <p>16:00 PM</p>
                            </div>
                        </div>
                        </div>
                        </div>
        </div>
  )
}

export default UpcomingSchedule
