import React from 'react';
import PropTypes from 'prop-types';

const TicketDetails = props => {
  const { ticket } = props;

  return (
    <div className="container-fluid">
      <h3>{ticket.airline_name}</h3>
      <h3>{ticket.username}</h3>
      <h3>{ticket.city}</h3>
      <h3>{ticket.date}</h3>
    </div>
  );
};

TicketDetails.propTypes = {
  ticket: PropTypes.string.isRequired,
};

// TicketDetails.defaultProps = {
//   ticket: {},
// };

export default TicketDetails;
