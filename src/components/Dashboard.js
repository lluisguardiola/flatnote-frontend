import React from 'react'
import {connect} from 'react-redux'
import {Box, Button} from "@chakra-ui/core"
import NotesContainer from '../containers/NotesContainer'
// import NewNoteForm from './notes/NewNoteForm'

class Dashboard extends React.Component {

    componentDidMount = () =>{
     
    }

    render(){
        if(!this.props.auth) {
            this.props.history.push('/login')
            return null
          } 

        const h2styles = {
			color: "black",
			fontSize: "60px"
        }
        
        return (
            <Box 
                ml="3"
            >
                <Box >
                    <h2 style={h2styles}>{this.props.auth.username}'s Notes</h2>
                </Box>
                <Box>
                    <Button  
                        variant="solid" 
                        backgroundColor="messenger.600" 
                        color="#ffffff"
                        type="submit" 
                        value="New Note"
                        m={2}
                    >
                        New Note
                    </Button>
                    <NotesContainer />
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)