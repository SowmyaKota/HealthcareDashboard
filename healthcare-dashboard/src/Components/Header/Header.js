import { Search, Bell, User, Plus } from 'lucide-react'
import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='header-left'>
            <h1 className='logo'>Healthcare.</h1>
            <div className='search'>
                <Search className='search-icon'/>
                <input 
                type='text'
                placeholder='Search...'
                className='search-input'/>
            </div>
        </div>
        <div className='header-right'>
            <button className='notification'>
                <Bell className='icon'/>
            </button>
            <div className='user-profile'>
                <div className='avatar'>
                    <User className='avatar-icon'/>
                </div>
                <span className='user-name'>Dr. Smith</span>
            </div>
            <button className='add-btn'>
                <Plus className='plus-icon'/>
            </button>
        </div>
    </header>
  )
}

export default Header
