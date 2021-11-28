import React from "react";

class DeleteMovie extends React.Component{
    constructor(props){
        super(props)
        this.delete = props.delete
        this.state = {
            movies: props.movies,
            id: props.id,
        }
    }
    deleteMovie(){
        // console.log(this.state.id)
        // c
        this.delete(this.state.id);
    }

    render(){
        return (
            <div>
                <button className='deletebutton' onClick={this.deleteMovie.bind(this)}>
                    <span className='text'>Delete</span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </span>
                </button>
            </div>
            
        )
    }
}
export default DeleteMovie