export function groupTickets(tickets, grouping) {
  return tickets.reduce((acc, ticket) => {
    const key = grouping === 'user' ? ticket.userId : ticket[grouping];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});
}

export function sortTickets(groupedTickets, sorting) {
  const sortedTickets = { ...groupedTickets };
  Object.keys(sortedTickets).forEach(key => {
    sortedTickets[key].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  });
  return sortedTickets;
}