import React from "react";

class Sort extends React.Component{
    constructor(props){
        super(props)
        this.setOrder = props.setOrder
        this.state = {
            // movies: props.movies
        }
    }
    sortMovies(){
        const sortKey = document.querySelector("#select").value;
        function compare(a, b) {
            if (a[sortKey] < b[sortKey]) {
                return -1;
            }if (a[sortKey] > b[sortKey]) {
                return 1;
            }
                return 0;
        }
        const newOrder = [...this.props.movies.sort(compare)];
        this.setOrder(newOrder);
    }
    render(){
        return (
            <div className='sort-box'>
                <p>Sort by:</p>
                 
                <label className='custom-select'>
                    <select id="select">
                        <option value='name'>Name</option>
                        <option value='description'>Description</option>
                        <option value='rating'>Rating</option>
                    </select>
                </label>
                <div className='empty'></div>
                <button className='sort-button' onClick={this.sortMovies.bind(this)}>SORT</button>
            </div>
        )
    }
}
export default Sort