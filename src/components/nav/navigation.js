import React from 'react';
import { Link } from  'react-router-dom'
import './navigation.css'

class Navigation extends React.Component{
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

        if (this.state.width > 767) {
            return (
                <ul id="navBox">
                    <li> <Link to={`/`}> Start </Link> </li>
                    <li> <Link to={`/systems`}> Systemy Ciała </Link> </li>
                    <li> <Link to={`/organs`}> Organy </Link> </li>
                    <li> <Link to={`/senses`}> Zmysły </Link> </li>
                    <li> <Link to={`/fantom`}> Fantom </Link> </li>
                </ul>
            )
         }else{
                return null
        }
}
}

export default Navigation;