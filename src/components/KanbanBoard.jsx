import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

export default function KanbanBoard({ tickets, users, grouping }) {
  const getColumnIcon = (columnName) => {
    switch (grouping) {
      case 'status':
        return getStatusIcon(columnName);
      case 'priority':
        return getPriorityIcon(columnName);
      case 'user':
        return '/assets/user.svg';
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'backlog': return '/assets/Backlog.svg';
      case 'todo': return '/assets/To-do.svg';
      case 'in progress': return '/assets/in-progress.svg';
      case 'done': return '/assets/Done.svg';
      case 'canceled': return '/assets/Cancelled.svg';
      default: return '';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case '4': return '/assets/UrgentPrioritycolour.svg';
      case '3': return '/assets/High-Priority.svg';
      case '2': return '/assets/MediumPriority.svg';
      case '1': return '/assets/Low-Priority.svg';
      case '0': return '/assets/No-priority.svg';
      default: return '';
    }
  };

  const getColumnName = (key) => {
    if (grouping === 'user') {
      const user = users.find(u => u.id === key);
      return user ? user.name : 'Unassigned';
    }
    if (grouping === 'priority') {
      const priorities = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
      };
      return priorities[key] || key;
    }
    return key;
  };

  return (
    <div className="kanban-board">
      {Object.entries(tickets).map(([columnKey, columnTickets]) => (
        <Column
          key={columnKey}
          name={getColumnName(columnKey)}
          icon={getColumnIcon(columnKey)}
          tickets={columnTickets}
          users={users}
        />
      ))}
    </div>
  );
}

KanbanBoard.propTypes = {
  tickets: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  grouping: PropTypes.string.isRequired,
};