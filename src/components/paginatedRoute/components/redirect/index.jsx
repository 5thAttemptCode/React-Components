import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ProductsRedirect() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/products/1', { replace: true })
  }, [navigate])

  return null
}