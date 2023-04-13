import React, { useState } from 'react'
import { Button, Card, CardBody, Col, input, Label, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function Application_form() {
  const _form = {
    Applicant_full_name: '',
    registration_particulars: '',
    Business_location: '',
    correspondance_address: '',
    Annual_income: '',
    Allocated_before: '',
    Applicant_nationality: '',
    State_of_origin: '',
    occupation_business: '',
    nature_of_business: '',
    company_registered_under: '',
    when_where_occupancy_no: '',
    purpose_of_land_use: '',
    purpose_for_application_required: '',
    acitivity_intended_to_undertake: '',
    type_of_building_erected: '',
    estimated_amount_to_spenr: '',
    source_financing: '',
    length_of_term_required: '',
    do_you_have_biz_in_kano: '',
    address_of_local_rep: '',
    power_of_attorney_if_any: '',
    location_of_land_required: '',
    application_date: '',
    // query_type: "Insert",
  }
  const [form, setForm] = useState(_form)
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/Application_form', form, (res) => {
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
  }

  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className='mb-3'>Application Form</h5>
        {/* {JSON.stringify(form)} */}

        <Row>
          <Col md={3}>
            <label className="input_label">Applicant Full Name</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="Applicant_full_name"
                value={form.Applicant_full_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Registration Particulars</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="registration_particulars"
                value={form.registration_particulars}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Business Location</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="Business_location"
                value={form.Business_location}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Correspondance Address</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="correspondance_address"
                value={form.correspondance_address}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Annual Income</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="Annual_income"
                value={form.Annual_income}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Allocated Before</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="Allocated_before"
                value={form.Allocated_before}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Applicant Nationality</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="Applicant_nationality"
                value={form.Applicant_nationality}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">State Of Origin</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="State_of_origin"
                value={form.State_of_origin}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Occupation Business</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="occupation_business"
                value={form.occupation_business}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Nature Of Business</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="nature_of_business"
                value={form.nature_of_business}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Company Registered Under</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="company_registered_under"
                value={form.company_registered_under}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">When Where Occupancy N</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="when_where_occupancy_no"
                value={form.when_where_occupancy_no}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Purpose Of Land Use</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="purpose_of_land_use"
                value={form.purpose_of_land_use}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">
              Purpose For Application Required
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="purpose_for_application_required"
                value={form.purpose_for_application_required}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">
              Acitivity Intended To Undertake
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="acitivity_intended_to_undertake"
                value={form.acitivity_intended_to_undertake}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Type Of Building Erected</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="type_of_building_erected"
                value={form.type_of_building_erected}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Estimated Amount To Spenr</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="estimated_amount_to_spenr"
                value={form.estimated_amount_to_spenr}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Source Financing </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="source_financing"
                value={form.source_financing}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Length Of Term Required</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="length_of_term_required"
                value={form.length_of_term_required}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Do You Have Biz In Kano</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="do_you_have_biz_in_kano"
                value={form.do_you_have_biz_in_kano}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Address Of Local Rep</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="address_of_local_rep"
                value={form.address_of_local_rep}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Power Of Attorney If Any</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="power_of_attorney_if_any"
                value={form.power_of_attorney_if_any}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Location Of Land Required</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="location_of_land_required"
                value={form.location_of_land_required}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Application Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="application_date"
                value={form.application_date}
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
