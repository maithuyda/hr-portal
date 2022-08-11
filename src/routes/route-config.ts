export const RouteConfig = {
  initialRoute: `/`,
  signIn: 'sign-in',
};

export const RequireAuthRouteConfig = {
  appointmentList: 'appointment-list',
  appointmentDetails: 'appointment-details/:appointment_id',
  candidateList: 'candidate-list',
  candidateDetails: 'candidate-details/:candidate_id',
  userProfile: 'user-profile/:user_id',
  viewCV: 'view-cv/:candidate_id',
};
