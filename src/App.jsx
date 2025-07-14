import React, { useState } from 'react'

const mockData = [
  {
    name: "Contreplaqué 1/2\"",
    vendors: [
      { name: "Canac", price: 36.95, location: "Québec" },
      { name: "Home Depot", price: 38.49, location: "Lévis" },
      { name: "RONA", price: 37.0, location: "Beauport" }
    ]
  }
]

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = () => {
    const item = mockData.find(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setResults(item ? item.vendors : [])
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Matstreet Demo</h1>
      <input
        type="text"
        placeholder="Rechercher un matériau"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>

      {results.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {results.map((vendor, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
              <strong>{vendor.name}</strong>
              <p>Prix : {vendor.price.toFixed(2)} $</p>
              <p>Succursale : {vendor.location}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 30, textAlign: 'center' }}>
        <button style={{ border: '1px solid #000' }}>Passer à la version PRO</button>
      </div>
    </div>
  )
}

export default App
