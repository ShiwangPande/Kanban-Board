import React from 'react';
import PropTypes from 'prop-types';

export default function TicketCard({ ticket, users }) {
  const assignedUser = users.find(user => user.id === ticket.userId);

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return '/assets/UrgentPrioritycolour.svg';
      case 3: return '/assets/High-Priority.svg';
      case 2: return '/assets/MediumPriority.svg';
      case 1: return '/assets/Low-Priority.svg';
      default: return '/assets/No-priority.svg';
    }
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {assignedUser && (
          <div className="user-avatar">
            <img src={`https://ui-avatars.com/api/?name=${assignedUser.name}&background=random`} alt={assignedUser.name} />
            <span className={`availability-indicator ${assignedUser.available ? 'available' : ''}`}></span>
          </div>
        )}
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-tags">
        <div className="tag priority-tag">
          <img src={getPriorityIcon(ticket.priority)} alt="Priority" className="icon" />
        </div>
        {ticket.tag.map((tag, index) => (
          <div key={index} className="tag feature-tag">
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

TicketCard.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  users: PropTypes.array.isRequired,
};