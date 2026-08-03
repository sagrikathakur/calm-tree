import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/60 shadow-xs transition-all duration-300'>
      <nav className='max-w-7xl mx-auto px-3 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2'>
        {/* Brand Logo & Name */}
        <div
          onClick={() => navigate('/')}
          className='flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0'
        >
          <div className='relative flex items-center justify-center p-1 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/60'>
            <img
              src={assets.logo}
              alt="Calm Tree Logo"
              className='h-7 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105'
            />
          </div>
          <span className='font-semibold sm:text-xl lg:text-2xl tracking-tight text-emerald-700 whitespace-nowrap'>
            Calm Tree
          </span>
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex items-center gap-2 lg:gap-4 text-xs lg:text-sm font-semibold tracking-wide text-emerald-900/80 uppercase'>
          <NavLink to='/about'>
            {({ isActive }) => (
              <li className={`relative px-3.5 py-2 transition-all duration-200 flex flex-col items-center gap-1 ${isActive ? 'text-emerald-950 font-bold' : 'hover:text-emerald-700'}`}>
                <span>ABOUT US</span>
                <span className={`h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0'}`} />
              </li>
            )}
          </NavLink>

          <NavLink to='/services'>
            {({ isActive }) => (
              <li className={`relative px-3.5 py-2 transition-all duration-200 flex flex-col items-center gap-1 ${isActive ? 'text-emerald-950 font-bold' : 'hover:text-emerald-700'}`}>
                <span>SERVICES WE PROVIDE</span>
                <span className={`h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0'}`} />
              </li>
            )}
          </NavLink>

          <NavLink to='/why-us'>
            {({ isActive }) => (
              <li className={`relative px-3.5 py-2 transition-all duration-200 flex flex-col items-center gap-1 ${isActive ? 'text-emerald-950 font-bold' : 'hover:text-emerald-700'}`}>
                <span>WHY US</span>
                <span className={`h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0'}`} />
              </li>
            )}
          </NavLink>

          <NavLink to='/journal'>
            {({ isActive }) => (
              <li className={`relative px-3.5 py-2 transition-all duration-200 flex flex-col items-center gap-1 ${isActive ? 'text-emerald-950 font-bold' : 'hover:text-emerald-700'}`}>
                <span>JOURNAL IT</span>
                <span className={`h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0'}`} />
              </li>
            )}
          </NavLink>

          <NavLink to='/contact'>
            {({ isActive }) => (
              <li className={`relative px-3.5 py-2 transition-all duration-200 flex flex-col items-center gap-1 ${isActive ? 'text-emerald-950 font-bold' : 'hover:text-emerald-700'}`}>
                <span>CONTACT</span>
                <span className={`h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0'}`} />
              </li>
            )}
          </NavLink>
        </ul>

        {/* Right Side Actions */}
        <div className='flex items-center gap-2 sm:gap-4 shrink-0'>
          {token ? (
            <div className='hidden md:flex items-center gap-1.5 cursor-pointer group relative py-1'>
              <img
                className='w-7 sm:w-8 h-7 sm:h-8 rounded-full object-cover border border-gray-200'
                src={assets.profile_icon}
                alt="Profile"
              />
              <img className='w-2 sm:w-2.5 opacity-70 group-hover:opacity-100 transition-opacity' src={assets.dropdown_icon} alt="Dropdown" />

              {/* Simple Desktop Profile Dropdown Menu */}
              <div className='absolute top-full right-0 mt-2 min-w-44 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-50 text-sm font-medium text-gray-700 hidden group-hover:block'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-emerald-800 px-3 py-2 cursor-pointer transition-colors'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-emerald-800 px-3 py-2 cursor-pointer transition-colors'>My Appointments</p>
                <hr className='my-1 border-gray-100' />
                <p onClick={() => setToken(false)} className='hover:text-red-600 px-3 py-2 cursor-pointer transition-colors text-red-500'>Logout</p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-emerald-800 text-white px-6 py-2 rounded-full text-xs sm:text-sm font-medium hidden md:block hover:bg-emerald-900 transition-colors shadow-xs cursor-pointer'
            >
              Create Account
            </button>
          )}

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setShowMenu(true)}
            className='md:hidden p-1.5 sm:p-2 rounded-xl text-emerald-900 hover:bg-emerald-50 transition-colors cursor-pointer'
            aria-label="Open navigation menu"
          >
            <img src={assets.menu_icon} alt="Menu" className='w-5 sm:w-6 h-5 sm:h-6' />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300 ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-amber-50/95 backdrop-blur-md p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${showMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div>
            <div className='flex items-center justify-between pb-4 border-b border-emerald-200/50'>
              <div className='flex items-center gap-2'>
                <img src={assets.logo} alt="Calm Tree" className='h-9 w-auto' />
                <span className='font-bold text-lg text-emerald-950'>Calm Tree</span>
              </div>
              <button
                onClick={() => setShowMenu(false)}
                className='p-2 text-emerald-900 hover:bg-emerald-100/60 rounded-full transition-colors'
                aria-label="Close navigation menu"
              >
                <img src={assets.cross_icon} alt="Close" className='w-5 h-5' />
              </button>
            </div>

            <ul className='flex flex-col gap-2 mt-6 text-sm font-semibold uppercase text-emerald-900'>
              <NavLink
                onClick={() => setShowMenu(false)}
                to='/about'
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? 'text-emerald-950 font-bold' : 'text-emerald-900 hover:text-emerald-700'}`}
              >
                ABOUT US
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to='/services'
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? 'text-emerald-950 font-bold' : 'text-emerald-900 hover:text-emerald-700'}`}
              >
                SERVICES WE PROVIDE
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to='/why-us'
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? 'text-emerald-950 font-bold' : 'text-emerald-900 hover:text-emerald-700'}`}
              >
                WHY US
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to='/journal'
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? 'text-emerald-950 font-bold' : 'text-emerald-900 hover:text-emerald-700'}`}
              >
                JOURNAL IT
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to='/contact'
                className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? 'text-emerald-950 font-bold' : 'text-emerald-900 hover:text-emerald-700'}`}
              >
                CONTACT
              </NavLink>
            </ul>
          </div>

          <div className='pt-4 border-t border-emerald-200/50'>
            {token ? (
              <div className='flex flex-col gap-2 text-sm font-semibold text-emerald-900'>
                <p
                  onClick={() => { setShowMenu(false); navigate('/my-profile'); }}
                  className='px-4 py-2.5 rounded-xl cursor-pointer hover:text-emerald-700'
                >
                  My Profile
                </p>
                <p
                  onClick={() => { setShowMenu(false); navigate('/my-appointments'); }}
                  className='px-4 py-2.5 rounded-xl cursor-pointer hover:text-emerald-700'
                >
                  My Appointments
                </p>
                <button
                  onClick={() => { setShowMenu(false); setToken(false); }}
                  className='w-full py-2.5 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all mt-1 cursor-pointer'
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setShowMenu(false); navigate('/login'); }}
                className='w-full py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-sm transition-all cursor-pointer'
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
