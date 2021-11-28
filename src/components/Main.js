import React from "react";
import AddMovie from './AddMovie'
import data from "./data.json"
import Search from "./Search";
import Sort from "./Sort"
import MoviePanel from "./MoviePanel";
import DeleteMovie from "./DeleteMovie";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.addMovie = this.addMovie.bind(this)
        this.setOrder = this.setOrder.bind(this)
        this.setSearchName = this.setSearchName.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)

        this.state = {
            movies: data,
            ids: data.length,
            searchName: ''
        }
    }
    addMovie(newMovie){
        this.setState(prevState => ({
            movies: [...prevState.movies, newMovie]
        }))
    }
    addIds(){
        this.setState({ids: this.ids+1})
    }
    subtractIds(){
        this.setState({ids: this.ids-1})
    }
    setOrder(newOrder){
        this.subtractIds();
        // console.log(newOrder)
        this.setState({movies: newOrder})
        // console.log(this.state.movies)
    }
    deleteMovie(id){
        // console.log(id)
        this.setState({
            movies: this.state.movies.filter(movie => movie.id != id)
        })
    }
    setSearchName(name){
        this.setState({searchName: name})
    }

    render(){
        const movies = this.state.movies
        // console.log(movies)
        return(
            <div>
                {/* <AddMovie ids={this.state.ids} addMovie={this.addMovie} addIds={this.addIds}/> */}
                <div className='toolbox'>
                    <Sort movies={this.state.movies} setOrder={this.setOrder}/>
                    <Search setSearchName={this.setSearchName}/>
                </div>
                
                {[
                    ...movies.filter(
                        (movie) =>
                        movie.name.substring(0, this.state.searchName.length) === this.state.searchName
                    )
                ].map((movie)=> (
                   
                    <div key={movie.id}>
                        <MoviePanel 
                            id= {movie.id}
                            name= {movie.name}
                            description= {movie.description}
                            rating= {movie.rating}
                            image= {movie.image}
                            setOrder={this.setOrder}
                            movies={this.state.movies}
                            delete={this.deleteMovie}
                        />
                        {/* <DeleteMovie 
                            id={movie.id}
                            movies={this.state.movies}
                            setOrder={this.setOrder}
                            delete={this.deleteMovie}
                        />  */}
                    </div>
                ))
                }
                <AddMovie ids={this.state.ids} addMovie={this.addMovie} addIds={this.addIds}/>
            </div>
        )
    }
}
export default Main


