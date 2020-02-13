import React from 'react'
import {Box, Button} from "@chakra-ui/core"
import {FaBook} from 'react-icons/fa'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/auth'
import { withRouter } from 'react-router-dom';


class Navbar extends React.Component {
	handleLogout = () => {
		this.props.logoutUser()
		this.props.history.push('/login')
	}
	render() {
		const h1styles = {
			color: "white",
			fontSize: "60px"
		}
		return (
				<Box 
					w="100%"
					p={5}
					bg="cyan.400"
				>
					<Box d="flex" alignItems="baseline">
						<h1 style={h1styles}>FlatNote  </h1><Box color="#ffffff" as={FaBook} size="60px"/>
					</Box>
					<hr/>
					<br/>
					<Button 
						variant="solid" 
						backgroundColor="messenger.600" 
						color="#ffffff"
						size="md"
					>
						Dashboard
					</Button>
					<Button 
						variant="solid" 
						backgroundColor="messenger.600" 
						color="#ffffff"
						size="md"
						pos="absolute"
						right="5"
						onClick={this.handleLogout}
					>
						{this.props.auth ? 'Logout' : 'Log In'}
					</Button>
				</Box>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	  auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logoutUser: () => {dispatch(logoutUser())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))