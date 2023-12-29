import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux';
import storageLocation from 'redux-persist/lib/storage';

import mainReducer from './modules/main';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storageLocation
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    main: mainReducer
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// 封装数据类型
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;
// 导出封装数据类型hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
// 导出封装方法hook
export const useAppDispatch: () => DispatchType = useDispatch;
// shallowEqual数据没有修改的情况下不更新
export const useAppShallowEqual = shallowEqual;

export const persistor = persistStore(store);

export default store;
