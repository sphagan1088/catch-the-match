import React from 'react';
import './Header.css';
import Moment from 'react-moment';
import 'moment-timezone';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
            <h1>Welcome Today is:
            <Moment format="MM/DD/YYYY">{this.props.datetoFormat}
            
            </Moment>
            </h1>
            <h2>Here's what's happening with your teams:</h2>
            </div>
        );
    }
}

export default Header;