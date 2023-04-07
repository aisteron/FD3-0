import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  per_page: 10,
	page: 1,
	total: null,
	goods: []
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nav: (state,action) => {
      state.page = action.payload
    }
  },
})

export const { nav } = paginationSlice.actions

export default paginationSlice.reducer