

import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";



class Movie extends Component {
    state = {  
         movies :getMovies()
    };

    handleDelete = movie => {
       const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }

    render() { 
        if (this.state.movies.length === 0) 
        return <p>Movie Database is Empty</p>

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
                            <th>Select</th>
                            <th>Enter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => <tr key = {movie._id}>
                                <td> {movie.title}</td>
                                <td> {movie.genre.name}</td>
                                <td> {movie.numberInStock}</td>
                                <td> {movie.dailyRentalRate}</td>
                                <td><button
                                onClick ={() => this.handleDelete(movie)}
                                className="btn btn-danger btn-sm">Delete</button></td>   
                                <td><input></input></td>
                        </tr>)}       
                    </tbody>
                </table>
            </React.Fragment>)      
    }
}
 
export default Movie ;