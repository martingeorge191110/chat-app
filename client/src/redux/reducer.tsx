import { combineReducers } from "redux"


const User = {
   name: null
}

export const firstFunc = (state: {name: (string | null)} = User, action: any) => {
   // if (action.type === "NEW")
      return ({
         ...state, name: action.payload
      })
}

const AppReducer = combineReducers({
   user: firstFunc
})

export default AppReducer;
