import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function AppointmentList() {
  return (
    <div className="appointment-list">
      <h1>Appointment List Page</h1>
      <Link to="/candidate-list">appointment list</Link>
      <br />
      <Link to="/candidate-details">appointment details</Link>
    </div>
  );
}
