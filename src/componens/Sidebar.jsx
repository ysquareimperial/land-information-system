import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    { id: 2, label: 'Require Documents', icon: BsPencilSquare, link: '/requireed-docs' },
    {
      id: 3,
      label: 'Lst Document',
      icon: TbBrandGoogleAnalytics,
      link: '/list-docs',
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
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="sidebar">
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
  )
}
