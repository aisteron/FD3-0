import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './paginationSlice'
import goods50Reducer from './goods50Slice'

export const store = configureStore({
  reducer: {
		pagination: paginationReducer,
		goods50: goods50Reducer
	},
})