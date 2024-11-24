import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AddModalState {
  open: boolean;
}

const initialState: AddModalState = {
  open: false,
};

const addModalSlice = createSlice({
  name: "addModal",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.open = true;
    },
    closeAddModal: (state) => {
      state.open = false;
    }
  }
});

export const { openAddModal, closeAddModal } = addModalSlice.actions;

export const openModalFlag = (state: RootState) => state.addModal.open;

export default addModalSlice.reducer;