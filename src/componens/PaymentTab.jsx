import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

function PaymentTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getID = () => {
    _fetchApi(
      '/api/getSchedule',
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
      item.applicant_name
        .toString()
        .toLowerCase()
        .indexOf(hello.toLowerCase()) === -1 &&
      item.file_no.toString().toLowerCase().indexOf(hello.toLowerCase()) === -1
    ) {
      return
    }
    rows.push(
      <tr key={i} className="p-0 m-0">
        <td>{item.applicant_name}</td>
        <td>{item.file_no}</td>
        <td>{item.amount}</td>
        <td>{item.purpose_payment}</td>
        <td>
          <button
            className="app_btn"
            onClick={() =>
              navigate(
                `/finance-form?applicant_full_name=${item.applicant_name}&application_id=${item.file_no}&type=schedule payment`,
              )
            }
          >
            Process Payment
          </button>
        </td>
      </tr>,
    )
  })
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data[0])} */}
        <center>
          <h5 className="mb-3">Schedule Payment</h5>
        </center>
        <button
          className="mt-2 app_btn col-md-2"
          onClick={() => navigate('/finance-form')}
        >
          <BsPlusLg /> Add New
        </button>
        <Input
          type="text"
          className="mt-3"
          name="hello"
          value={hello}
          placeholder="Search by Application Number or Applicant Name"
          onChange={(e) => setHello(e.target.value)}
        />

        <Table striped>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Applicantion Number</th>
              <th>Amount</th>
              <th>Purpose Of Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </div>
  )
}

export default PaymentTable
