import { useState } from "react";
import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";

function App() {
  const [reload, setReload] = useState(false);

  const refreshData = () => {
    setReload(!reload);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Leave Management System
      </h2>

      <LeaveForm refresh={refreshData} />
      <LeaveList reload={reload} />
    </div>
  );
}

export default App;
