import React, { useState } from 'react'

const RouteContext = React.createContext({})

export function RouteContextProvider ({children}) {
    const [ route, setRoute ] = useState(["Alumnos", "Primer Grado", "Fabricio Rivera"])

    return <RouteContext.Provider value={{route, setRoute}}>
        {children}
    </RouteContext.Provider>
}

export default RouteContext