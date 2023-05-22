import React, { useEffect } from 'react'
import { Card, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function GenerateRecPermsSec() {
  const [loading, setLoading] = useState()
  const [newForm, setNewForm] = useState([])
  const query = useQuery()
  const file_no = query.get('application_file_number')
  const getRecBy = () => {
    _fetchApi(
      `/api/getAppBYID?application_file_number=${file_no}`,
      (res) => {
        if (res.success) {
          setNewForm(res.results[0])
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }

  useEffect(() => {
    getRecBy()
  }, [file_no])

  // const today = moment().format('YYYY-MM-DD')
  const [form, setForm] = useState({
    PermSec_sign_date: '',
    recommendation_permsec: '',
    application_file_number: file_no,
  })
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const handleSubmit = () => {
    // toggle()
    setLoading(true)
    _postApi(
      `/api/create-recommendation-letter?query_type=permsec`,
      form,
      (res) => {
        setLoading(false)
        console.log(res)
        if (res.success) {
          alert('success')
          navigate(-1)
          toggle()
          // setRecLetterForm(form)
        }
      },
    ),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  return (
    <div>
      {/* {JSON.stringify(newForm)} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <Row className="mb-2">
          <Col md={10}>
            <h5 className="mb-3">Generate Recommendation Letter</h5>
          </Col>
          <Col md={2}>
            <label className="input_label">Date</label>
            <div>
              <input
                name="PermSec_sign_date"
                value={form.PermSec_sign_date}
                onChange={handleChange}
                type="date"
                className="input_field"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Application File No</label>
            <h5>{newForm && newForm[0]?.application_file_number}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Value of Proposed Dev</label>
            <h5>{newForm && newForm[0]?.value_of_proposed_development}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Time of Completion</label>
            <h5>{newForm && newForm[0]?.time_of_completion}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Development Charges</label>
            <h5>{newForm && newForm[0]?.development_charges}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Survey Charges</label>
            <h5>{newForm && newForm[0]?.survey_charges}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Location</label>
            <h5>{newForm && newForm[0]?.location}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plot No</label>
            <h5>{newForm && newForm[0]?.plot_no}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plan No</label>
            <h5>{newForm && newForm[0]?.plan_no}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Term</label>
            <h5>{newForm && newForm[0]?.term}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Annual Ground Rent</label>
            <h5>{newForm && newForm[0]?.annual_ground_rent}</h5>
          </Col>
          <Col lg={3}>
            <label className="input_label">Director Land Signature</label>
            <h5>Dir. Land</h5>
          </Col>
          <Col lg={3}>
            <label className="input_label">Director Land Signature Date</label>
            <h5>{newForm && newForm[0]?.dland_sign_date}</h5>
          </Col>
          <Col lg={12}>
            {/* <label className="input_label">Director Land Recommendation</label> */}
            {/* <h5>{newForm&&newForm[0]?.recommendation_dland}</h5> */}
            <label className="input_label mt-3">
              <b>
                {' '}
                The Director of Land recommends/does not recommend the
                application for the following reasons:
              </b>
            </label>
            <h5>{newForm && newForm[0]?.recommendation_dland}</h5>
            {/* <div>
              <textarea
                type=""
                // name='recommendation_permsec'
                value={newForm && newForm[0]?.recommendation_dland}
                // onChange={handleChange}
                className="input_field"
                disabled
                placeholder="write recommendation here..."
                rows={4}
              />
            </div> */}
          </Col>
        </Row>
        {/* <Col lg={3}>
          <label className="input_label">Date</label>
          <div>
            <input
              type="date"
              name="PermSec_sign_date"
              value={form.PermSec_sign_date}
              onChange={handleChange}
              className="input_field"
            />
          </div>
        </Col> */}
        <label className="input_label mt-3">
          <b>
            I recommend/do not recommend the application for Grant over Plot No:{' '}
            <span style={{ fontSize: 15 }}>
              {' '}
              {newForm && newForm[0]?.plot_no}{' '}
            </span>
            Plan No:{' '}
            <span style={{ fontSize: 15 }}>
              {' '}
              {newForm && newForm[0]?.plan_no}{' '}
            </span>
            Location:{' '}
            <span style={{ fontSize: 15 }}>
              {' '}
              {newForm && newForm[0]?.location}
            </span>
          </b>
        </label>
        <div>
          <textarea
            type=""
            name="recommendation_permsec"
            value={form.recommendation_permsec}
            onChange={handleChange}
            className="input_field"
            placeholder="write recommendation here..."
            rows={4}
          />
        </div>
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
              Send to Comm/Gov.
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}
