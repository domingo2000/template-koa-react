import React from 'react'
import useFetchData from '../hooks/useFetchData'

interface Trick {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

function TricksIndex() {
  const {
    data,
    loading,
  } = useFetchData('/api/tricks')
  return (
    <div>
      <h1>Tricks</h1>
      {loading && <p>Loading...</p>}
      {data && data.map((trick: Trick) => (
        <div key={trick.id}>
          <h2>{trick.name}</h2> 
          <p>Description: {trick.description}</p>
          <p>CreatedAt: {trick.createdAt}</p>
          <p>UpdatedAt: {trick.updatedAt}</p>
        </div>
      ))}
    </div>
  )
}

export default TricksIndex