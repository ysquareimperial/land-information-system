import React, { useEffect, useState } from "react";
import { Card, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { _fetchApi } from "../helpers/helper";

export default function ForInformationTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getList = () => {
    _fetchApi(
      "/api/getGrant",
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
      {/* {JSON.stringify(data)} */}
      <input type="search" placeholder="Search" className="input_field mb-3" />
      <div>
        <Table borderless striped responsive>
          <thead>
            <tr>
              <td>S/N</td>
              <td>File No</td>
              <td>grant Number</td>
              <td>Date Issue</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{item.file_number}</td>
                <td>{item.grant_number}</td>
                <td>{item.date_issue}</td>
                {/* <td>{item.location}</td> */}
                <td>
                  <button
                    className="blue table_btn"
                    onClick={() =>
                      navigate("/for-information")
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
}
