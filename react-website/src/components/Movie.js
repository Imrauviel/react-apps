import React from "react";
import DeleteMovie from "./DeleteMovie";

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.delete = props.delete
        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            rating: props.rating,
            image: props.image,
            movies: props.movies,
            
        }
    }

    render(){
        const aStyle = {
            backgroundImage: 'url(' + this.state.image + ')',
            color: 'black'
        }
        return (
            <div className='card'  style={aStyle} >
                <div className='window'>

                    <h2 className='title'>{this.state.name}</h2>
                    <p className='text'>{this.state.description}</p>
                    <h4 >Rating: {this.state.rating}/10</h4>
                </div>
                <DeleteMovie 
                            id={this.state.id}
                            movies={this.state.movies}
                            // setOrder={props.setOrder}
                            delete={this.delete}
                        /> 
            </div>
        )
    }

}
export default Movie