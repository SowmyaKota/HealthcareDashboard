import React from 'react'
import HealthData from '../../Data/HealthData'
import { Activity, Heart } from 'lucide-react'
import anatomyImage from '../../assets/anatomy-image.png'

const AnatomySection = () => {
  return (
    <div className='anatomy-section'>
        <div className='anatomy-container'>
            <img src={anatomyImage} alt='Human Anatomy' className='anatomy-image'/>
                <div className='health-indicator healthy-heart'>
                    <Heart className='heart-icon'/>
                    <span>Healthy Heart</span>
                    </div>
            <div className='health-indicator healthy-leg'>
                <Activity className='activity-icon'/>
                <span>Healthy leg</span>
            </div>
        </div>
    </div>
  )
}

export default AnatomySection
