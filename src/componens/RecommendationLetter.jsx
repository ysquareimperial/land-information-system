import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function RecommendationLetter() {
  const form = {
    Application_file_number: '',
    location: '',
    plot_no: '',
    plan_no: '',
    term: '',
    value_of_proposed_development: '',
    time_of_completion: '',
    annual_ground_rent: '',
    development_charges: '',
    survey_charges: '',
    recommendation_DLand: '',
    Dland_signature: '',
    Dland_sign_date: '',
    recommendation_permsec: '',
    Permsec_signature: '',
    PermSec_sign_date: '',
    grant_approve_reject: '',
    comm_govt_signature: '',
    Comm_govt_signature_date: '',
    recommendation_id: '',
  }
  const [recLetteForm, setRecLetterForm] = useState(form)

  const handleChange = ({ target: { name, value } }) => {
    setRecLetterForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    console.log(recLetteForm)
  }
  return (
    <div>
      {/* {JSON.stringify(recLetteForm)} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Recommendation Letter</h5>
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Application File No</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="Application_file_number"
                value={recLetteForm.Application_file_number}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Location</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="location"
                value={recLetteForm.location}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Plot No</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="plot_no"
                value={recLetteForm.plot_no}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Plan No</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="plan_no"
                value={recLetteForm.plan_no}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Term</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="term"
                value={recLetteForm.term}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Value of Proposed Dev</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="value_of_proposed_development"
                value={recLetteForm.value_of_proposed_development}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Time of Completion</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="time_of_completion"
                value={recLetteForm.time_of_completion}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Annual Ground Rent</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="annual_ground_rent"
                value={recLetteForm.annual_ground_rent}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>{' '}
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Development Charges</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="development_charges"
                value={recLetteForm.development_charges}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Survey Charges</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="survey_charges"
                value={recLetteForm.survey_charges}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Recommendation Dir Land</label>
            <div>
              <input
                type=""
                className="input_field"
                name="recommendation_DLand"
                value={recLetteForm.recommendation_DLand}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Dir Land Signature</label>
            <div>
              <input
                type=""
                className="input_field"
                name="Dland_signature"
                value={recLetteForm.Dland_signature}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>{' '}
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Dir Land Signature Date</label>
            <div>
              <input
                type=""
                className="input_field"
                name="Dland_sign_date"
                value={recLetteForm.Dland_sign_date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Recommendation PSec</label>
            <div>
              <input
                type=""
                className="input_field"
                name="recommendation_permsec"
                value={recLetteForm.recommendation_permsec}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">PSec Signature</label>
            <div>
              <input
                type=""
                className="input_field"
                name="Permsec_signature"
                value={recLetteForm.Permsec_signature}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">PSec Signature Date</label>
            <div>
              <input
                type=""
                className="input_field"
                name="PermSec_sign_date"
                value={recLetteForm.PermSec_sign_date}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Grant Approve/Reject</label>
            <div>
              <input
                type=""
                className="input_field"
                name="grant_approve_reject"
                value={recLetteForm.grant_approve_reject}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Gov/Comm Signature</label>
            <div>
              <input
                type=""
                className="input_field"
                name="comm_govt_signature"
                value={recLetteForm.comm_govt_signature}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Gov/Comm Signature Date</label>
            <div>
              <input
                type=""
                className="input_field"
                name="Comm_govt_signature_date"
                value={recLetteForm.Comm_govt_signature_date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Recommendation ID</label>
            <div>
              <input
                type=""
                className="input_field"
                name="recommendation_id"
                value={recLetteForm.recommendation_id}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="app_btn mt-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Card>
    </div>
  )
}
