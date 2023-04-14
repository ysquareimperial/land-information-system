import React from 'react'
import { Card, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
export default function Conversion() {
  const navigate = useNavigate()
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">
        Application for Conversion to Statutory Right of Occupancy
      </h5>
      <input type='search' placeholder='Search' className='input_field mb-3'/>

      <div>
        <Table borderless striped responsive size='sm'>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Applicant's Full Name</td>
              <td>Phone</td>
              <td>Occupation</td>
              <td>Nationality</td>
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
                  className="blue table_btn"
                  onClick={() => navigate('/conversion-form')}
                >
                  Convert
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  )
}
