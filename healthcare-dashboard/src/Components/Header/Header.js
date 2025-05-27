import { Search, Bell, User, Plus } from 'lucide-react'


const Header = () => {
  return (
    <header className='header'>
        <div className='header-left'>
            <h1 className='logo'>Health<span>care.</span></h1>
            <div className='search-container' style={{position: 'relative', width:'250px'}}>
                <Search size={18} style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform:'translateY(-50%)',
                    color:'#b0b0b0'
                }}/>
                <input 
                type='text'
                placeholder='Search...'
                className='search-input'/>
            </div>
        </div>
        <div className='header-right'>
            <Bell size={20} className='header-icon'/>
            <div className='user-profile'>
                <User size={24} className='user-avatar'/>
            </div>
            <button className='add-button'>
                <Plus size={20}/>
            </button>
        </div>
    </header>
  )
}

export default Header
