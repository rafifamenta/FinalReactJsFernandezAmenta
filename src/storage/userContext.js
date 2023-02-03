import { createContext } from 'react'

export const userContext = createContext({ user: 'anonymous' })

function UserProvider (props) {
  return (
    <userContext.Provider value={{ user: 'Rafi' }}>
      {props.children}
    </userContext.Provider>
  )
}

export { UserProvider }
