import React, { useEffect, useState } from 'react';
import './style.css';

const Rate = ({ from }) => {
  const [rates, setRates] = useState('');

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) => response.json())
      .then((json) => setRates(json.rates.CZK));
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value"> {rates} CZK</div>
    </div>
  );
};

export default Rate;
