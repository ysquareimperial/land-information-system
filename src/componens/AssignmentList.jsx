import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table, Modal } from 'reactstrap'
import SearchBar from './SearchBar'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'
import ResAppPDFView from './PDF/ResAppPDFView'
export default function AssignmentList() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const [data, setData] = useState([])

  const getList = () => {
    _fetchApi(
      '/api/getTriple',
      (res) => {
        setData(res.results[0])
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getList()
  }, [])
  const [newData, setNewData] = useState({})
  return (
    <div>
      {/* {JSON.stringify(data[0])} */}
      <Card className="app_primary_card m-2 shadow p-4">
        <Row>
          <Col md={6}>
            {' '}
            <h5 className="mb-3">Approved Applications</h5>
          </Col>
          <Col md={6}>
            {/* <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/assignment')}
            >
              <BsPlusLg /> New Assignment
            </button> */}
          </Col>
        </Row>
        <SearchBar />

        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant File No</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Occupation</td>
              <td style={{ fontWeight: 'bold' }}>State</td>
              <td style={{ fontWeight: 'bold' }}>
                {' '}
                <div style={{ float: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{item.file_no}</td>
                <td>{item.Applicant_full_name}</td>
                <td>{item.Business_location}</td>
                <td>{item.occupation_business}</td>
                <td>{item.State_of_origin}</td>
                <td>
                  <div style={{ float: 'right' }}>
                    <button
                      className="blue paid "
                      onClick={() =>
                        navigate(
                          `/assignment?application_file_number=${item.file_no}`,
                        )
                      }
                    >
                      New Assignment
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}
