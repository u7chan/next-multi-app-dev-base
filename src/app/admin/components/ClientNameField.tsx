'use client'
import { useState } from 'react'

export default function ClientNameField() {
  const [name, setName] = useState<string | null>('--')
  const handleClick = () => {
    setName(null)
    fetch('/admin/api/me')
      .then(async (res) => {
        const data = await res.json()
        setName(data.name)
      })
      .catch(() => {
        setName('Error')
      })
  }
  return (
    <>
      <div>Name: {name || 'Loading...'}</div>
      <div>
        <button onClick={handleClick} disabled={!name}>
          fetch
        </button>
      </div>
    </>
  )
}
