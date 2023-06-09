import React, { useState } from 'react'
import { GoDashboard } from 'react-icons/go'
// import { IoIosArrowUp, IoIosArrowForward } from 'react-icons/ti'
import { IoIosArrowUp, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
// import { AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Sidebar2() {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showSubMenuS, setShowSubMenuS] = useState(false)
  const [showSubMenuC, setShowSubMenuC] = useState(false)
  const [showSubMenuAss, setShowSubMenuAss] = useState(false)
  const [showSubMenuA, setShowSubMenuA] = useState(false)
  const [showSubMenuD, setShowSubMenuD] = useState(false)
  const [showSubMenuE, setShowSubMenuE] = useState(false)
  const [showSubMenuG, setShowSubMenuG] = useState(false)
  const [showSubMenuI, setShowSubMenuI] = useState(false)
  const [showSubMenuCM, setShowSubMenuCM] = useState(false)
  const [showSubMenuPP, setShowSubMenuPP] = useState(false)
  const [showSubMenuPR, setShowSubMenuPR] = useState(false)
  const [showRegistryMenu, setShowRegistryMenu] = useState(false)
  const drop = () => {
    setShowSubMenu((p) => !p)
  }
  const dropS = () => {
    setShowSubMenuS((p) => !p)
  }
  const dropC = () => {
    setShowSubMenuC((p) => !p)
  }
  const dropA = () => {
    setShowSubMenuA((p) => !p)
  }
  const dropD = () => {
    setShowSubMenuD((p) => !p)
  }
  const dropE = () => {
    setShowSubMenuE((p) => !p)
  }
  const dropG = () => {
    setShowSubMenuG((p) => !p)
  }
  const dropI = () => {
    setShowSubMenuI((p) => !p)
  }
  const dropPP = () => {
    setShowSubMenuPP((p) => !p)
  }
  const dropCM = () => {
    setShowSubMenuCM((p) => !p)
  }

  const dropPR = () => {
    setShowSubMenuPR((p) => !p)
  }

  const dropRegistry = () => {
    setShowRegistryMenu((p) => !p)
  }

  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="sidebar_cont">
        <p className="items_head pt-3">LAND INFORMATION SYSTEM</p>
        <div>
          <div className="d-flex">
            <span
              className={
                location.pathname === '/dashboard'
                  ? 'active_sidebar_item'
                  : `sidebar_item_ `
              }
              onClick={() => navigate('/dashboard')}
            >
              <GoDashboard size="1.2rem" className="sidebar_icon" />
              Dashboard
            </span>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropCM}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            Commissioner
            {showSubMenuCM ? (
              <IoIosArrowUp
                style={{ marginRight: 5, marginTop: -2 }}
                size="1.1rem"
              />
            ) : (
              <IoIosArrowDown
                size="1.1rem"
                style={{ marginRight: 5, marginTop: -2 }}
              />
            )}
          </span>
        </p>
        <>
          {showSubMenuCM ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/cadestral-recom?type=comm-gov')}
                  // onClick={() => navigate('/generate-recommendation-comm-gov')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Generate Rec. Letter
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* ////////////////////////////////////////////////////*/}
        <p className="sidebar_item_" onClick={dropPR}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            {showSubMenuPR ? (
              <IoIosArrowUp
                style={{ marginRight: 5, marginTop: -2 }}
                size="1.1rem"
              />
            ) : (
              <IoIosArrowDown
                size="1.1rem"
                style={{ marginRight: 5, marginTop: -2 }}
              />
            )}
            PRS
          </span>
        </p>
        <>
          {showSubMenuPR ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/cadestral-recom?type=perm-sec')}
                  // onClick={() => navigate('/generate-recommendation-perm-sec')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Generate Rec. Letter
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Research
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Planning
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* //////////////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={drop}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            {showSubMenu ? (
              <IoIosArrowUp
                style={{ marginRight: 5, marginTop: -2 }}
                size="1.1rem"
              />
            ) : (
              <IoIosArrowDown
                size="1.1rem"
                style={{ marginRight: 5, marginTop: -2 }}
              />
            )}
            Director Land
          </span>
        </p>
        <>
          {showSubMenu ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/cadestral-recom?type=dir-land')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Generate Rec. Letter
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Conversion
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Direct
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Miscelaneous
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === '/application-table'
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => {
                    navigate('/application-table')
                    dropRegistry()
                  }}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Registry
                </span>
              </div>
              {showRegistryMenu ? (
                <div style={{ paddingLeft: 10 }}>
                  <div className="d-flex">
                    <span
                      style={{ fontSize: 11 }}
                      className={
                        location.pathname === '/generate'
                          ? 'active_sidebar_item'
                          : `sidebar_items `
                      }
                      onClick={() => navigate('/generate')}
                    >
                      {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                      Genrate File No
                    </span>
                  </div>
                  <div className="d-flex">
                    <span
                      style={{ fontSize: 11 }}
                      className={
                        location.pathname === '/recommendation-letter-list'
                          ? 'active_sidebar_item'
                          : `sidebar_items `
                      }
                      onClick={() =>
                        navigate('/recommendation-letter-list?role=registry')
                      }
                    >
                      {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                      Genrate Rec. Letter
                    </span>
                  </div>
                  <div className="d-flex">
                    <span
                      style={{ fontSize: 11 }}
                      className={
                        location.pathname === '/grant-table'
                          ? 'active_sidebar_item'
                          : `sidebar_items `
                      }
                      onClick={() => navigate('/grant-table')}
                    >
                      {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                      Genrate Letter of Grant
                    </span>
                  </div>

                  <div className="d-flex">
                    <span
                      style={{ fontSize: 11 }}
                      className={
                        location.pathname === '/for-information-table'
                          ? 'active_sidebar_item'
                          : `sidebar_items `
                      }
                      onClick={() =>
                        navigate('/for-information-table?type=d-land')
                      }
                    >
                      {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                      For Information
                    </span>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </>
        {/* /////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropS}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            {showSubMenuS ? (
              <IoIosArrowUp
                style={{ marginRight: 5, marginTop: -2 }}
                size="1.1rem"
              />
            ) : (
              <IoIosArrowDown
                size="1.1rem"
                style={{ marginRight: 5, marginTop: -2 }}
              />
            )}
            Director Survey
          </span>
        </p>
        <>
          {showSubMenuS ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Compensation
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Examination
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  GIS Unit
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  GKN Section
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* ////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropC}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            Director Cadastral
            {showSubMenuC ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuC ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Information
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Map Record
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Record
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Report
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/plots')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Plots
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('layoutl-policies')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Layout Policy
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === 'yes'
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('yes')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Yes/No
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === '/survey-table'
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/survey-table')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Survey Report
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* //////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropA}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            Director Account
            {showSubMenuC ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuA ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/finance')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Account
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Audit
                </span>
              </div>
              <div className="d-flex">
                <span
                  style={{ fontSize: 11 }}
                  className={
                    location.pathname === '/for-information-table'
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/for-information-table?type=finace')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  For Information
                </span>
              </div>

              <div className="d-flex">
                <span
                  style={{ fontSize: 11 }}
                  className={
                    location.pathname === '/finaces-grant'
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/finaces-grant')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Grant Payment
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Store
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* /////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropD}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            DCIV
            {showSubMenuD ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuD ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Registry Unit
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* /////////////////////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropE}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            Director DEEDS
            {showSubMenuE ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuE ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/ValuationReport')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Valuation
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        
        <>
          {showSubMenuE ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/head-of-valuation')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Head of Valuation
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        <>
          {showSubMenuE ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/head-of-registration')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Head of Registration
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        <>
          {showSubMenuE ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  onClick={() => navigate('/assignment-list')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Assignment
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* ///////////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropG}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            GIS
            {showSubMenuC ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuG ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Geometry Unit
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Information Unit
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Production Unit
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Tracking Unit
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* ////////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropI}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            ICT
            {showSubMenuI ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuI ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Scanning Unit
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Neworking
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Scanning Unit
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* ////////////////////////////////////////////////////// */}
        <p className="sidebar_item_" onClick={dropPP}>
          <span>
            {/* <AiOutlineUser size="1.2rem" className="sidebar_icon" />  */}
            Physical Planning
            {showSubMenuPP ? (
              <IoIosArrowUp style={{ float: 'right' }} size="1.1rem" />
            ) : (
              <IoIosArrowForward size="1.1rem" style={{ float: 'right' }} />
            )}
          </span>
        </p>
        <>
          {showSubMenuPP ? (
            <div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Planning Recommendation
                </span>
              </div>
              <div className="d-flex">
                <span
                  className={
                    location.pathname === ''
                      ? 'active_sidebar_item'
                      : `sidebar_items `
                  }
                  //   onClick={() => navigate('')}
                >
                  {/* <AiOutlineUnorderedList
                    size="1.2rem"
                    className="sidebar_icon"
                  /> */}
                  Project Monitoring
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {/* /////////////////////////////////////////////////////// */}
      </div>
    </div>
  )
}
