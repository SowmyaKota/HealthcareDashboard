import React from 'react'
import NavigationData from '../../Data/NavigationData';


const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='nav-section'>
            <h3 className='nav-title'>General</h3>
            <nav className='nav-list'>
                {NavigationData.map((item)=>{
                    const Icon=item.icon
                    return (
                        <div key={item.id}
                        className={`nav-item ${item.active ? 'active' : ''}`}>
                            <Icon size={20}/>
                            <span>{item.label}</span>
                        </div>
                    )
                })}
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
