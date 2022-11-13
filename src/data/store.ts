import { configureStore } from '@reduxjs/toolkit';
import auth_reducer from '../features/authentication/slice';

const store = configureStore({
    reducer: {
        auth: auth_reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
