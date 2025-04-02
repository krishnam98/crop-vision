import { createSlice } from "@reduxjs/toolkit";
import arr from "./SampleReport";
const initValues = [
  { value: "", name: "Nitrogen" },
  { value: "", name: "Potassium" },
  { value: "", name: "Phosphorus" },
  { value: "", name: "phValue" },
];

const soilSlice = createSlice({
  name: "SoilSlice",
  initialState: initValues,
  reducers: {
    SetReport: (state, action) => {
      return action.payload.reportArr;
    },
  },
});

export const soilSliceActions = soilSlice.actions;
export default soilSlice;
