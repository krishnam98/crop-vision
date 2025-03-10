import { createSlice } from "@reduxjs/toolkit";
const initState = [
  {
    name: "",
    soilPH: "",
    npk: {
      nitrogen: "0 kg/ha",
      phosphorus: "0 kg/ha",
      potassium: "0 kg/ha",
    },
    moisture: "0%",
    zinc: "0 ppm",
    img: "",
  },
];

const cropSlice = createSlice({
  name: "cropSlice",
  initialState: initState,
  reducers: {
    setCrops: (state, action) => {
      return action.payload.crops;
    },
  },
});

export const cropSliceAction = cropSlice.actions;

export default cropSlice;
