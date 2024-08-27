import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [selectedPage, setSelectedPage] = useState(1); 

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${selectedPage}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Data for page ${selectedPage}:`, data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedPage]);

  const handleChange = (e) => {
    setSelectedPage(e.target.value);
  };

  return (
    <div>
      <h1>User List Page</h1>
      <select value={selectedPage} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Check the console to see the user data fetched from the API.</p>
    </div>
  );
};

export default UserList;
