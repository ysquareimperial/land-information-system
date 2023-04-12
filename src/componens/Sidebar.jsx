import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const navigate = useNavigate()
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    { id: 2, label: 'Side Item', icon: BsPencilSquare, link: '/publish' },
    {
      id: 3,
      label: 'Application Form',
      icon: TbBrandGoogleAnalytics,
      link: '/application_form',
     
    },
    {
      id: 4,
      label: 'Side Item',
      icon: TbBrandGoogleAnalytics,
      link: '/analytics',
    },
    {   
      id: 5,
      label: 'Side Item',
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
  )
}
