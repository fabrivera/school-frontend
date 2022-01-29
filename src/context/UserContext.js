import React, { useState } from 'react'

const UserContext = React.createContext({})

export function UserContextProvider ({children}) {
    const [ user, setUser ] = useState({
        id: '',
        name: '',
        username: '',
        imgPath: ''
    })
    const [ notifications, setNotifications ] = useState(0)
    const [ sidebarShow, setSidebarShow ] = useState(false)

    return <UserContext.Provider value={{user, notifications, setUser, setNotifications, sidebarShow, setSidebarShow}}>
        {children}
    </UserContext.Provider>
}

export default UserContext