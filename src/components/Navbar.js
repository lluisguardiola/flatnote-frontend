import React from 'react'
import {Box, Button, Icon} from "@chakra-ui/core"
import {FaBook} from 'react-icons/fa'


class Navbar extends React.Component {
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
					>
						Log in
					</Button>
				</Box>
		)
	}
}

export default Navbar