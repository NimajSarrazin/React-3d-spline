/**
 * Breadcrumb Component
 * Displays navigation breadcrumb (fil d'Ariane) for secondary pages
 */
import { Link, useLocation } from 'react-router-dom';
import { navbarData } from '../data/Nav';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Get current page info
  const currentPage = navbarData.find(item => item.href === location.pathname);
  
  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', href: '/' }
  ];

  // Only add current page if it's not Home
  if (currentPage && location.pathname !== '/') {
    breadcrumbItems.push({
      name: currentPage.name,
      href: currentPage.href
    });
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <i className='bx bx-chevron-right text-gray-600'></i>
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-[#e99b63] font-medium">{item.name}</span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-[#e99b63] transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

