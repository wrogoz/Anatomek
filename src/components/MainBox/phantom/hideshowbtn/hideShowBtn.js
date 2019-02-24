import React from 'react'


const HideShowBtn = (props) => {
  
    HideShowHandler = ()=> {
        let name=props.stateName;
        if(this.state.name.display===true){
            this.setState({name: {display:false}})
        }else{
            this.setState({ name: { display: true } })
        }
        }
    

   
    return(
        <button onClick={this.HideShowHandler}>czaszkę</button>
    )
}

export default HideShowBtn