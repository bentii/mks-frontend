import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(cartPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
