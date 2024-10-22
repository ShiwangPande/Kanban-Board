import React from 'react';
import PropTypes from 'prop-types';
import TicketCard from './TicketCard';

export default function Column({ name, icon, tickets, users }) {
  return (
    <div className="column">
      <div className="column-header">
        <img src={icon} alt={name} className="column-icon" />
        <h2>{name}</h2>
        <span className="ticket-count">{tickets.length}</span>
        <div className="column-actions">
          <img src="/assets/add.svg" alt="Add" className="icon" />
          <img src="/assets/threedotmenu.svg" alt="More" className="icon" />
        </div>
      </div>
      <div className="column-tickets">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} users={users} />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tickets: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};