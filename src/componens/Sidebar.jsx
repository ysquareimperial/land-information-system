import React, { useState } from "react";
import { GoDashboard, GoDiffAdded } from "react-icons/go";
import { TbBrandGoogleAnalytics, TbUserCircle } from "react-icons/tb";
import {
  BsFiles,
  BsFileEarmarkText,
  BsFileEarmarkPlus,
  BsBuildings,
  BsCardChecklist,
  BsPinMapFill,
  BsFillGridFill,
  BsFillBarChartLineFill,
} from "react-icons/bs";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiDocumentText,
} from "react-icons/ti";
import {
  AiFillMoneyCollect,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    // { label: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
    // {
    //   label: 'Required Documents',
    //   icon: BsFiles,
    //   link: '/required-docs',
    // },
    {
      label: "List Documents",
      icon: AiOutlineUnorderedList,

      link: "/list-table",
    },
    {
      label: "Recommendation Letter",
      icon: BsFileEarmarkText,
      link: "/recommendation-letter-list",
    },
    {
      label: "Application Form",
      icon: BsFileEarmarkPlus,
      link: "/application-table",
    },
    {
      label: "Layout Policies",
      icon: BsFileEarmarkPlus,
      link: "/layoutl-policies",
    },
    {
      label: "Application For Conseent",
      icon: BsFileEarmarkPlus,
      link: "/executive-govermor-table",
    },
    {
      id: 7,
      label: "Extension",
      icon: BsFileEarmarkText,
      link: "/extension",
    },
    {
      id: 8,
      label: "Re-Grant",
      icon: BsFileEarmarkText,
      link: "/re-grant-list",
    },
    {
      id: 9,
      label: "Conversion",
      icon: BsFileEarmarkText,
      link: "/conversion",
    },
    { id: 6, label: "Finance", icon: AiFillMoneyCollect, link: "/finance" },
  ];
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuF, setShowSubMenuF] = useState(false);
  const [showSubMenuA, setShowSubMenuA] = useState(false);
  const [showSubMenuO, setShowSubMenuO] = useState(false);
  const [showSubMenuS, setShowSubMenuS] = useState(false);
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const drop1 = () => {
    setShowSubMenu1((p) => !p);
  };
  const drop = () => {
    setShowSubMenu((p) => !p);
  };
  const dropF = () => {
    setShowSubMenuF((p) => !p);
  };
  const dropA = () => {
    setShowSubMenuA((p) => !p);
  };
  const dropO = () => {
    setShowSubMenuO((p) => !p);
  };
  const dropS = () => {
    setShowSubMenuS((p) => !p);
  };
  const drop2 = () => {
    setShowSubMenu2((p) => !p);
  };
  return (
    <div className="sidebar">
      <div className="sidebar_cont">
        <p className="items_head pt-3">LAND INFORMATION SYSTEM</p>
        {/* {JSON.stringify(location.pathname)} */}
        <div>
          {/* <div  class="nav__link collapse"> */}
          <div className="d-flex">
            <span
              className={
                location.pathname === "/dashboard"
                  ? "active_sidebar_item"
                  : `sidebar_item_ `
              }
              onClick={() => navigate("/dashboard")}
            >
              <GoDashboard size="1.2rem" className="sidebar_icon" />
              Dashboard
            </span>
            {/* </div> */}
          </div>
          <div className="d-flex">
            <span
              className={
                location.pathname === "/dashboard"
                  ? "active_sidebar_item"
                  : `sidebar_item_ `
              }
              onClick={() => navigate("/certificate-of-occupancy-rent-table")}
            >
              <GoDashboard size="1.2rem" className="sidebar_icon" />
              Certificate Of Occupancy Rent
            </span>
            {/* </div> */}
          </div>
          <div className="d-flex">
            <span
              className={
                location.pathname === "/dashboard"
                  ? "active_sidebar_item"
                  : `sidebar_item_ `
              }
              onClick={() => navigate("/application-for-consesnt-to")}
            >
              <GoDashboard size="1.2rem" className="sidebar_icon" />
              Application For Consesnt To
            </span>
            {/* </div> */}
          </div>
        </div>
        <li className="sidebar_item_" onClick={drop}>
          <span>
            <AiOutlineUser size="1.2rem" className="sidebar_icon" />{" "}
            Commissioner
            {showSubMenu ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {menuItems.map((menu) => {
          return (
            <>
              {showSubMenu ? (
                <div>
                  {/* <div  class="nav__link collapse"> */}
                  <div className="d-flex">
                    <span
                      className={
                        location.pathname === menu.link
                          ? "active_sidebar_item"
                          : `sidebar_item_ `
                      }
                      onClick={() => navigate(menu.link)}
                    >
                      <menu.icon size="1.2rem" className="sidebar_icon" />
                      {menu.label}
                    </span>
                    {/* </div> */}
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
        <li className="sidebar_item_" onClick={dropF}>
          <span>
            <BsCardChecklist size="1.2rem" className="sidebar_icon" /> Permanent
            Secretary
            {showSubMenuF ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuF ? (
          <div>
            <div className="d-flex">
              <span
                className={
                  location.pathname === "/application-table"
                    ? "active_sidebar_item"
                    : `sidebar_item_ `
                }
                onClick={() => navigate("/application-table")}
              >
                <BsFileEarmarkPlus size="1.2rem" className="sidebar_icon" />
                Application Form
              </span>
              {/* </div> */}
            </div>
          </div>
        ) : (
          ""
        )}
        <li className="sidebar_item_" onClick={drop2}>
          <span>
            <BsBuildings size="1.2rem" className="sidebar_icon" /> Director Land
            {showSubMenu2 ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenu2 ? (
          <>
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === "/generate"
                      ? "active_sidebar_item"
                      : `sidebar_item_ `
                  }
                  onClick={() => navigate("/generate")}
                >
                  <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                  Generate File Number
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === "/generate"
                      ? "active_sidebar_item"
                      : `sidebar_item_ `
                  }
                  onClick={() => navigate("/for-information-table")}
                >
                  <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                  For Information
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === "/generate"
                      ? "active_sidebar_item"
                      : `sidebar_item_ `
                  }
                  onClick={() => navigate("/request-for-survey-report")}
                >
                  <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                  Request For Survey Report
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === "/recommendation-letter-list"
                      ? "active_sidebar_item"
                      : `sidebar_item_ `
                  }
                  onClick={() => navigate("/recommendation-letter-list")}
                >
                  <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                  Recommendation Letter
                </span>
                {/* </div> */}
              </div>
            </div>
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === "/grant-table"
                      ? "active_sidebar_item"
                      : `sidebar_item_ `
                  }
                  onClick={() => navigate("/grant-table")}
                >
                  <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                  Letter Of Grant
                </span>
                {/* </div> */}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <li className="sidebar_item_" onClick={dropO}>
          <span>
            <BsPinMapFill size="1.2rem" className="sidebar_icon" /> Director
            Cadestral
            {showSubMenuO ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuO ? (
          <div>
            <div className="d-flex">
              <span
                className={
                  location.pathname === "/cadestral-recom"
                    ? "active_sidebar_item"
                    : `sidebar_item_ `
                }
                onClick={() => navigate("/cadestral-recom")}
              >
                <BsFileEarmarkText size="1.2rem" className="sidebar_icon" />
                Recommendation Letter
              </span>
              {/* </div> */}
            </div>
          </div>
        ) : (
          ""
        )}
        <li className="sidebar_item_" onClick={drop1}>
          <span>
            <BsFillGridFill size="1.2rem" className="sidebar_icon" /> Director
            Deeds
            {showSubMenu1 ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        <li className="sidebar_item_" onClick={dropS}>
          <span>
            <BsFillBarChartLineFill size="1.2rem" className="sidebar_icon" />{" "}
            Director Finance
            {showSubMenuS ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuS ? (
          <div>
            <div className="d-flex">
              <span
                className={
                  location.pathname === "/finance"
                    ? "active_sidebar_item"
                    : `sidebar_item_ `
                }
                onClick={() => navigate("/finance")}
              >
                <AiFillMoneyCollect size="1.2rem" className="sidebar_icon" />
                Finance
              </span>
              {/* </div> */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
