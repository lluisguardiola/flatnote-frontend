import React from 'react'
import {Button} from "@chakra-ui/core"

class NoteCard extends React.Component {

	render () {
		const h3styles = {
			fontSize: "30px"
		}
		return (
			<div className="NoteCard">
				<h3 style={h3styles}>{this.props.note.title}</h3>
				<p>{this.props.note.content}</p>
				<Button  
					variant="solid" 
					backgroundColor="messenger.600" 
					color="#ffffff"
					type="submit" 
					value="Edit Note"
					mt={4}
				>
					Edit
				</Button>
				<Button  
					variant="solid" 
					backgroundColor="messenger.600" 
					color="#ffffff"
					type="submit" 
					value="Delete Note"
					mt={4}
					ml={2}
				>
					Delete
				</Button>
			</div>
		)
	}
}

export default NoteCard