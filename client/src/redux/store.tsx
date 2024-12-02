import { legacy_createStore as createStore} from "redux";
import AppReducer from "./reducer.tsx";



export const store = createStore(AppReducer)

export type RootState = ReturnType<typeof AppReducer>;
export type AppDispatch = typeof store.dispatch;
