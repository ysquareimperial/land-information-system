import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

function ConversionList() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getConversions = () => {
    _fetchApi(
      '/api/getConversion?status=pending',
      (res) => {
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getConversions()
  }, [])
  const [hello, setHello] = useState('')

  const rows = []
  data[0]?.forEach((item, i) => {
    if (
      item.applicant_full_name
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase()) === -1 &&
      item.file_no.toString().toLowerCase().indexOf(hello.toLowerCase()) === -1
    ) {
      return
    }
    rows.push(
      <tr key={i} className="p-0 m-0">
        <td>{item.applicant_full_name}</td>
        <td>{item.file_no}</td>
        <td>{item.state_of_origin}</td>
        <td>{item.occupation}</td>
        <td>
          <div style={{ float: 'right' }}>
            <button
              className="paid"
              onClick={() =>
                navigate(
                  `/finance-form?applicant_full_name=${item.applicant_full_name}&application_id=${item.file_no}&type=conversion`,
                )
              }
            >
              Process Payment
            </button>
          </div>
        </td>
      </tr>,
    )
  })
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data[0])} */}
        <Row>
          <Col md={6}>
            {' '}
            <h5 className="mb-3">Conversion List</h5>
          </Col>
          <Col md={6}></Col>
        </Row>

        <Input
          type="text"
          className="mt-3"
          name="hello"
          value={hello}
          placeholder="Search by Application Number or Applicant Name"
          onChange={(e) => setHello(e.target.value)}
        />

        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Applicant Name</td>
              <td style={{ fontWeight: 'bold' }}>Applicantion Number</td>
              <td style={{ fontWeight: 'bold' }}>State of origin</td>
              <td style={{ fontWeight: 'bold' }}>Bussiness Occupation</td>
              <td style={{ fontWeight: 'bold' }}>
                {' '}
                <div style={{ float: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </div>
  )
}

export default ConversionList
