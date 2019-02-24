

import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import {paginate} from "../utils/paginate"



class Movie extends Component {
    state = {  
         movies :getMovies(),
         pageSize : 4,
         currentPage : 1
    };

    handleDelete = movie => {
       const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});
    };

    handlePageChange = page => {
       this.setState ({currentPage : page});
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({movies});

    };

    render() { 

        const {pageSize, currentPage, movies: allMovies} = this.state;

        if (this.state.movies.length === 0) 
        return <p>Movie Database is Empty</p>

        const movies = paginate(allMovies,currentPage,pageSize)

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} in the DataBase </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th>Like</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => <tr key = {movie._id}>
                                <td> {movie.title}</td>
                                <td> {movie.genre.name}</td>
                                <td> {movie.numberInStock}</td>
                                <td> {movie.dailyRentalRate}</td>
                                <td><input></input></td>
                                <td><Like liked={movie.liked} 
                                        onClick ={() => this.handleLike(movie)}
                                /></td>
                    
                                <td><button
                                onClick ={() => this.handleDelete(movie)}
                                className="btn btn-danger btn-sm">Delete</button></td>   
                                
                        </tr>)}    
                        <Pagination 
                            itemCount={this.state.movies.length} 
                            pageSize={this.state.pageSize} 
                            currentPage = {this.state.currentPage}
                            onPageChange={this.handlePageChange} />   
                    </tbody>
                </table>
            </React.Fragment>)      
    };
};
 
export default Movie ;