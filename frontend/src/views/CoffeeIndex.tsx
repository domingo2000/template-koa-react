import React, { useEffect } from 'react'
import axios from 'axios'
import useFetchData from '../hooks/useFetchData'

interface Coffee {
  id: number
  blend_name: string
  origin: string
  notes: string
  variety: string
  intensifier: string
}

function CoffeeIndex() {
  const {
    data,
    loading,
  } = useFetchData('https://random-data-api.com/api/coffee/random_coffee?size=10', true)

  return (
    <div>
      <h1>Coffee Index</h1>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((coffee: Coffee) => (
            <li key={coffee.id}>
              {coffee.blend_name}
              <ul>
                <li>Origin: {coffee.origin}</li>
                <li>Notes: {coffee.notes}</li>
                <li>Variety: {coffee.variety}</li>
                <li>Intensifier: {coffee.intensifier}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CoffeeIndex