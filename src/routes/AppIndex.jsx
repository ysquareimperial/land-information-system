import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Sidebar2 from '../componens/Sidebar2'
export default function AppIndex() {
  return (
    <div>
      <Row className="m-0 wrap_">
        <Col md={2} className="p-0 m-0">
          <Sidebar2 />
        </Col>
        <Col md={10} className="p-0 m-0 _outlet p-1" >
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}
