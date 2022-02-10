import { createSlice, configureStore } from '@reduxjs/toolkit';

const dataInitialState = {
    data: []
};

const dataSlice = createSlice({
    initialState: dataInitialState,
    name: 'data',
    reducers: {
        addData(state, action) {
            state.data.push(action.payload);
        },
        removeData(state, action) {
            const ind = state.data.indexOf(action.payload);
            state.data.splice(ind, 1);
        }
    }
});

export const dataActions = dataSlice.actions;

const dummyData = {
    data: {},
    loader: false
};

const dummyDataSlice = createSlice({
    initialState: dummyData,
    name: 'dummyData',
    reducers: {
        toggleLoader(state) {
            state.loader = !state.loader;
        },
        updateDummyData(state, actions) {
            state.data = actions.payload;
        }
    }
});

export const getDummyData = () => {
    return (dispatch) => {
        
        dispatch(dummyDataActions.toggleLoader());

        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => {
                dispatch(dummyDataActions.updateDummyData(json))
                dispatch(dummyDataActions.toggleLoader());
            })
            .catch((err) => {
                dispatch(dummyDataActions.updateDummyData({}))
                dispatch(dummyDataActions.toggleLoader());
            });
    }
}

const store = configureStore({
    reducer: {
        dataReducer: dataSlice.reducer,
        dummyDataReducer: dummyDataSlice.reducer
    }
});


export const dummyDataActions = dummyDataSlice.actions;

export default store;