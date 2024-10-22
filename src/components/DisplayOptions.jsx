import React from 'react';
import PropTypes from 'prop-types';

export default function DisplayOptions({
  grouping,
  setGrouping,
  sorting,
  setSorting,
}) {
  return (
    <div className="display-options">
      <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
      <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
}

DisplayOptions.propTypes = {
  grouping: PropTypes.string.isRequired,
  setGrouping: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  setSorting: PropTypes.func.isRequired,
};