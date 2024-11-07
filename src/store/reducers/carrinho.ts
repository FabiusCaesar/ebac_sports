import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoType } from '../../types/Produto'

type CarrinhoState = {
  itens: ProdutoType[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ProdutoType>) => {
      const compra = action.payload

      if (state.itens.find((p) => p.id === compra.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(compra)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
