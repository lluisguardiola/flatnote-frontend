import React from 'react'
import {connect} from 'react-redux'
import NotePreview from '../components/notes/NotePreview'

class NotesContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: null
        }
    }
    
    renderNotes = () => {
        if (!this.state.notes) {
            return
        }

        return this.state.notes.map(noteObj => {
            return <NotePreview key={noteObj.id} note={noteObj} />
        })
    }

    componentDidMount = () => {
        fetch(`http://localhost:4000/users/${this.props.user.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                notes: data
            }))
    }

    render () {
        return (
            <div className="NotesContainer">
                {this.renderNotes()}
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