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
            image: props.image,
        }
    }
    addRating(){
        const newR = this.props.rating+1
        const newOrder = this.props.movies.map((movie) =>{
            if (movie.id !== this.state.id){
                return movie
            }
            return {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
                rating: newR
            }
        })
        // console.log(newOrder)
        this.props.setOrder(newOrder)
    }
    substrackRating(){
        const newR = this.props.rating-1
        const newOrder = this.props.movies.map((movie) =>{
            if (movie.id !== this.state.id){
                return movie
            }
            return {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
                rating: newR
            }
        })
        // console.log(newOrder)
        this.props.setOrder(newOrder)
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
                    <div className='rating-box'>
                        <button onClick={this.addRating.bind(this)} className='rating'>+</button>
                        <h4 >  Rating: {this.props.rating}/10  </h4>
                        <button onClick={this.substrackRating.bind(this)} className='rating'>-</button> 
                    </div>
                   
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