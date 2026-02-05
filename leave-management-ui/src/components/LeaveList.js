import { useEffect, useState } from "react";
import { getAllLeaves, updateLeaveStatus } from "../services/leaveservice";

function LeaveList({ reload }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    loadLeaves();
  }, [reload]);

  const loadLeaves = async () => {
    const res = await getAllLeaves();
    setLeaves(res.data);
  };

  const handleStatusChange = async (id, status) => {
    await updateLeaveStatus(id, status);
    loadLeaves();
  };

  return (
    <div className="card p-3">
      <h4>Leave Requests</h4>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>Dates</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map(l => (
            <tr key={l.leaveId}>
              <td>{l.employeeName}</td>
              <td>{l.leaveType}</td>
              <td>{l.fromDate} → {l.toDate}</td>
              <td>{l.reason}</td>
              <td>
                <select
                  className="form-select"
                  value={l.status}
                  onChange={(e) =>
                    handleStatusChange(l.leaveId, e.target.value)
                  }
                >
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default LeaveList;
