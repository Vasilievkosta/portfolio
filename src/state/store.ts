import { combineReducers, legacy_createStore } from 'redux';
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import { loadState, saveState } from '../utils/localstorage-utils';

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(store);
});

export type AppRootState = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

//@ts-ignore
window.store = store;