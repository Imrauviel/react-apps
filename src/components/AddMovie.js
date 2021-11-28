import React from "react";

class AddMovie extends React.Component{
    constructor(props){
        super(props)
        // this.addMovie = props.addMovie
        this.addIds = props.addIds

        this.state = {
            ids: props.ids,
            name: '',
            description: '',
            rating: '',
            image: '',
        }
    }
    nameChange(e){
            this.setState({name: e.target.value})
        }
    descriptionChange(e){
            this.setState({description: e.target.value})
        }
    ratingChange(e){
            this.setState({rating: e.target.value})
        }
    imageChange(e){
            this.setState({image: e.target.value})
        }
    addButton(){
        const newMovie = {
            id: this.state.ids,
            name: this.state.name,
            description: this.state.description,
            rating: this.state.rating,
            image: this.state.image
        }
        
        this.addIds()
        this.props.addMovie(newMovie)

        // console.log(this.state.ids)
        
        this.setState({
            ids: this.state.ids+1,
            name: '',
            description: '',
            rating: '',
            image: '',
        })
    }
    
    render(){
            return (
                <div className='form-style-3'>
                    Add new Movie:
                    <form > 
                        <label>
                            <span> Title </span>
                            <input type='text' onChange={(e)=>this.nameChange(e)} value={this.state.name}/>
                        </label>
                        
                        <label>
                            <span> Description</span>
                            <input type='text' onChange={(e)=>this.descriptionChange(e)} value={this.state.description}/>
                        </label>
                        
                        <label>
                            <span> Rating</span>
                            <input type='text' onChange={(e)=>this.ratingChange(e)} value={this.state.rating}/>
                        </label>
                        
                        <label>
                            <span> Image</span>
                            <input type='text' onChange={(e)=>this.imageChange(e)} value={this.state.image}/>
                        </label>
                        
                    </form>
                    <button onClick={this.addButton.bind(this)}>Add</button>
                </div>
                
            )
        }
}
export default AddMovie;