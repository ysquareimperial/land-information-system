import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function ApplicationForConseent() {
  const navigate = useNavigate()
  const [list, setList] = useState({
    right_of_occupancy_number: '',
    name_of_applicant: '',
    local_and_correspondence: '',
    name_of_holder: '',
    local_of_right_of_occupancy: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/layout_policies', list, (res) => {
      console.log(res)
      if (res.succes) {
        setLoading(false)
        setList({
          right_of_occupancy_number: '',
          name_of_applicant: '',
          local_and_correspondence: '',
          name_of_holder: '',
          local_of_right_of_occupancy: '',
        })
        alert('success')
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <div
          className="mb-3"
          style={{ height: 70, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div>
            <button className=" back" onClick={() => navigate(-1)}>
              <BsArrowLeft size="1.5rem" />{' '}
            </button>
          </div>
          <div>
            <h5 className="mb-3">
              Application For Consent To Mortgage Statutory Right Of Occupancy
            </h5>
          </div>
        </div>
        {/* {JSON.stringify(list)} */}
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Right Of OCCupancy Number</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="right_of_occupancy_number"
                value={list.right_of_occupancy_number}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col lg={3}>
            <label className="input_label">Name Of Applicant</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="name_of_applicant"
                value={list.name_of_applicant}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <label className="input_label">
              Local And Correspondence Address
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                name="local_and_correspondence"
                value={list.local_and_correspondence}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Name Of Holder (If Defferent From Application)
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                name="name_of_holder"
                value={list.name_of_holder}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Date Of Grant</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="date_of_grant"
                value={list.date_of_grant}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Purpose</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="purpose"
                value={list.purpose}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Mortgagor Institution</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="mortgagor_institution"
                value={list.mortgagor_institution}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Location And Correspondence Address
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="lacation_and_correspondence_address"
                value={list.lacation_and_correspondence_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">GSM</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="gsm"
                value={list.gsm}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Amount Of Consideration N</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="amount_of_consideration_n"
                value={list.amount_of_consideration_n}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Specify Special Mortgate Tearm
            </label>
            <div>
              <input
                className="input_field"
                type="number"
                name="specify_special_mortgage_tearm"
                value={list.specify_special_mortgage_tearm}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="mt-3 app_btn" onClick={handleSubmit}>
            {loading ? '...loading' : 'Submit'}
          </button>
        </div>
      </Card>
    </div>
  )
}
