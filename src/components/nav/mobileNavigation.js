import React from 'react';
import Burger from './mobile elements/burger'


    


class MobileNavigation extends React.Component{
    state = {
        width:window.innerWidth
    }

    Resize = () => this.setState({
        width: window.innerWidth

      });
    
      componentDidMount() {
        window.addEventListener('resize', this.Resize)
      }

    render() {
        
        if (this.state.width < 768) {
            return (
               <Burger/>
            )
         }else{
                return null
        }
}
}

export default MobileNavigation;