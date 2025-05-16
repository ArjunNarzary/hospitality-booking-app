import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

interface ApiResponse<T> {
  data: T | null
  loading: boolean
  error: {
    status: boolean
    message: string
    details?: { [key: string]: string }[]
  } | null
}

const CLIENT_API = "http://localhost:8000"

function useQuery<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiResponse<T>["error"] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${CLIENT_API}${url}`)
        if (response.data.success) {
          setData(response.data)
          setError(null)
        } else {
          setError(response.data)
        }
      } catch (err) {
        const error = err as AxiosError
        setError(error?.response?.data as ApiResponse<T>["error"])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useQuery
