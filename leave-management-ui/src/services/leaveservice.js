import axios from "axios";

const API_URL = "https://localhost:7281/api/leave";

export const applyLeave = (leave) => {
  return axios.post(API_URL, leave);
};

export const getAllLeaves = () => {
  return axios.get(API_URL);
};

export const updateLeaveStatus = (id, status) => {
  return axios.put(`${API_URL}/${id}`, JSON.stringify(status), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
