import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    state = {
        txt: ''
    }
    handleChange = e => {
        this.setState({
            txt: e.target.value
        })
    }
    render() {
        return ( < div > < input type = "text"
            value = { this.state.txt }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            textarea > < /textarea> <
            br / >



            <
            /div >
        )

    }






}



ReactDOM.render( < App / > , document.getElementById('root'))