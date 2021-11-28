import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.setSearchName = props.setSearchName
        this.state= {

        }
    }

    nameChange(e){
        this.setSearchName(e.target.value)
    }

    render(){
        return (
            <div className='searchDiv'>
                <p>Search by name</p>
                <label className='search'>
                    <input className='input_search' onChange={(e)=>this.nameChange(e)}/>
                </label>
                 
            </div>
            
        )
    }

}
export default Search