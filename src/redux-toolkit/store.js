import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  ...persistCommonConfig,
  key: "user",
  whitelist: ["login"],
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userSlice),
  },
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);

export default store;
