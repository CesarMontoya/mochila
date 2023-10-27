import { FC, useReducer } from 'react';
// import Cookies from 'js-cookie';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';
import { mochilaApi } from '@/api';

interface AuthStateProps {
   children?: React.ReactNode,
}

export interface AuthState {
   isLoggedIn: boolean;
   user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
   isLoggedIn: false,
   user: undefined,
}

export const AuthProvider:FC<AuthStateProps> = ({ children }) => {

   const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

   const loginUser = async( email: string, password: string ): Promise<boolean> => {

      // try {

      //    const { data } = await mochilaApi.post('/api/login', { email, password })
      //    console.log({data})
      //    // const { token, user } = data
      //    // Cookies.set('token', token)
      //    // dispatch({ type: '[Auth] - Login', payload: user })
      //    return true
         
      // } catch (error) {

      //    console.error(error)
      //    return false

      // }
      return false
   }

return (
   <AuthContext.Provider value={{
      ...state,

      // Methods
      loginUser,
   }}>
      { children }
   </AuthContext.Provider>
  )
}