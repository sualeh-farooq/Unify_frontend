import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseURL from '@/config/serverConfig'


export const fetchSellers = createAsyncThunk('sellers/fetchSellers', async () => {
  const response = await fetch(`${baseURL}/api/admin/getSeller`)
  const data = await response.json()
  return data.data
})

let initialState = []

const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.sellers = action.payload
        state.isLoading = false
      })
      .addCase(fetchSellers.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default sellerSlice.reducer
