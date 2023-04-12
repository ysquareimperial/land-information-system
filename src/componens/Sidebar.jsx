import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
export default function Sidebar() {
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    { id: 2, label: 'Permanent Secretary', icon: BsPencilSquare, link: '/publish' },
    {
      id: 3,
      label: 'Director Land',
      icon: TbBrandGoogleAnalytics,
      link: '/analytics',
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
  return (
    <div className="sidebar">
        <div className='sidebar_cont'>

      <p className="items_head mt-3">LAND INFORMATION SYSTEM</p>
      {menuItems.map((menu) => {
          return (
          <div>
            <div className="d-flex">
              <span className={`sidebar_item_`}>
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
