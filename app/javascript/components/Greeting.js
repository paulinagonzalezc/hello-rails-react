import React, {useState, useEffect} from 'react';

function Greeting() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/greetings/random')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>{message}</h1>;
}

export default Greeting;
