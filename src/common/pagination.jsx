
import React, { Component } from 'react';
import _ from "lodash";

class Pagination extends Component {
   
    render() 
            { 
                
                //  const {itemCount, pageSize,currentPage} = this.props
                const itemCount = this.props.itemCount;
                const pageSize = this.props.pageSize;
                const currentPage = this.props.currentPage;
                

                const pageCount = Math.ceil(itemCount/pageSize);
                if (pageCount === 1) return null 
                const pages = _.range(1,pageCount + 1)
                // rending the pages dynamically (need to undeerstand better)

        return (
             <nav> 
                <ul className="pagination">
                    {pages.map( page => <li key={page}
                    className={ page === currentPage? 'page-item active' : 'page-item'}>
                    <a  onClick = { () => this.props.onPageChange(page)} className="page-link">{page}</a>
                </li> )}
            </ul>
        </nav>
            
         );
    }
}
 
export default Pagination;



