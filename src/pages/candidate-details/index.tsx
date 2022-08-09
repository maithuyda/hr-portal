import React from 'react';
import './index.scss';
import CandidateDetailsTimeline from '../../components/candidate-details-timeline';
import EditDetailsAppointment from '../../components/edit-details-appointment';
import EditDetailsCandidate from '../../components/edit-details-candidate';

export default function CandidateDetails() {
  return (
    <div className="candidate-details">
      <div className="candidate-details__timeline">
        <CandidateDetailsTimeline />
      </div>
      <div className="candidate-details__content">
        <div className="candidate-details__content--left">
          <EditDetailsAppointment />
        </div>
        <div className="candidate-details__content--right">
          <EditDetailsCandidate />
        </div>
      </div>
    </div>
  );
}
