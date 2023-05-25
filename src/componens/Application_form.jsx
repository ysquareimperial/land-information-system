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
import { json, useNavigate } from 'react-router-dom'
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
    correspondence_address: '',
    age: '',
    sex: '',
    yes_no: '',
    cert_of_occupany_no: '',
    plot_no: '',
    location: '',
    marital_stataus: '',
    residential: '',
    email: '',
    phone_no: '',
    local_govt: '',
    Annual_income: '',
    Allocated_before: '',
    Applicant_nationality: 'Nigeria',
    State_of_origin: 'Kano',
    occupation_business: '',
    nature_of_business: '',
    company_registered_under: '',
    when_where_occupancy_no: '',
    purpose_of_land_use: '',
    purpose_for_application_required: '',
    acitivity_intended_to_undertake: '',
    type_of_building_erected: '',
    estimated_amount_to_spenr: 0,
    source_financing: '',
    proposed_value_of_building_to_be_created: '',
    annual_income_or_anticipated_income: '',
    length_of_term_required: '',
    type_of_plot_piece: '',
    house_location: '',
    house_type_of_building: '',
    do_you_have_biz_in_kano: '',
    address_of_local_rep: '',
    do_you_operate_other_location_in_kano: '',
    power_of_attorney_if_any: '',
    business_address: '',
    location_of_land_required: '',
    do_you_own_a_house: '',
    reg_of_particular_of_attorney: '',
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
  const [lgas, setLGAs] = useState(
    LocalGovernment.find((a) => a.state === 'Kano').lgas,
  )
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
      {/* {JSON.stringify(form)} */}
      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <div
          className="p-3"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <h5>Application Form</h5>
          </div>

          <div>
            <button
              className="app_btn"
              onClick={() => {
                toggle3()
                navigate(-1)
              }}
            >
              Close
            </button>
          </div>
        </div>

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
            <label className="input_label">Applicant's Full Name</label>
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
          {selectType.type === 'Commercial' ? (
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
          {selectType.type === 'Commercial' ? (
            <Col md={3}>
              <label className="input_label">
                Annual Income or Anticipated Income
              </label>
              <div>
                <input
                  className="input_field"
                  type="text"
                  name="annual_income_or_anticipated_income"
                  value={form.annual_income_or_anticipated_income}
                  onChange={handleChange}
                />
              </div>
            </Col>
          ) : (
            ''
          )}
          {/* CHANGESSSSSSSSSSS */}
          {form.type === 'Residential' ? (
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
              <label className="input_label">
                If married woman, give name & address of your husband
              </label>
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
          {selectType.type === 'Residential' ? (
            <Col md={3}>
              <label className="input_label">
                Residential Address (P O Box must be given)
              </label>
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
          ) : (
            ''
          )}
          {selectType.type === 'Residential' ? (
            <>
              <Col md={3}>
                <label className="input_label">Email(if any)</label>
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
                <label className="input_label">
                  Business Address if different from 3 above
                </label>
                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="business_address"
                    value={form.business_address}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </>
          ) : (
            ''
          )}
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
                  let selected = LocalGovernment.find((a) => a.state === value)
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
            {/* {JSON.stringify(lgas)} */}
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
          {selectType.type === 'Commercial' ? (
            <Col md={3}>
              <label className="input_label">Home Domicile</label>
              <div>
                <input
                  className="input_field"
                  type="text"
                  name="home_domicile"
                  value={form.home_domicile}
                  onChange={handleChange}
                />
              </div>
            </Col>
          ) : (
            ''
          )}
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
          {/* <Col md={3}>
            <label className="input_label">
              Have you been allocated any residential plot before
            </label>
            <div>
              <input
                className="input_field"
                type="text"
                name="Allocated_before"
                value={form.Allocated_before}
                onChange={handleChange}
              />
            </div>
          </Col> */}
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
            <label className="input_label">Occupation for Business</label>
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
          {selectType.type === 'Commercial' ? (
            <>
              <Col md={3}>
                <label className="input_label">
                  Nature Of Commerce Activity
                </label>
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
          {selectType.type === 'Commercial' ? (
            <Col md={3}>
              <label className="input_label">
                Have you been allocated commercial land before?
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
          ) : (
            ''
          )}
          {form.yes_no === 'Yes' ? (
            <Col md={3}>
              <label className="input_label">
                If answer to the above is yes, state when and where, and
                certificate of occupancy Number
              </label>
              <div>
                <input
                  className="input_field"
                  type="text"
                  name="when_where_occupancy_no"
                  value={form.when_where_occupancy_no}
                  onChange={handleChange}
                />
              </div>
            </Col>
          ) : (
            ''
          )}
          {selectType.type === 'Commercial' ? (
            <>
              <Col md={3}>
                <label className="input_label">
                  Purpose for which land above is being used
                </label>
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
                  Purpose for which land applied for is required
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
            </>
          ) : (
            ''
          )}
          {selectType.type === 'Commercial' ? (
            <>
              <Col md={3}>
                <label className="input_label">
                  What type of activities are you intend to undertake
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
              </Col>
              <Col md={3}>
                <label className="input_label">
                  Estimated amount to be spent on building
                </label>
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
            </>
          ) : (
            ''
          )}
          <Col md={3}>
            {selectType.type === 'Commercial' ? (
              <label className="input_label">
                Source of financing the building
              </label>
            ) : (
              <label className="input_label">
                Application's source of financing the building
              </label>
            )}
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

          {selectType.type === 'Residential' ? (
            <>
              <Col md={3}>
                <label className="input_label">
                  Proposed value of building to be created
                </label>

                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="proposed_value_of_building_to_be_created"
                    value={form.proposed_value_of_building_to_be_created}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col md={3}>
                <label className="input_label">
                  Type of plot/piece of land applied for (underline as
                  appropriate)
                </label>
                <div>
                  <select
                    className="input_field"
                    type="select"
                    name="type_of_plot_piece"
                    value={form.type_of_plot_piece}
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option>Low Density</option>
                    <option>Medium Density</option>
                    <option>High Density</option>
                    <option>Very High Density</option>
                  </select>
                </div>
              </Col>
            </>
          ) : (
            ''
          )}

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
          {selectType.type === 'Commercial' ? (
            <>
              <Col md={3}>
                <label className="input_label">
                  Do you, or does the company operate this, or any other
                  commercial business at any other location in Kano state
                </label>
                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="do_you_operate_other_location_in_kano"
                    value={form.do_you_operate_other_location_in_kano}
                    onChange={handleChange}
                  />
                </div>
              </Col>

              <Col md={3}>
                <label className="input_label">
                  Registration of particular of power of attorney (if any)
                </label>
                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="reg_of_particular_of_attorney"
                    value={form.reg_of_particular_of_attorney}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </>
          ) : (
            ''
          )}

          {/* {form.type === 'commercial' ? (
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
          )}{' '} */}
          <Col md={3}>
            <label className="input_label">
              Name and address of local representative
            </label>
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
          {selectType.type === 'Commercial' ? (
            <Col md={3}>
              <label className="input_label">
                Location of the Land Required(state whether Kano Metropolitant
                or any other urban center)
              </label>
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
          ) : (
            ''
          )}
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
          {selectType.type === 'Residential' ? (
            <Col md={3}>
              <label className="input_label">Do you own a house?</label>
              <div>
                <select
                  className="input_field"
                  type="select"
                  name="do_you_own_a_house"
                  value={form.do_you_own_a_house}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </Col>
          ) : (
            ''
          )}

          {selectType.type === 'Residential' &&
          form.do_you_own_a_house === 'Yes' ? (
            <>
              <Col md={3}>
                <label className="input_label">Location</label>
                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="house_location"
                    value={form.house_location}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col md={3}>
                <label className="input_label">Type of building</label>
                <div>
                  <input
                    className="input_field"
                    type="text"
                    name="house_type_of_building"
                    value={form.house_type_of_building}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </>
          ) : (
            ''
          )}
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
                  <label className="input_label">Cert Of Occupancy No</label>
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
