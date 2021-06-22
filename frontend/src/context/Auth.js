import React, { useContext, useState } from 'react'

const AuthContext = React.createContext([
    null,           // auth
    auth => { }     // setAuth
])
AuthContext.displayName = 'Auth'


const withAuth = (Component) => {
    const WithAuth = (props) => {
        const [authState, setAuthState] = useState(fetchFromLocalStorage())

        const handleSetAuth = auth => {
            putIntoLocalStorage(auth)
            setAuthState(auth)
        }

        return (
            <AuthContext.Provider value={[authState, handleSetAuth]}>
                <Component {...props} />
            </AuthContext.Provider>
        )
    }
    return WithAuth
}

const LOCAL_STORAGE_KEY = 'auth'

function fetchFromLocalStorage() {
    const auth = localStorage.getItem(LOCAL_STORAGE_KEY)
    return auth ? JSON.parse(auth) : null
}

function putIntoLocalStorage(auth) {
    if (auth) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(auth))
    } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
}


const useAuth = () => useContext(AuthContext)


export { withAuth, useAuth }
