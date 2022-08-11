import React from 'react';
import './index.scss';
import CandidateDetailsTimeline from '../../components/candidate-details-timeline';
import CandidatesAppointmentList from '../../components/candidate-appointment-list';
import CandidateProfile from '../../components/candidate-profile';
import './index.scss';

export default function CandidateDetails() {
  return (
    <div className="candidate-details">
      <div className="candidate-details__timeline">
        <CandidateDetailsTimeline />
      </div>
      <div className="candidate-details__content">
        <CandidatesAppointmentList />
        <CandidateProfile />
      </div>
    </div>
  );
}
