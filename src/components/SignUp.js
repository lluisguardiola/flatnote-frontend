import React from 'react'
import { Box, FormControl, FormLabel, Input, Button  } from "@chakra-ui/core";

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        
        fetch('http://localhost:4000/users', reqObj)
        .then(resp => resp.json())
        .then(user => {
            alert(user)
            this.props.history.push('/login')
        })
        
        this.setState({
            username: '',
            password: ''
        })
    }
    
    render () {
        return (
            // <div className="signup">
            //     <form onSubmit={this.handleOnSubmit}>
            //         <label>username: </label>
            //         <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
            //         <br />
            //         <br />
            //         <label>password: </label>
            //         <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange} />
            //         <br />
            //         <br />
            //         <input type="submit" value="Sign Up"/>
            //     </form>
            // </div>
            <div className="signup">
                <FormControl 
                    ml="2%"
                    mt="2%"
                >
                    <form onSubmit={this.handleOnSubmit}>
                        <Box width={['45%', 0.35, 0.25, 0.15]}>
                            <FormLabel htmlFor="username">username: </FormLabel>
                            <Input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleOnChange} 
                                focusBorderColor="lime"
                                size="sm"
                                isRequired
                            />
                        </Box>
                        <br />
                        <Box width={['45%', 0.35, 0.25, 0.15]}>
                            <FormLabel htmlFor="password">password: </FormLabel>
                            <Input 
                                type="text" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleOnChange} 
                                focusBorderColor="lime"
                                size="sm"
                                isRequired
                            />
                        </Box>
                        <br />
                        <Button 
                            type="submit" 
                            value="Sign Up"
                        >
                            Sign Up
                        </Button>
                    </form>
                </FormControl>
            </div>
        )
    }
}

export default SignUp