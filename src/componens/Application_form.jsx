import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  Col,
  input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from 'reactstrap'
import { _postApi } from '../helpers/helper'
import { BsArrowLeft } from 'react-icons/bs'
import Require_documents from './Require_documents'
import { useNavigate } from 'react-router-dom'
import LocalGovernment from './LocalGovernment'
import ResAppPDFView from './PDF/ResAppPDFView'
import { TiCancel } from 'react-icons/ti'
import moment from 'moment'
export default function Application_form() {
  const today = moment().format('YYYY-MM-DD')
  const _form = {
    Applicant_full_name: '',
    registration_particulars: '',
    Business_location: '',
    correspondance_address: '',
    age: '',
    sex: '',
    yes_no: '',
    cert_of_occupany_no: '',
    plot_no: '',
    location: '',
    marital_stataus: '',
    residential: '',
    correspondance_address: '',
    email: '',
    phone_no: '',
    local_govt: '',
    Annual_income: '',
    Allocated_before: '',
    Applicant_nationality: '',
    State_of_origin: 'Kano',
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
    application_date: today,
    type: '',
    // query_type: "Insert",
  }
  const [form, setForm] = useState(_form)
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const [selectType, setSelectType] = useState({ type: '' })
  const handleSelectType = ({ target: { name, value } }) => {
    setSelectType((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const [appid, setAppid] = useState()
  const handleSubmit = () => {
    setLoading(true)
    toggle3()

    _postApi('/api/Application_form', form, (res) => {
      setLoading(false)
      console.log(res)
      if (res.success) {
        setAppid(res.application_id)
        toggle3()

        // setForm(_form);
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  const [country, setCountry] = useState([])
  const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((raw) => raw.json())
      .then((response) => {
        // console.log(response);
        if (response.status >= 400) {
          console.log(response)
        } else setCountry(response)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getCountries()
  }, [])
  const navigate = useNavigate()
  const newCountry = country.map((item) => item.name.common)
  const [lgas, setLGAs] = useState([])
  const [new_data, setNew_data] = useState([])
  const handleAdd = () => {
    setNew_data((p) => [
      ...p,
      {
        plot_no: form.plot_no,
        cert_of_occupancy: form.cert_of_occupany_no,
        location: form.location,
      },
    ])
    setForm((p) => ({
      ...p,
      plot_no: '',
      cert_of_occupany_no: '',
      location: '',
    }))
  }
  const handleDelete = (index) => {
    let item = new_data.filter((i, idx) => index !== idx)
    setNew_data(item)
    console.log(index)
  }
  useEffect(() => {
    selectType.type === 'Others'
      ? setForm((p) => ({ ...p, type: '' }))
      : setForm((p) => ({ ...p, type: selectType.type }))
  }, [selectType.type])

  return (
    <div>
      {/* {JSON.stringify(form.type)}
      {JSON.stringify(selectType.type)} */}

      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Continue With</span>

            {/* <Col md={3}>
          </Col>  */}

            <Button
              color="danger"
              style={{ float: 'left' }}
              onClick={() => {
                toggle3()
                navigate(-1)
              }}
            >
              <TiCancel />
            </Button>
          </div>
        </ModalHeader>

        <ModalBody>
          <div>
            {/* <p className="m-0">Your Application number : {appid}</p> */}
          </div>
          <ResAppPDFView form={form} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
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
            <h5 className="m-0">Application Form</h5>
          </div>
        </div>

        <Row>
          {/* {JSON.stringify(newCountry.sort())} */}
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
            <label className="input_label">Applicantion Type</label>
            <label className="input_label">Application Type</label>
            <div>
              <select
                className="input_field"
                name="type"
                value={selectType.type}
                onChange={handleSelectType}
              >
                <option>---select----</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Agricultural</option>
                <option>Industrial</option>
                <option>Recreational</option>
                <option>Others</option>
              </select>
            </div>
          </Col>
          {selectType.type === 'Others' ? (
            <Col md={3}>
              <label className="input_label">Other application type</label>
              <div>
                <input
                  className="input_field"
                  type="text"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                />
              </div>
            </Col>
          ) : (
            ''
          )}
          {form.type === 'commercial' ? (
            <>
              {' '}
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
            </>
          ) : (
            ''
          )}
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
          {/* CHANGESSSSSSSSSSS */}
          {form.type === 'residential' ? (
            <>
              <Col md={3}>
                <label className="input_label">Age</label>
                <div>
                  <input
                    className="input_field"
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                  />
                </div>
              </Col>

              <Col md={3}>
                <label className="input_label">Sex</label>
                <div>
                  <select
                    className="input_field"
                    type="select"
                    name="sex"
                    value={form.sex}
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </Col>
              <Col md={3}>
                <label className="input_label">Marital Status</label>
                <div>
                  <select
                    className="input_field"
                    type="select"
                    name="marital_stataus"
                    value={form.marital_stataus}
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option>single</option>
                    <option>married</option>
                  </select>
                </div>
              </Col>
            </>
          ) : (
            ''
          )}
          {form.marital_stataus === 'married' ? (
            <Col md={3}>
              <label className="input_label">Husband Adress</label>
              <div>
                <input
                  className="input_field"
                  type="text"
                  name="husband_address"
                  value={form.husband_address}
                  onChange={handleChange}
                />
              </div>
            </Col>
          ) : (
            ''
          )}
          <Col md={3}>
            <label className="input_label">Residential Address (P O B)</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="residential"
                value={form.residential}
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
            <label className="input_label">Email</label>
            <div>
              <input
                className="input_field"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Phone No</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="phone_no"
                value={form.phone_no}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">State Of Origin</label>
            <div>
              <select
                type="select"
                className="input_field "
                name="State_of_origin"
                value={form.State_of_origin}
                onChange={({ target: { value } }) => {
                  setForm((p) => ({ ...p, State_of_origin: value }))
                  let selected = LocalGovernment.find((a) => a.state === 'Kano')
                  setLGAs(selected.lgas)
                }}
              >
                <option>Any State</option>
                {LocalGovernment.map((item) => (
                  <option>{item.state}</option>
                ))}
              </select>
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Local Government</label>
            <div>
              <select
                type="select"
                className="input_field p-2"
                name="local_govt"
                value={form.local_govt}
                onChange={handleChange}
              >
                <option>Any LGA</option>
                {lgas.map((item) => (
                  <option>{item}</option>
                ))}
              </select>

              {/* <input
                className="input_field"
                type="text"
                name="local_govt"
                value={form.local_govt}
                onChange={handleChange}
              /> */}
            </div>
          </Col>
          {/* CHANGESSSSSSSSSSS */}
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
              <select
                className="input_field"
                type="select"
                name="Applicant_nationality"
                value={form.Applicant_nationality}
                onChange={handleChange}
              >
                <option>Select</option>
                {newCountry &&
                  newCountry.sort()?.map((item) => <option>{item}</option>)}
              </select>
            </div>
          </Col>
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
          {form.type === 'commercial' ? (
            <>
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
            </>
          ) : (
            ''
          )}
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
          {form.type === 'commercial' ? (
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
            </Col>
          ) : (
            ''
          )}{' '}
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
          {/* SECTIONNNNNNNNNNNNNNN */}
          <Col md={3}>
            <label className="input_label">
              Have you been allocated to any residential plot before?
            </label>
            <div>
              <select
                className="input_field"
                type="select"
                name="yes_no"
                value={form.yes_no}
                onChange={handleChange}
              >
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </Col>
          {/* <Col md={3}>
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
          </Col> */}
          {/* SECTIONNNNNNNNNNNNNNN */}
        </Row>
        {form.yes_no === 'Yes' ? (
          <Row>
            {form.yes_no === 'Yes' ? (
              <>
                <Col md={3}>
                  <label className="input_label">Plot No</label>
                  <div>
                    <input
                      className="input_field"
                      type="Number"
                      name="plot_no"
                      value={form.plot_no}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <label className="input_label">Location</label>
                  <div>
                    <input
                      className="input_field"
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <label className="input_label">Cert Of Occupany No</label>
                  <div>
                    <input
                      className="input_field"
                      type="number"
                      name="cert_of_occupany_no"
                      value={form.cert_of_occupany_no}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </>
            ) : null}
            <Col
              md={3}
              style={{ display: 'flex', alignItems: 'center', marginTop: 22 }}
            >
              <button className="app_btn" onClick={handleAdd}>
                Add
              </button>
            </Col>
            <Col>
              <Table
                striped
                borderless
                size="sm"
                className="mt-3"
                style={{ fontSize: 14 }}
              >
                <thead>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Plot No</td>
                    <td style={{ fontWeight: 'bold' }}>Location</td>
                    <td style={{ fontWeight: 'bold' }}>Cert Of Occupancy</td>
                    <td style={{ fontWeight: 'bold' }}>
                      {' '}
                      <div style={{ float: 'right' }}>Action</div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {new_data?.map((item, index) => (
                    <tr>
                      <td>{item.plot_no}</td>
                      <td>{item.location}</td>
                      <td>{item.cert_of_occupancy}</td>
                      <td>
                        <div style={{ float: 'right' }}>
                          <button
                            className="paid"
                            onClick={() => handleDelete(index)}
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : (
          ''
        )}
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
