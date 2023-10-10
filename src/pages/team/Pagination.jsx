import { useState } from 'react';
// import {team} from './TeamData';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
const Pagination = ({styles,setPage,teamCat,page}) => {

    const [windowWidth, setWindowWidth] = useState(9)
    useEffect(()=>{
        const size= ()=>{
            if(window.innerWidth<830){
                setWindowWidth(2)
            }
            else if(window.innerWidth<992){
                setWindowWidth(4)
            }
            else if(window.innerWidth<1200){
                setWindowWidth(6)
            }
            else if(window.innerWidth<1600){
                setWindowWidth(9)
            }
        };
        size();
        window.addEventListener('resize',()=>{
            size();
        });
    },[windowWidth]);


    const handlePageClick = (event) => {
        setPage(event.selected+1);
    };


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={windowWidth}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(teamCat.length/8)}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={`${styles.pagination} d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}
            activeLinkClassName={`${styles.active} d-block px-3 py-2 ${styles.grey}`}
            pageLinkClassName={`d-block px-3 py-2 ${styles.grey}`}
            pageClassName={`border border-1 rounded-1`}
            previousClassName="border border-1 rounded-1"
            previousLinkClassName={`text-black d-block px-3 py-2`}
            nextClassName="border border-1 rounded-1"
            nextLinkClassName={`text-black d-block px-3 py-2`}
            disabledLinkClassName={`${styles.disabled}`}
            breakClassName={`${styles.break}`}
            forcePage={page-1}
        />
    )
}

export default Pagination