import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'
export default function Conversion() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getList = () => {
    _fetchApi(
      '/api/getBYID?status=file_no_generated',
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
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      {/* {JSON.stringify(data)} */}
      <h5 className="mb-4">Conversion to Statutory Right of Occupancy</h5>
      <input type="search" placeholder="Search" className="input_field mb-3" />

      <div>
        <Table borderless striped responsive size="sm">
          <thead>
            <tr>
              <td>S/N</td>
              <td>Applicant's Full Name</td>
              <td>Location</td>
              <td>Plot No</td>
              <td>Plant No</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{item.Applicant_full_name}</td>
                <td>{item.Business_location}</td>
                <td>{item.plot_no}</td>
                <td>{item.plan_no}</td>
                <td>
                  <button
                    className="blue table_btn"
                    onClick={() =>
                      navigate(
                        `/conversion-form?application_file_number=${item.file_no}`,
                      )
                    }
                  >
                    Convert
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
