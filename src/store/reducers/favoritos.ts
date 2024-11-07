import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoType } from '../../types/Produto'

type FavoritosState = {
  itens: ProdutoType[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload
      const index = state.itens.findIndex((p) => p.id === produto.id)

      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
