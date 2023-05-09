import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'
export default function GrantTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const getList = () => {
    _fetchApi(
      '/api/getCadestral?status=approved',
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
  const location = useLocation()
  const rout =
    location.pathname === '/survey-table' ? 'SurveyReport' : 'letter-of-grant'
    const [modal3, setModal3] = useState(false)
    const toggle3 = () => setModal3(!modal3)
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">
        {rout === 'letter-of-grant'
          ? 'Generate Letter Of Grant'
          : rout === 'SurveyReport'
          ? 'Survey Report'
          : ''}
      </h5>
      {/* {JSON.stringify(data)} */}
      <input type="search" placeholder="Search" className="input_field mb-3" />
      <div>
        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant File No</td>
              <td style={{ fontWeight: 'bold' }}>Location</td>
              <td style={{ fontWeight: 'bold' }}>Plot No</td>
              <td style={{ fontWeight: 'bold' }}>Plan No</td>
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
                <td>{item.application_file_number}</td>
                <td>{item.location}</td>
                <td>{item.plot_no}</td>
                <td>{item.plan_no}</td>
                <td>
                  {item.grant_status === 'generated' ? (
                    <div style={{ float: 'right' }}>
                      <button
                        className="blue app_btn "

                        onClick={() => toggle3()}
                      >
                        View
                      </button>
                    </div>
                  ) : (
                    <div style={{ float: 'right' }}>
                      <button
                        className="blue paid "
                        onClick={() =>
                          navigate(
                            `/${rout}?application_file_number=${item.application_file_number}`,
                          )
                        }
                      >
                        Process
                      </button>
                    </div>
                  )} 
                  {/* <button
                  className="blue app_btn "
                  
                  onClick={() => navigate(`/${rout}?application_file_number=${item.application_file_number}`)}
                >
                  Process
                </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
