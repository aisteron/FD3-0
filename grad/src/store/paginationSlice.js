import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  per_page: 10,
	page: 1,
	total: null
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    go: (state,action) => {
      state.page = action.payload
    }
  },
})

export const { go } = paginationSlice.actions

export default paginationSlice.reducer