import { combineReducers } from "redux"
import { UserState } from "../app.types.ts"

const tokenStorage = localStorage.getItem("token")

const User: UserState = {
   token: tokenStorage ? tokenStorage?.slice(1, tokenStorage.length - 1) : null,
   data: null
}

export const store_user_info = (state: UserState = User, action: {type: string, payload: any}) => {
   if (action.type === "REGSITERing" || action.type === "LOGINNING")
      return ({
         ...state, token: action.payload.result.token
      })
   if (action.type === "ACCOUNT_VALID")   
      return ({
         ...state, data: action.payload.result
      })
   return (state)
}

const AppReducer = combineReducers({
   user: store_user_info
})

export default AppReducer;
