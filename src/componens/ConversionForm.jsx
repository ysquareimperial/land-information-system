import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'reactstrap'
import ForOfficialUseForm from './ForOfficialUseForm'
import { _postApi, _fetchApi, useQuery } from '../helpers/helper'

export default function ConversionForm() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const query = useQuery()
  const application_file_number = query.get('application_file_number')
  const _form = {
    applicant_full_name: '',
    age: '',
    occupation: '',
    nationality: '',
    state_of_origin: '',
    home_domicile: '',
    add_in_nig: '',
    phone: '',
    name_add_of_lcl_rep: '',
    suff_desc: '',
    customary_title: '',
    purp_for_land_req: '',
    value_of_impr_offered_and_time_for_erection: '',
    applicants_src_of_financing_impr_offered: '',
    len_of_time_req: '',
    date: '',
    signature: '',
    file_no: `CON/${application_file_number}`,
  }
  const [form, setForm] = useState(_form)
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const handleSubmit = () => {
    _postApi('/api/conversion', form, (res) => {
      setLoading(false)
      console.log(res)
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }

  const getApplicant = () => {
    _fetchApi(
      `/api/getreByIDs?file_no=${application_file_number}`,
      (res) => {
        setData(res.results[0])
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getApplicant()
  }, [])

  useEffect(() => {
    setForm((p) => ({
      ...p,
      applicant_full_name: data[0]?.Applicant_full_name,
      occupation: data[0]?.occupation_business,
      nationality: data[0]?.Applicant_nationality,
      state_of_origin: data[0]?.State_of_origin,
      add_in_nig: data[0]?.correspondance_address,
    }))
  }, )
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Conversion to Statutory Right of Occupancy</h5>
        <Row className="mb-2">
          <Col lg={3}>
            <label className="input_label">Applicant's Full Name</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="applicant_full_name"
                value={form.applicant_full_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Age</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="age"
                value={form.age}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Occupation</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Nationality</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
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
                name="state_of_origin"
                value={form.state_of_origin}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Home Domicile</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="home_domicile"
                value={form.home_domicile}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Address in Nigeria</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="add_in_nig"
                value={form.add_in_nig}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Phone</label>
            <div>
              <input
                type="number"
                className="input_field"
                name="phone"
                value={form.phone}
                onChange={handleChange}
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
                name="name_add_of_lcl_rep"
                value={form.name_add_of_lcl_rep}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Sufficient Description</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="suff_desc"
                value={form.suff_desc}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              How Customary Title Was Obtained
            </label>
            <div>
              <select
                name="customary_title"
                value={form.customary_title}
                onChange={handleChange}
                className="input_field"
              >
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
                type="text"
                className="input_field"
                name="purp_for_land_req"
                value={form.purp_for_land_req}
                onChange={handleChange}
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
                name="value_of_impr_offered_and_time_for_erection"
                value={form.value_of_impr_offered_and_time_for_erection}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">
              Applicant's Src of Financing Imprvmnt Offered
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                name="applicants_src_of_financing_impr_offered"
                value={form.applicants_src_of_financing_impr_offered}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Length of Term Required</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="len_of_time_req"
                value={form.len_of_time_req}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                type="date"
                className="input_field"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Signature of Applicant</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="signature"
                value={form.signature}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <ForOfficialUseForm label={'Accntnt, Bureau of Land Management'} />
        <div>
          {loading ? (
            <button
              className="app_btn mt-3"
              onClick={handleSubmit}
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
