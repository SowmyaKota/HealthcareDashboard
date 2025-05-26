import React from 'react'
import NavigationData from '../../Data/NavigationData';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-content'>
            <h2 className='sidebar-title'>General</h2>
            <nav className='sidebar-nav'>
                {NavigationData.map((item, index)=>{
                    const Icon=item.icon
                    return (
                        <a key={index}
                        href='#'
                        className={`nav-item ${item.active ? 'active' : ''}`}>
                            <Icon className='nav-icon'/>
                            <span>{item.label}</span>
                        </a>
                    )
                })}
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
