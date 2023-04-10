import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  goods:[],
	cart: [],
	sort: null
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
		},
		sort:(state)=>{
			switch(state.sort){
				case null:
					state.sort = 'asc'
					state.goods.sort((a,b)=>a.price - b.price)
					break;
				case 'asc':
					state.sort = 'desc'
					state.goods.sort((a,b)=>b.price - a.price)
					break;
				case 'desc':
					state.sort = null
					state.goods.sort((a,b)=>a.id - b.id)
					break;
				default:
					state.sort = null

			}
		}
  },
})

export const { setGoods, remove, add, to_cart, sort } = goods50Slice.actions

export default goods50Slice.reducer