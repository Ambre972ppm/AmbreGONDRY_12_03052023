import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('id')
  const toggleUser = () => {
    setUser(user === '12' ? '18' : '12')
  }

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  )
}
