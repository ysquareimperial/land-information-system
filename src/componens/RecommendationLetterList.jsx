import React from 'react'
import { Card, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
export default function RecommendationLetterList() {
  const navigate = useNavigate()
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">Applications</h5>
      <input type='search' placeholder='Search' className='input_field mb-3'/>
      <div>
        <Table borderless striped responsive>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Applicant File No</td>
              <td>Location</td>
              <td>Plot No</td>
              <td>Plan No</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <button
                  className="table_btn"
                  onClick={() => navigate('/recommendation-letter')}
                >
                  Approve
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
