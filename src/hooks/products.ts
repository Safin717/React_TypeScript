import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    //usestate для индикации загрузки данных с сервера, по умолчанию false
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: IProduct){
      setProducts(prev => [...prev, product])
    }
  
    //get запрос для получения массива продуктов с api
    async function fetchProducts() {
      try{
        setError('')
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        //как только загрузились данные, передаем массив продуктов
        setProducts(response.data)
        setLoading(false)
      }catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
    useEffect( () => {
      fetchProducts()
    },[])
    //передача пустого массива означает, что коллбэк вызывется 1 раз,
    //когда компонент реакта будет готов к работе

    return{products, error, loading, addProduct}
}