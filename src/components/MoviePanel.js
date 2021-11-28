import React from "react";
import Movie from "./Movie"

class MoviePanel extends React.Component{
    constructor(props){
        super(props)
        this.delete = props.delete
        this.state = {
            movies: props.movies,
            id: props.id,
            name: props.name,
            description: props.description,
            rating: props.rating,
            image: props.image
        }

    }
    render(){
        return (
            <div>
                <Movie 
                    id={this.state.id}
                    name={this.state.name}
                    description={this.state.description}
                    rating={this.state.rating}
                    image={this.state.image}
                    delete={this.delete}
                    movies={this.state.movies}

                />
            </div>
            
        )
    }

}
export default MoviePanel