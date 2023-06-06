import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _fetchApi, useQuery } from '../helpers/helper'

export default function HeadOfValuationProcess() {
  const [occright, setOccright] = useState({})
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    type_of_building: '',
    no_of_floors: '',
    no_of_blocks: '',
    stage_of_development: '',
    value_of_development: '',
    date: '',
    head_of_valuation_signature: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const query = useQuery()
  const rightOfOccupancyNumber = query.get('occupancy_number')
  const getAssignments = () => {
    _fetchApi(
      `/app/get-assignment?right_of_occupancy_number=${rightOfOccupancyNumber}`,
      (res) => {
        console.log(res)
        // if (res && res.length) {
        setData(res.results)
        if (res.results.length > 0) {
          setOccright(res.results[0][0])
        }
        // }
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getAssignments()
  }, [])
  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <div>
      {/* {JSON.stringify(form)} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <Row>
          <Col md={12}>
            {' '}
            <h5 className="mb-3">
              Application for consent to assign statutory right of occupancy
              (For Official Use Only)
            </h5>
          </Col>
        </Row>
        <div className="d-flex mb-2 mt-3" style={{ gap: 10 }}>
          <p className="m-0">
            Applicant Name: <b>{occright.full_name_of_the_applicant}</b>
          </p>
          <p className="m-0">
            Assignee Name: <b>{occright.full_name_of_assignee}</b>
          </p>
          <p className="m-0">
            Right Of Occupancy No: <b>{rightOfOccupancyNumber}</b>
          </p>
        </div>
        <Row>
          <Col md={3}>
            <label className="input_label">Type of building</label>
            <div>
              <select
                className="input_field"
                type="text"
                name="type_of_building"
                value={form.type_of_building}
                onChange={handleChange}
              >
                <option>--select--</option>
                <option>Office</option>
                <option>Bungalow</option>
                <option>Duplex</option>
                <option>Warehouse</option>
                <option>Factory building</option>
                <option>Block of flats</option>
                <option>Filling station</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">No of floors</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="no_of_floors"
                value={form.no_of_floors}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
          <Col md={3}>
            <label className="input_label">No of blocks</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="no_of_blocks"
                value={form.no_of_blocks}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
          <Col md={3}>
            <label className="input_label">Stage of development</label>
            <div>
              <select
                className="input_field"
                type="text"
                name="stage_of_development"
                value={form.stage_of_development}
                onChange={handleChange}
              >
                <option>--select--</option>
                <option>Completed</option>
                <option>Under construction</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Value of development</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="value_of_development"
                value={form.value_of_development}
                onChange={handleChange}
              />
            </div>
          </Col>{' '}
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
            <label className="input_label">Head of valuation signature</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="head_of_valuation_signature"
                value={form.head_of_valuation_signature}
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
