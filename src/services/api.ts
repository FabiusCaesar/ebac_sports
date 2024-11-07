import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ProdutoType } from '../types/Produto'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<ProdutoType[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
