import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
=======
import { useLocation, useNavigate } from 'react-router-dom'
>>>>>>> 2f3b79b91758a86091adacbe680d9802cf61cce2
export default function Sidebar() {
  const navigate = useNavigate()
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    { id: 2, label: 'Require Documents', icon: BsPencilSquare, link: '/requireed-docs' },
    {
      id: 3,
<<<<<<< HEAD
      label: 'Application Form',
      icon: TbBrandGoogleAnalytics,
      link: '/application_form',
     
=======
      label: 'Lst Document',
      icon: TbBrandGoogleAnalytics,
      link: '/list-docs',
>>>>>>> 2f3b79b91758a86091adacbe680d9802cf61cce2
    },
    {
      id: 4,
      label: 'Director Cadastral',
      icon: TbBrandGoogleAnalytics,
      link: '/analytics',
    },
    {   
      id: 5,
      label: 'Director Fianance',
      icon: TbBrandGoogleAnalytics,
      link: '/analytics',
    },
    {
      id: 6,
      label: 'Side Item',
      icon: TbBrandGoogleAnalytics,
      link: '/analytics',
    },
  ]
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="sidebar">
        <div className='sidebar_cont'>

      <p className="items_head mt-3">LAND INFORMATION SYSTEM</p>
      {/* {JSON.stringify(location.pathname)} */}
      {menuItems.map((menu) => {
          return (
          <div>
            <div className="d-flex">
              <span className={location.pathname===menu.link?'active_sidebar_item':`sidebar_item_`} onClick={()=>navigate(menu.link)}>
                <menu.icon size="1.2rem" className="sidebar_icon" />
                {menu.label}
              </span>
            </div>
          </div>
        )
    })}
    </div>
    </div>
  )
}
