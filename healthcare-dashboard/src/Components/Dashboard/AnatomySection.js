import React from 'react'
import HealthData from '../../Data/HealthData'
import { Activity, Heart } from 'lucide-react'

const AnatomySection = () => {
  return (
    <div className='anatomy-section'>
        <div className='anatomy-body'>
            <div className='body-illustration'>
                <svg viewBox="0 0 200 400" className="human-body">
            {/* Head */}
            <circle cx="100" cy="30" r="20" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            
            {/* Torso */}
            <rect x="80" y="50" width="40" height="80" rx="20" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            
            {/* Arms */}
            <rect x="50" y="60" width="30" height="8" rx="4" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            <rect x="120" y="60" width="30" height="8" rx="4" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            
            {/* Legs */}
            <rect x="85" y="130" width="12" height="60" rx="6" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            <rect x="103" y="130" width="12" height="60" rx="6" fill="#fdbcbc" stroke="#333" strokeWidth="1"/>
            
            {/* Heart indicator */}
            <circle cx="90" cy="80" r="4" fill="#51cf66"/>
            
            {/* Lungs indicators */}
            <circle cx="85" cy="75" r="3" fill="#ff6b6b"/>
            <circle cx="115" cy="75" r="3" fill="#ff6b6b"/>
          </svg>
                <div className='health-indicator healthy-heart'>
                    <Heart size={16}/>
                    <span>Healthy Heart</span>
                    </div>
            <div className='health-indicator healthy-life'>
                <Activity size={16}/>
                <span>Healthy Life</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AnatomySection
