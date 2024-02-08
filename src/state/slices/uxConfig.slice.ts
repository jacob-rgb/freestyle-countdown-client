import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { IUxConfigState } from '../../domain/interfaces/IUxConfigState';

const initialState: IUxConfigState = {
    sidebar: {
      visible: false
    }
};

const userSlice: Slice<IUxConfigState> = createSlice({
  name: 'ux-config',
  initialState,
  reducers: {
    setSidebarVisible: (state: IUxConfigState, action: PayloadAction<boolean>) => {
      state.sidebar.visible = action.payload;
    }
  },
});

export const { setSidebarVisible } = userSlice.actions;
export default userSlice.reducer;
