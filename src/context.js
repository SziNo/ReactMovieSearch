import React, { useState, useContext } from 'react'
import useFetch from './useFetch'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('lord of the rings')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
