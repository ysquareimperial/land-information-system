import React, { useState } from 'react'
import { Button, Card, CardBody, Col, input, Label, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'
import { BsArrowLeft } from 'react-icons/bs'

export default function Assignment() {
  const _form = {
    full_name_of_the_applicant: '',
    residential_address: '',
    correspondence_address: '',
    right_of_occupancy_number: '',
    purpose_of_right_of_occupancy: '',
    name_of_original_holder: '',
    full_name_of_assignee: '',
    residential_address_assignee: '',
    postal_address: '',
    nationality_state_of_origin: '',
    stage_of_development: '',
    plot_is_developed_or_not: '',
    amount_of_consideration: '',
    date: '',
    signature_of_applicant: '',
    signature_of_assignees: '',
    status:'Pending '
  }
  const [form, setForm] = useState(_form)
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/assignment', form, (res) => {
      setLoading(false)
      console.log(res)
      if (res.success) {
        alert('success')
        setForm(_form)
      }
    }),
    (err) => {
      setLoading(false)
        console.log(err)
      }
    console.log(form)
  }

  return (
    <div>
      {/* {JSON.stringify(form)} */}
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
            <h5 className="m-0">
              Application for Consent To Assign Statutory Right Of Occupancy
            </h5>
          </div>
        </div>
        <Row>
          <Col md={3}>
            <label className="input_label">Full Name Of The Applicant</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="full_name_of_the_applicant"
                value={form.full_name_of_the_applicant}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Residential Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="residential_address"
                value={form.residential_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Correspondence Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="correspondence_address"
                value={form.correspondence_address}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Right Of Occupancy Number</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="right_of_occupancy_number"
                value={form.right_of_occupancy_number}
                onChange={handleChange}
              />
            </div>
          </Col>
          {/* CHANGESSSSSSSSSSS */}
          <Col md={3}>
            <label className="input_label">Purpose Of Right Of Occupancy</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="purpose_of_right_of_occupancy"
                value={form.purpose_of_right_of_occupancy}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">
              Name Of Original Holder (If Different From The Applicant)
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                value={form.name_of_original_holder}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Full Name Of Assignee</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="full_name_of_assignee"
                value={form.full_name_of_assignee}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">
              Residential Address (Assignee)
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="residential_address_assignee"
                value={form.residential_address_assignee}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Postal Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="postal_address"
                value={form.postal_address}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Nationality/State Of Origin</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="nationality_state_of_origin"
                value={form.nationality_state_of_origin}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">
              state whether plot is developed or not developed
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="plot_is_developed_or_not"
                value={form.plot_is_developed_or_not}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">state Of Development</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="stage_of_development"
                value={form.stage_of_development}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Amount Of Consideration</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="amount_of_consideration"
                value={form.amount_of_consideration}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Signature of Applicant</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="signature_of_applicant"
                value={form.signature_of_applicant}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Signature of assignees</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="signature_of_assignees"
                value={form.signature_of_assignees}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>

        <div>
          {loading ? (
            <button
              className="app_btn mt-3"
              disabled
              style={{ cursor: 'not-allowed', backgroundColor: '#A9A9A9' }}
            >
              Loading...
            </button>
          ) : (
            <button className="app_btn mt-3" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}
