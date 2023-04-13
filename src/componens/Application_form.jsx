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
    //
    setLoading(true)
    _postApi(
      '/api/Application_form',
      form,
      (res) => {
        setLoading(false)
        alert('Submitted')
      },
      (err) => {
        setLoading(false)
        console.log(err)
        alert('Error')
      },
    )
    // console.log(form)
  }
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5>Application Form</h5>
        {/* {JSON.stringify(form)} */}
        <Row>
          <CardBody>
            <Row>
              <Col md={3}>
                <label className="input_label">Applicant Full Name</label>
                <input
                  className="input_field"
                  type="text"
                  name="Applicant_full_name"
                  value={form.Applicant_full_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Registration Particulars</label>
                <input
                  className="input_field"
                  type="text"
                  name="registration_particulars"
                  value={form.registration_particulars}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Business Location</label>
                <input
                  className="input_field"
                  type="text"
                  name="Business_location"
                  value={form.Business_location}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Correspondance Address</label>
                <input
                  className="input_field"
                  type="text"
                  name="correspondance_address"
                  value={form.correspondance_address}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Annual Income</label>
                <input
                  className="input_field"
                  type="number"
                  name="Annual_income"
                  value={form.Annual_income}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Allocated Before</label>
                <input
                  className="input_field"
                  type="text"
                  name="Allocated_before"
                  value={form.Allocated_before}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Applicant Nationality</label>
                <input
                  className="input_field"
                  type="text"
                  name="Applicant_nationality"
                  value={form.Applicant_nationality}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">State Of Origin</label>
                <input
                  className="input_field"
                  type="text"
                  name="State_of_origin"
                  value={form.State_of_origin}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Occupation Business</label>
                <input
                  className="input_field"
                  type="text"
                  name="occupation_business"
                  value={form.occupation_business}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Nature Of Business</label>
                <input
                  className="input_field"
                  type="text"
                  name="nature_of_business"
                  value={form.nature_of_business}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Company Registered Under</label>
                <input
                  className="input_field"
                  type="text"
                  name="company_registered_under"
                  value={form.company_registered_under}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">When Where Occupancy N</label>
                <input
                  className="input_field"
                  type="text"
                  name="when_where_occupancy_no"
                  value={form.when_where_occupancy_no}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Purpose Of Land Use</label>
                <input
                  className="input_field"
                  type="text"
                  name="purpose_of_land_use"
                  value={form.purpose_of_land_use}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">
                  Purpose For Application Required
                </label>
                <input
                  className="input_field"
                  type="text"
                  name="purpose_for_application_required"
                  value={form.purpose_for_application_required}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">
                  Acitivity Intended To Undertake
                </label>
                <input
                  className="input_field"
                  type="text"
                  name="acitivity_intended_to_undertake"
                  value={form.acitivity_intended_to_undertake}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Type Of Building Erected</label>
                <input
                  className="input_field"
                  type="text"
                  name="type_of_building_erected"
                  value={form.type_of_building_erected}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Estimated Amount To Spenr</label>
                <input
                  className="input_field"
                  type="number"
                  name="estimated_amount_to_spenr"
                  value={form.estimated_amount_to_spenr}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Source Financing </label>
                <input
                  className="input_field"
                  type="text"
                  name="source_financing"
                  value={form.source_financing}
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <label className="input_label">Length Of Term Required</label>
                <input
                  className="input_field"
                  type="text"
                  name="length_of_term_required"
                  value={form.length_of_term_required}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Do You Have Biz In Kano</label>
                <input
                  className="input_field"
                  type="text"
                  name="do_you_have_biz_in_kano"
                  value={form.do_you_have_biz_in_kano}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Address Of Local Rep</label>
                <input
                  className="input_field"
                  type="text"
                  name="address_of_local_rep"
                  value={form.address_of_local_rep}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Power Of Attorney If Any</label>
                <input
                  className="input_field"
                  type="text"
                  name="power_of_attorney_if_any"
                  value={form.power_of_attorney_if_any}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Location Of Land Required</label>
                <input
                  className="input_field"
                  type="text"
                  name="location_of_land_required"
                  value={form.location_of_land_required}
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="input_label">Application Date</label>
                <input
                  className="input_field"
                  type="date"
                  name="application_date"
                  value={form.application_date}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <div>
              <button className="app_btn mt-3" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </CardBody>
        </Row>
      </Card>
    </div>
  )
}
