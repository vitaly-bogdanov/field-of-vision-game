import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import wordsReducer from './wordsReducer';

const rootReducer = combineReducers({
    wordsList: wordsReducer
});

export const reducer = (state, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
}

export type RootState = ReturnType<typeof rootReducer>;