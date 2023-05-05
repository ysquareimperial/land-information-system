import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

function FinanceTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getID = () => {
    _fetchApi(
      '/api/getBYID?status=application',
      (res) => {
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getID()
  }, [])
  const [hello, setHello] = useState('')

  const rows = []
  data[0]?.forEach((item, i) => {
    if (
      item.application_id
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase()) === -1 &&
      item.Applicant_full_name.toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase()) === -1
    ) {
      return
    }
    rows.push(
      <tr key={i} className="p-0 m-0">
        <td>{item.Applicant_full_name}</td>
        <td>{item.application_id}</td>
        <td>{item.State_of_origin}</td>
        <td>{item.occupation_business}</td>
        <td>
          <div style={{ float: 'right' }}>
            <button
              className="paid"
              onClick={() =>
                navigate(
                  `/finance-form?applicant_full_name=${item.Applicant_full_name}&application_id=${item.application_id}&type=${item.type}`,
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
            <h5 className="mb-3">Finance</h5>
          </Col>
          <Col md={6}>
            <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/finance-form')}
            >
              <BsPlusLg /> Add New
            </button>
          </Col>
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

export default FinanceTable
