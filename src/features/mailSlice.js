import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
  minimize: false,
  maximize: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },

    toggleMinimize: (state) => {
      state.minimize = !state.minimize;
      if (state.minimize) {
        state.maximize = false;
      }
    },
    toggleMaximize: (state) => {
      state.maximize = !state.maximize;
      if (state.maximize) {
        state.minimize = false;
      }
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  setSelectedMail,
  toggleMinimize,
  toggleMaximize,
} = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.mail.value)`
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSelectedMail = (state) => state.mail.selectedMail;
export const selectMinimize = (state) => state.mail.minimize;
export const selectMaximize = (state) => state.mail.maximize;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectMail(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default mailSlice.reducer;
