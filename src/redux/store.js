import { configureStore } from '@reduxjs/toolkit'

import authSlice from './features/auth/authSlice'
import globalSlice from './features/global/globalSlice'

export const store = configureStore({
    reducer: {
      loading: globalSlice,
      auth: authSlice,
    },
});
  
