import React from 'react';
import SessionB from './SessionB';
import RegisterB from './registerB';
import Professionals from './professionals';
import Payment from './payments';
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
      <h2 className="admin-dashboard-heading">Admin Dashboard</h2>
        <ul className="admin-list">
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Sessions</a>
          </li>
          <li>
            <a href="#">Therapists</a>
          </li>
          <li>
            <a href="#">Payments</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        {/* Your admin content goes here */}
        <SessionB />
        <RegisterB />
        <Professionals />
        <Payment />
      </div>
    </div>
  );
};

export default AdminDashboard;
