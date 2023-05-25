import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Sidebar2 from '../componens/Sidebar2'
import CommentSection from '../componens/CommentSection'
export default function AppIndex() {
  return (
    <div>
      <Row className="m-0 wrap_">
        <Col md={2} className="p-0 m-0">
          <Sidebar2 />
        </Col>
        <Col md={8} className="p-0 m-0 _outlet p-1">
          <Outlet />
        </Col>
        <Col md={2} className="p-0 _outlet p-1">
          <CommentSection />
        </Col>
      </Row>
    </div>
  )
}
