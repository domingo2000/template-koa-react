import axios from 'axios'
import React, { useState } from 'react'
import config from '../config/config';

interface Trick {
  id?: number
  name: string
  description: string
}

function TricksNew() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const url = `${config.API_URL}/api/tricks`;
    const trick: Trick = {
      name,
      description
    };
    axios.post(url, trick).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Enter your description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <input type="submit" />
    </form>
  )
}


export default TricksNew
