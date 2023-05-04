import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Button, Card, Col, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

export default function ListTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getList = () => {
    _fetchApi(
      '/api/getList',
      (res) => {
        console.log(res)
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data)} */}
        <Row>
          <Col md={6}>
            {' '}
            <h5 className="mb-3">List Documents</h5>
          </Col>
          <Col md={6}>
            <button
              className="app_btn"
              style={{ float: 'right' }}
              onClick={() => navigate('/list-docs')}
            >
              <BsPlusLg /> New List
            </button>
          </Col>
        </Row>

        <SearchBar />
        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Type</td>
              <td style={{ fontWeight: 'bold' }}>Document Name</td>
              <td style={{ fontWeight: 'bold' }}>Description</td>
              <td style={{ fontWeight: 'bold' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {data[0]?.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.type_application}</td>
                <td>{i.document_name}</td>
                <td>{i.description}</td>
                <td>
                  <button className="paid">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}
