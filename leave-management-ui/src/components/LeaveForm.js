import { useState } from "react";
import { applyLeave } from "../services/leaveservice";

function LeaveForm({ refresh }) {
  const [leave, setLeave] = useState({
    employeeName: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await applyLeave(leave);
    alert("Leave Applied Successfully");
    refresh();
    setLeave({
      employeeName: "",
      leaveType: "",
      fromDate: "",
      toDate: "",
      reason: ""
    });
  };

  return (
    <div className="card p-3 mb-4">
      <h4>Apply for Leave</h4>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          name="employeeName"
          placeholder="Employee Name"
          value={leave.employeeName}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          name="leaveType"
          placeholder="Leave Type (Sick / Casual)"
          value={leave.leaveType}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          type="date"
          name="fromDate"
          value={leave.fromDate}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          type="date"
          name="toDate"
          value={leave.toDate}
          onChange={handleChange}
          required
        />

        <textarea className="form-control mb-2"
          name="reason"
          placeholder="Reason"
          value={leave.reason}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Apply Leave
        </button>
      </form>
    </div>
  );
}

export default LeaveForm;
