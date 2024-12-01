import { createStore, Store } from "redux";
import AppReducer from "./reducer.tsx";



const store: Store<{
   user: {
      name: any;
   };
}, any, unknown> = createStore(AppReducer)

export default store;
