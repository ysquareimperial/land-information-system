import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from 'reactstrap'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper'
import { BsSearch } from 'react-icons/bs'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { TiCancel } from 'react-icons/ti'
import RecForGrOfStatRightOfOccupView from './PDF/RecForGrOfStatRightOfOccupView'

export default function RecommendationLetter() {
  const [loading, setLoading] = useState(false)
  const form = {
    application_file_number: '',
    location: '',
    plot_no: '',
    plan_no: '',
    term: '',
    value_of_proposed_development: '',
    time_of_completion: '',
    annual_ground_rent: '',
    development_charges: '',
    survey_charges: '',
    recommendation_dland: '',
    Dland_signature: '',
    dland_sign_date: '',
    recommendation_permsec: '',
    Permsec_signature: '',
    PermSec_sign_date: '',
    grant_approve_reject: '',
    comm_govt_signature: '',
    Comm_govt_signature_date: '',
    recommendation_id: '',
    status: '',
  }
  const [recLetteForm, setRecLetterForm] = useState(form)
  const query = useQuery()
  const file_no = query.get('file_no')
  const name = query.get('name')
  const type = query.get('type')
  const application_file_number = query.get('application_file_number')
  const handleChange = ({ target: { name, value } }) => {
    setRecLetterForm((p) => ({ ...p, [name]: value }))
  }
  const [modal3, setModal3] = useState(false)
  const [modal, setModal] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const toggle = () => setModal(!modal)
  const navigate = useNavigate()
  const handleSubmit = () => {
    // toggle()
    setLoading(true)
    _postApi(
      `/api/create-recommendation-letter?query_type=${
        file_no === null ? 'update' : 'Insert'
      }`,
      recLetteForm,
      (res) => {
        setLoading(false)
        console.log(res)
        if (res.success) {
          alert('success')
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
  const [data, setData] = useState([])
  const getID = () => {
    _fetchApi(
      '/api/plots',
      (res) => {
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  // const [po]
  const getPolicy = () => {
    _fetchApi(
      `/api/getPolicys?layout_number=${recLetteForm.plan_no}`,
      (res) => {
        console.log(res.results[0])
        // alert(JSON.stringify(res.results[0]))
        setRecLetterForm((p) => ({
          ...p,
          term: res.results[0][0]?.policy_name,
          annual_ground_rent: res.results[0][0]?.item_description,
        }))
      },
      (err) => {
        console.log(err)
      },
    )
  }
  const [newForm, setNewForm] = useState([])
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
  const role = query.get('role')
  useEffect(() => {
    getPolicy()
  }, [recLetteForm.plan_no])
  useEffect(() => {
    getID()
    getRecBy()
    setRecLetterForm((p) => ({
      ...p,
      application_file_number:
        file_no === null ? application_file_number : file_no,
      name: name,
      type: type,
    }))
  }, [file_no])

  useEffect(() => {
    role === 'director-land'
      ? null
      : setRecLetterForm((p) => ({
          ...p,
          // value_of_proposed_development:
          //   newForm[0]?.value_of_proposed_development,
          // time_of_completion: newForm[0]?.time_of_completion,
          development_charges: newForm[0]?.development_charges,
          recommendation_dland: newForm[0]?.recommendation_dland,
          Dland_signature: newForm[0]?.Dland_signature,
          dland_sign_date: newForm[0]?.dland_sign_date,
        }))
  }, [application_file_number, query])

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Continue With</span>

            {/* <Col md={3}>
          </Col>  */}

            <Button
              color="danger"
              style={{ float: 'left' }}
              onClick={() => {
                toggle()
                navigate(-1)
              }}
            >
              <TiCancel />
            </Button>
          </div>
        </ModalHeader>

        <ModalBody>
          {/* <Require_documents />
           */}

          <RecForGrOfStatRightOfOccupView form={recLetteForm} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      {/* {JSON.stringify(recLetteForm)} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">
          {type === 'conversion'
            ? 'Generate Conversion Recommendation Letter'
            : 'Generated Recommendation Letter'}
        </h5>
        <Row className="mb-1">
          <Col lg={3}>
            <label className="input_label">Application File No</label>
            <div>
              <input
                // type="number"
                className="input_field"
                name="application_file_number"
                value={recLetteForm.application_file_number}
                onChange={handleChange}
                disabled
              />
            </div>
          </Col>

          <Col lg={3}>
            <label className="input_label">Value of Proposed Dev</label>
            <div>
              <input
                disabled={role === 'director-cadestral' ? true : false}
                //  {role === 'director-cadestral' }
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
                disabled={role === 'director-cadestral' ? true : false}
                type="text"
                className="input_field"
                name="time_of_completion"
                value={recLetteForm.time_of_completion}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col lg={3}>
            <label className="input_label">Development Charges</label>
            <div>
              <input
                disabled={role === 'director-cadestral' ? true : false}
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
          {role === 'registry' ? (
            ''
          ) : (
            <>
              <Col lg={3}>
                <label className="input_label">Recommendation Dir Land</label>
                <div>
                  <textarea
                    type=""
                    className="input_field"
                    name="recommendation_dland"
                    rows={1}
                    value={recLetteForm.recommendation_dland}
                    onChange={handleChange}
                    disabled={role === 'director-cadestral' ? true : false}
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
                    disabled={role === 'director-cadestral' ? true : false}
                  />
                </div>
              </Col>
            

          <Col lg={3}>
            <label className="input_label">Dir Land Signature Date</label>
            <div>
              <input
                type="date"
                className="input_field"
                name="dland_sign_date"
                value={recLetteForm.dland_sign_date}
                onChange={handleChange}
                disabled={role === 'director-cadestral' ? true : false}
              />
            </div>
          </Col>
          </>
          )}
          {role === 'director-cadestral' || 'director-land' ? (
            <></>
          ) : (
            <>
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
                    type="date"
                    className="input_field"
                    name="PermSec_sign_date"
                    value={recLetteForm.PermSec_sign_date}
                    onChange={handleChange}
                  />
                </div>
              </Col>
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
                    type="date"
                    className="input_field"
                    name="Comm_govt_signature_date"
                    value={recLetteForm.Comm_govt_signature_date}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </>
          )}

          {/* <Col lg={3}>
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
          </Col> */}

          <Col lg={3}>
            <label className="input_label">Location</label>
            <div className="search_input_form">
              <input
                className="input_field"
                value={recLetteForm.location}
                onChange={handleChange}
                name="hotel"
              />
              <BsSearch className="search_icon" onClick={toggle3} />
              <Modal isOpen={modal3} toggle={toggle3} size="md">
                <ModalBody>
                  <SearchBar />
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Plots Number</th>
                        <th>Layout Number</th>
                        <th>Plan Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[0]?.map((item) => (
                        <tr>
                          <td>{item.location}</td>
                          <td>{item.plots_numbers}</td>
                          <td>{item.layout_number}</td>
                          <td>{item.plan_number}</td>
                          <td>
                            <button
                              className="app_btn"
                              onClick={() => {
                                setRecLetterForm((p) => ({
                                  ...p,
                                  location: item.location,
                                  plot_no: item.plots_numbers,
                                  plan_no: item.layout_number,
                                  term:item.term,
                                  annual_ground_rent:item.annual_ground_rent,
                                  survey_charges:item.survey_charges,
                                  development_charges:item.development_charges,
                                  plan_no:item.plan_number
                                }))
                                toggle3()
                              }}
                            >
                              select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </ModalBody>
              </Modal>
            </div>
          </Col>
          <Col lg={3}>
            <label className="input_label">Plot No</label>
            <div>
              <input
                // type="number"
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
          <Col lg={3}>
            <label className="input_label">Send To</label>
            <div>
              <select
                className="input_field"
                name="status"
                value={recLetteForm.status}
                onChange={handleChange}
              >
                <option>---select---</option>
                <option>Director Land</option>
                <option>Permanent Secretary</option>
                <option>Comissioner/Governor</option>
              </select>
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
