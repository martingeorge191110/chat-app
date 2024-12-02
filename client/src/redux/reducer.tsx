import { combineReducers } from "redux"


const User: {name: (string | null)} = {
   name: null
}

export const firstFunc = (state: {name: (string | null)} = User, action: {type: string, payload: (string | null)}) => {
   // if (action.type === "NEW")
      return ({
         ...state, name: action.payload
      })
}

const AppReducer = combineReducers({
   user: firstFunc
})

export default AppReducer;
