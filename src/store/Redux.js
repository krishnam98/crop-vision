import cropSlice from "./CropsSlice";
import soilSlice from "./SoilSlice";
import { configureStore } from "@reduxjs/toolkit";

const cvStore = configureStore({
  reducer: {
    reportReducer: soilSlice.reducer,
    cropReducer: cropSlice.reducer,
  },
});

export default cvStore;
