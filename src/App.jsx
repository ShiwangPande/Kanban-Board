import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import { fetchData } from './utils/api';
import { groupTickets, sortTickets } from './utils/dataManipulation';
import './App.css';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadData();
  }, []);

  const groupedAndSortedTickets = sortTickets(groupTickets(tickets, grouping), ordering);

  return (
    <div className="app">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <KanbanBoard tickets={groupedAndSortedTickets} users={users} grouping={grouping} />
    </div>
  );
}