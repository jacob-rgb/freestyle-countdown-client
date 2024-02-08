import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../domain/interfaces/IUserState';
import { ERoles } from '../../domain/enums/ERoles';
import { IUserGetDto } from '../../domain/interfaces/IUserGetDto';

const initialState: IUserState = {
    name: 'non-defined',
    username: 'non-defined',
    surname: 'non-defined',
    phone: 666123456,
    uuid: '12345abcd',
    role: ERoles.PUBLIC,
    isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: IUserState, action: PayloadAction<IUserGetDto>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.username = action.payload.username;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.uuid = action.payload.uuid;
      state.isAuthenticated = true;
    },
    logout: (state) => {
        state.name = initialState.name;
        state.surname = initialState.surname;
        state.username = initialState.username;
        state.phone = initialState.phone;
        state.role = initialState.role;
        state.uuid = initialState.uuid;
        state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
