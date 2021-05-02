import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore } from "redux";
import { reducer, RootState } from './reducers/rootReducer';

const store: MakeStore<RootState> = (context: Context) => createStore(reducer);
const wrapper = createWrapper<RootState>(store, { debug: true });

export default wrapper;
