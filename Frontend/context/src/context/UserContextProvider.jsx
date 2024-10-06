import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {  // Fix the typo here
    const [user, setUser] = useState(null)
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    )
}

export default UserContextProvider
