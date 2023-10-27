import { IUser } from '@/interfaces';
import { AuthStateProps } from './';

type AuthActionsType = 
   | { type: '[Auth] - Login', payload: IUser }
   | { type: '[Auth] - Logout' }


export const authReducer = (state: AuthStateProps, action: AuthActionsType):AuthStateProps => {
   switch (action.type) {

      case '[Auth] - Login':
         return {
            ...state,
            isLoggedIn: true,
            user: action.payload
        };

      case '[Auth] - Logout':
        return {
            ...state,
            isLoggedIn: false,
            user: undefined
        }

      default: 
         return state;

   };
};