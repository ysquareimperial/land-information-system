import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'
export default function RecommendationLetterList() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getID = () => {
    _fetchApi(
      '/api/getBYID?status=file_no_generated',
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
  const query = useQuery()
  const role = query.get('type')
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">Generate Recomendation Letter</h5>
      {/* {JSON.stringify(role)} */}
      <input type="search" placeholder="Search" className="input_field mb-3" />
      <div>
        <Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Application Number</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <td style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</td> */}
              <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td>
              <td style={{ fontWeight: 'bold' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {data[0]?.map((item) => (
              <tr>
                <td>{item.application_id}</td>
                <td>{item.Applicant_full_name}</td>
                <td>{item.Business_location}</td>
                <td>{item.Applicant_nationality}</td>
                <td>{item.State_of_origin}</td>
                <td>{item.occupation_business}</td>
                <td>{item.length_of_term_required}</td>
                <td>
                  {' '}
                  <button
                    className="blue table_btn"
                    onClick={() =>
                      navigate(
                        `/recommendation-letter?file_no=${item.file_no}&role=${role}`,
                      )
                    }
                  >
                    process
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
