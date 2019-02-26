

import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./movieTable"
import Pagination from "../common/pagination";
import {paginate} from "../utils/paginate"
import List from "../common/list";
import {getGenres} from "../services/fakeGenreService";



class Movie extends Component {
    state = {  
         movies :getMovies(),
         pageSize : 4,
         currentPage : 1,
         genres : [],
         action: [],
         comedy : [],
         thriller: [],
    };

    componentDidMount() {

        const genres = [ { _id: "", name:"All Genres" }, ...getGenres()];

        // this.setState({movies:getMovies(), genres: getGenres() });
        this.setState ( {movies : getMovies(), genres});
    }

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

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = path => {
        console.log(path)
    }

    render() { 

        const {pageSize, currentPage,selectedGenre, movies: allMovies} = this.state;

        if (this.state.movies.length === 0) 
        return <p>Movie Database is Empty</p>

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
        :allMovies

        const movies = paginate(filtered,currentPage,pageSize)

        return (
            <div className ="row">
                <div className="col-2">
                    <List 
                    selectedItem = {this.state.selectedGenre}
                    items={this.state.genres} 
                    textProperty="name"
                    valueProperty="_id"
                    onItemSelect = {this.handleGenreSelect}/>
                </div>

                <div className="col">
                    <p>Showing {filtered.length} in the DataBase </p>

                    <MoviesTable 
                            movies = {movies}
                            onLike = {this.handleLike}
                            onDelete = {this.handleDelete}
                            onSort = {this.handleSort}
                            />
                    
                     <Pagination
                               itemCount={filtered.length}
                                pageSize={this.state.pageSize} 
                                currentPage = {this.state.currentPage}
                                onPageChange={this.handlePageChange} 
                                />  
                </div>
            </div>)      
    };
};
 
export default Movie ;