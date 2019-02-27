import React from 'react';
import Navigation from './navigation';


class NaviRwd extends React.Component{
    state = {
        width:window.innerWidth
    }

    Resize = () => this.setState({
        width: window.innerWidth

      });
    
      componentDidMount() {
        this.Resize();
        window.addEventListener('resize', this.Resize)
      }

    render() {
        
        if (this.state.width > 768) {
         return(
            <Navigation/>
             )
    }else{
        return <div></div>
    }
}
}

export default NaviRwd