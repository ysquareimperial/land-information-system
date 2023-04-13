import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const navigate = useNavigate()
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    {
      id: 2,
      label: 'Require Documents',
      icon: BsPencilSquare,
      link: '/required-docs',
    },
    {
      id: 3,
      label: 'List Documents',
      icon: TbBrandGoogleAnalytics,
      link: '/list-docs',
    },
    {
      id: 4,
      label: 'Recommendation Letter',
      icon: TbBrandGoogleAnalytics,
      link: '/recommendation-letter',
    },
    {
      id: 5,
      label: 'Side Item',
      icon: TbBrandGoogleAnalytics,
      link: '',
    },
  ]
  const location = useLocation()
  return (
    <div className="sidebar">
      <div className="sidebar_cont">
        <p className="items_head pt-3">LAND INFORMATION SYSTEM</p>
        {/* {JSON.stringify(location.pathname)} */}
        {menuItems.map((menu) => {
          return (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === menu.link
                      ? 'active_sidebar_item'
                      : `sidebar_item_`
                  }
                  onClick={() => navigate(menu.link)}
                >
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
