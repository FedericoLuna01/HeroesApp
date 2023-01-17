import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init )

    const login = ( name = '') => {

      const user = {id: '123', name}

      dispatch({ type: types.login, payload: user })

      localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
      localStorage.removeItem('user')
      dispatch({type: types.logout})
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
