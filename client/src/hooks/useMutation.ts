import axios, { AxiosError } from "axios"
import { useState } from "react"

interface ApiResponse<T, B> {
  data: T | null
  loading: boolean
  error: {
    status: boolean
    message: string
    details?: { [key: string]: string }[]
  } | null
  fetchData: (body: B) => void
}

const CLIENT_API = "http://localhost:8000"

function useMutation<T, B>(url: string): ApiResponse<T, B> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiResponse<T, B>["error"] | null>(null)

  const fetchData = async (body: B) => {
    setLoading(true)
    try {
      const response = await axios.post(`${CLIENT_API}${url}`, body)
      console.log("response", response)
      if (response.data.success) {
        setData(response.data)
        setError(null)
      } else {
        setError(response.data)
      }
    } catch (err) {
      const error = err as AxiosError
      setError(error?.response?.data as ApiResponse<T, B>["error"])
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchData }
}

export default useMutation
