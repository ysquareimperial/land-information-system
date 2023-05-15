import React, { useEffect, useState } from "react";
import { Card, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { _fetchApi, useQuery } from "../helpers/helper";

export default function ForInformationTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
const query = useQuery();

const type = query.get('type')
  const getList = () => {
    _fetchApi(
      "/api/getForInfo",
      (res) => {
        setData(res.results[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">Applications</h5>
      {JSON.stringify(type)}
      <input type="search" placeholder="Search" className="input_field mb-3" />
      <div>
        <Table borderless striped responsive>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Applicat Name</td>
              <td>File No</td>
              <td>Address</td>
              <td>Date Issue</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{item.Applicant_full_name}</td>
                <td>{item.file_no}</td>
                <td>{item.correspondance_address}</td>
                <td>{item.application_date}</td>
                {/* <td>{item.location}</td> */}
                <td>
                  {
                    type === 'finace'?
                    <button
                    className="blue table_btn"
                    onClick={() =>
                      navigate(`/finance-form?application_id=${item.file_no}&applicant_full_name=${item.Applicant_full_name}&type=For information`)
                    }
                  >
                    Process Payment
                  </button>:                  <button
                    className="blue table_btn"
                    onClick={() =>
                      navigate(`/for-information?file_no=${item.file_no}`)
                    }
                  >
                    View
                  </button>
                
                  }
                  </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
}
