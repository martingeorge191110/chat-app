import { combineReducers } from "redux"


const User: {token: (string | null)} = {
   token: localStorage.getItem("token") || null
}

export const store_user_info = (state: {token: (string | null)} = User, action: {type: string, payload: any}) => {
   if (action.type === "REGSITERing" || action.type === "LOGINNING")
      return ({
         ...state, token: action.payload.result.token
      })
   return (state)
}

const AppReducer = combineReducers({
   user: store_user_info
})

export default AppReducer;
