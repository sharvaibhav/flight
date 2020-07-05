import React, { useState, useEffect } from 'react';

const Customers = () => {
  const [Customers, setCustomers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/customer`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        setCustomers(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {Customers.map(cus => (
        <div>{cus.name}</div>
      ))}
    </div>
  );
};

export default Customers;
