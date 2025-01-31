import { Link } from 'react-router-dom'
import '../../style.css'


export default function Pagination({ totalPages, currentPage }) {

  return (
    <div className="pagination">
      <Link 
        to={`/products/${currentPage - 1}`} 
        className={currentPage === 1 ? 'disabled' : ''}
      >
        Prev
      </Link>

      {Array.from({ length: totalPages }, (_, index) => (
        <Link 
          key={index + 1} 
          to={`/products/${index + 1}`} 
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </Link>
      ))}

      <Link 
        to={`/products/${currentPage + 1}`} 
        className={currentPage === totalPages ? 'disabled' : ''}
      >
        Next
      </Link>
    </div>
  )
}