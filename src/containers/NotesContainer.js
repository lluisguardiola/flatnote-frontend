import React from 'react'
import {connect} from 'react-redux'

class NotesContainer extends React.Component {
    renderNotes = () => {
        console.log('renderNotes ---- notes container')
    }

    render () {
        return (
            <div className="NotesContainer">
                {this.renderNotes}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, null)(NotesContainer)