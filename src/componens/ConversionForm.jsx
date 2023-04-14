import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ForOfficialUseForm from './ForOfficialUseForm'

export default function ConversionForm() {
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">
          Application for Conversion to Statutory Right of Occupancy
        </h5>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Applicant's Full Name</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Age</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Occupation</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Nationality</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">State of Origin</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Home Domicile</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Address in Nigeria</label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="time_of_completion"
                // value={recLetteForm.time_of_completion}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Phone</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">
              Name and Address of Local Representatives
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Sufficient Description</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              How Customary Title Was Obtained
            </label>
            <div>
              <select className="input_field">
                <option>--select--</option>
                <option>By Purchase</option>
                <option>By Inheritance</option>
                <option>By Direct Local Government Allocation</option>
                <option>By Gift</option>
              </select>
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Purpose for Which Land Required
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="annual_ground_rent"
                // value={recLetteForm.annual_ground_rent}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">
              Value of Imprvmnt Offered & Time for Erection
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                // name="term"
                // value={recLetteForm.term}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Applicant's Src of Financing Imprvmnt Offered
            </label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Length of Term Required</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Signature of Applicant</label>
            <div>
              <input
                type="number"
                className="input_field"
                // name="value_of_proposed_development"
                // value={recLetteForm.value_of_proposed_development}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <ForOfficialUseForm label={'Accntnt, Bureau of Land Management'} />
        <div>
          <button className="app_btn mt-3" onClick={''}>
            Submit
          </button>
        </div>
      </Card>
    </div>
  )
}
