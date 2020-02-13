import React from 'react'
import {Box, Button, ButtonGroup, Grid} from "@chakra-ui/core";


class Navbar extends React.Component {
	render() {

		// const styles = {
		// 	positon: "absolute; right: 0"
		// }

		return (
				<Box 
					w="100%"
					p={5}
					bg="cyan.400"
				>
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