import React, { useState } from 'react';
import './index.scss';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CreateAppointment from '../../components/create-appointment-popup';

export default function AppointmentList() {
  const [appointmentPopup, setAppointmentPopup] = useState(false);
  const showModal = () => {
    setAppointmentPopup(true);
  };
  return (
    <div className="appointment-list">
      <div className="create-appointment">
        <Button size="large" className="button" onClick={showModal} type="primary">
          <PlusOutlined />
          Create Appointment
        </Button>
        <CreateAppointment isShowed={appointmentPopup} setVisible={setAppointmentPopup} />
      </div>
      <div className="title-list">
        <h2>Appointments</h2>
      </div>
    </div>
  );
}
