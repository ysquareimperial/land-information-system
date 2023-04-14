import React from 'react'
import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import {
  BsFiles,
  BsFileEarmarkText,
  BsFileEarmarkPlus,
} from 'react-icons/bs'
import { TiDocumentText } from 'react-icons/ti'
import { AiFillMoneyCollect, AiOutlineUnorderedList } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Sidebar() {
  const navigate = useNavigate()
  const menuItems = [
    { label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    // {
    //   label: 'Required Documents',
    //   icon: BsFiles,
    //   link: '/required-docs',
    // },
    {
      label: 'List Documents',
      icon: AiOutlineUnorderedList,
     
      link: '/list-table',
    },
    {
      label: 'Recommendation Letter',
      icon: BsFileEarmarkText,
      link: '/recommendation-letter',
    },
    {
      label: 'Application Form',
      icon: BsFileEarmarkPlus,
      link: '/application-table',
    },
    {
      label: 'Layout Policies',
      icon: BsFileEarmarkPlus,
      link: '/layoutl-policies',
    },
    {
      label: 'Application For Conseent',
      icon: BsFileEarmarkPlus,
      link: '/executive-govermor',
    },
    {
      id: 7,
      label: 'Extension',
      icon: BsFileEarmarkText,
      link: '/extension',
    },
    {
      id: 8,
      label: 'Re-Grant',
      icon: BsFileEarmarkText,
      link: '/re-grant',
    },
    {
      id: 9,
      label: 'Conversion',
      icon: BsFileEarmarkText,
      link: '/conversion',
    },
    { id: 6, label: 'Finance', icon: AiFillMoneyCollect, link: '/finance' },
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
