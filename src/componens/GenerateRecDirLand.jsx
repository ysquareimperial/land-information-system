import React, { useEffect } from 'react'
import { Card, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function GenerateRecDirLand() {
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
  const navigate=useNavigate()
  const today = moment().format("YYYY-MM-DD");
  useEffect(()=>{
    getRecBy()
  },[file_no])
  const [form,setForm]=useState({dland_sign_date:today,recommendation_DLand:'',application_file_number:file_no})

  const handleChange = ({target:{name,value}})=>{
    setForm((p)=>({...p,[name]:value}))
  }
  const handleSubmit = () => {
    // toggle()
    setLoading(true)
    _postApi(
      `/api/create-recommendation-letter?query_type=dland`,
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
      {JSON.stringify(form)}
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Generate Recommendation Letter</h5>
        <Row>
          <Col md={3}>
            <label className="input_label">Application File No</label>
            <h5>{newForm&&newForm[0]?.application_file_number}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Value of Proposed Dev</label>
            <h5>{newForm&&newForm[0]?.value_of_proposed_development}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Time of Completion</label>
            <h5>{newForm&&newForm[0]?.time_of_completion}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Development Charges</label>
            <h5>{newForm&&newForm[0]?.development_charges}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Survey Charges</label>
            <h5>{newForm&&newForm[0]?.survey_charges}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Location</label>
            <h5>{newForm&&newForm[0]?.location}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plot No</label>
            <h5>{newForm&&newForm[0]?.plot_no}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plan No</label>
            <h5>{newForm&&newForm[0]?.plan_no }</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Term</label>
            <h5>{newForm&&newForm[0]?.term}</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Annual Ground Rent</label>
            <h5>{newForm&&newForm[0]?.annual_ground_rent}</h5>
          </Col>
          <Col lg={3}>
            <label className="input_label">Date</label>
            <div>
              <input type="date" name='dland_sign_date' value={form.dland_sign_date} onChange={handleChange} className="input_field" />
            </div>
          </Col>
        </Row>

        <label className="input_label mt-3">Recommendation Director Land</label>
        <div>
          <textarea
            type=""
            name='recommendation_DLand'
            value={form.recommendation_DLand}
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
              Send to Perm Sec.
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}
