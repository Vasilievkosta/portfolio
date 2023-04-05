import { AppStoreType } from 'state/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (store: AppStoreType) => {
    try {
        const serializedState = JSON.stringify(store.getState());
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
};