import React, { useState } from 'react'
import { Button, Card, Col, Input, Row, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
export default function ReGrant() {
  const navigate = useNavigate()
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-4">
          Application for The Re-Grant of a Statutory Right of Occupancy
        </h5>
        <input
          type="search"
          placeholder="Search"
          className="input_field mb-3"
        />
        <div>
          <Table borderless striped responsive size='sm'>
            <thead>
              <tr>
                <td>S/N</td>
                <td>Applicant's Full Name</td>
                <td>Residential Address</td>
                <td>Correspondence Address</td>
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
                    onClick={() => navigate('/re-grant-form')}
                  >
                    Re-Grant
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
