import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoutes } from '@/global/type';

interface IUserInfo {
  username: string;
  userhead: string;
}

interface IMainState {
  userInfo: IUserInfo;
  token: string;
  menuList: IRoutes[];
  firstRouter: string;
  isDark: boolean;
  themeColor: string;
}

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    userInfo: {
      username: '',
      userhead: ''
    },
    token: '',
    menuList: [],
    firstRouter: '',
    isDark: false,
    themeColor: '#1890ff'
  } as IMainState,
  reducers: {
    changeUserInfoReducer(state, { payload }: PayloadAction<IUserInfo>) {
      state.userInfo = payload;
    },
    changeTokenReducer(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    changeMenuListReducer(state, { payload }: PayloadAction<IRoutes[]>) {
      state.menuList = payload;
    },
    changeFirstRouterReducer(state, { payload }: PayloadAction<string>) {
      state.firstRouter = payload;
    },
    changeIsDarkReducer(state, { payload }: PayloadAction<boolean>) {
      state.isDark = payload;
    },
    changeThemeColorReducer(state, { payload }: PayloadAction<string>) {
      state.themeColor = payload;
    }
  }
});

export const {
  changeUserInfoReducer,
  changeTokenReducer,
  changeMenuListReducer,
  changeFirstRouterReducer,
  changeIsDarkReducer,
  changeThemeColorReducer
} = mainSlice.actions;

export default mainSlice.reducer;
