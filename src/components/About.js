import React from 'react'
import {connect} from 'react-redux'

class About extends React.Component {

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
    return {auth: state.auth}
}

export default connect(mapStateToProps)(About)