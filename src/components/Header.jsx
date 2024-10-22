import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Header({ grouping, setGrouping, ordering, setOrdering }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="display-dropdown">
        <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
          <img src="/assets/Display.svg" alt="Display" className="icon" />
          Display
          <img src="/assets/down.svg" alt="Expand" className="icon" />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  grouping: PropTypes.string.isRequired,
  setGrouping: PropTypes.func.isRequired,
  ordering: PropTypes.string.isRequired,
  setOrdering: PropTypes.func.isRequired,
};