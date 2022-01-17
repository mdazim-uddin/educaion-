import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import Cart from './Cart';
import ReactPaginate from 'react-paginate'


const ProductDetails = (props) => {

const [data, setData] = useState([])
    useEffect(() => {
        setData([...props.sortItem])
    },[data])
    const [pageNumber,setPageNumber]= useState(0)

    const usersPerPage =6
    const pagesVisited= pageNumber * usersPerPage

    const displayUsers=
    data.slice(pagesVisited, pagesVisited + usersPerPage )
    .map( (Item) => 
           <Cart pd={Item}></Cart>
    )      
    

    const pageCount = Math.ceil(data.length / usersPerPage)

    const changePage = ({selected})=>{
       setPageNumber(selected)
    }




    return (
        <div className='py-9'>

            <div className='grid grid-cols-3 gap-4 '>
            {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    pageLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        sortItem: state.shop.sortItem
    }
}


export default connect(mapStateToProps) (ProductDetails);