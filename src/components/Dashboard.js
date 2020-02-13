import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component {

    componentDidMount(){
        if(!this.props.auth) {
          this.props.history.push('/login')
        }
    }

    render(){
        return (
            <div className="about">
                <h2>About FlatNote</h2>
                <p>sd,fjasdfkasjdfhkjasdfhkdjfkjds</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)