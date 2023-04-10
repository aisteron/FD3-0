import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  goods:[],
	cart: []
}

export const goods50Slice = createSlice({
  name: 'goods50',
  initialState,
  reducers: {
    setGoods: (state,action) => {
      state.goods = action.payload
    },
		remove:(state, action) => {
			state.goods = state.goods.filter(el => el.id !== action.payload)
		},
		add: (state, action) => {
			let ids = state.goods.map(el => el.id)
			 
      let nextId = Math.max(...ids) + 1
			let prod = {id: nextId, ...action.payload}
			
			state.goods.unshift(prod)
			
		},
		to_cart:(state, action) => {
			state.cart.push(action.payload)
		}
  },
})

export const { setGoods, remove, add, to_cart } = goods50Slice.actions

export default goods50Slice.reducer