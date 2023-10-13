// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from 'react';
// import { ProjectContext } from '../../containers/Projects';
// import ReactPaginate from 'react-paginate';
// const Pagination = () => {
//   const { projectsList, projectsPerPage, currentPage, setCurrentPage } = useContext(ProjectContext);

//   // Calculate the total number of pages
//   // const totalPages = Math.ceil(projectsList.length / projectsPerPage);

//   // Generate an array of page numbers
//   // const pageNumbers = [];
//   // for (let i = 1; i <= totalPages; i++) {
//   //   pageNumbers.push(i);
//   // }

//   const handlePageClick = (pageNumber) => {
//     // Set the current page to the clicked page number
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <nav>
//       <ul className={`pagination d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}>
//         {pageNumbers.map((number) => (
//           <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//             <button
//               type="button"
//               className='page-link'
//               onClick={() => handlePageClick(number)} // Call handlePageClick with the page number
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
