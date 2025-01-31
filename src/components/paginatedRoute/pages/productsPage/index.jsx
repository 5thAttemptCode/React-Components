import { useParams } from 'react-router-dom'
import Pagination from '../../components/pagination'
import useFetchData from '../../customHooks/useFetch'


export default function ProductsPage() {

  const { page } = useParams()
  const currentPage = Number(page) || 1
  const itemsPerPage = 10

  // Fetch data from JSONPlaceholder API
  const { data: products, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts')

  // Show loading or error state
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // Calculate products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = products?.slice(startIndex, startIndex + itemsPerPage) || []
  const totalPages = Math.ceil(products?.length / itemsPerPage)

  return (
    <section className="products-page">
      <h1>Page {currentPage}</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  )
}