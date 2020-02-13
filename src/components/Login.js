import React from 'react'
import {Box, FormControl, FormLabel, Input, Button} from "@chakra-ui/core";
import {connect} from 'react-redux'
import {loginUser} from '../actions/users'

class Login extends React.Component {
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
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        
        this.setState({
            username: '',
            password: ''
        })

        fetch('http://localhost:4000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            // store user data in redux store
            // redirect to about page
            this.props.loginUser(user)
            console.log(user)
            this.props.history.push('/about')
            
        })

    }
    
    render () {
        return (
            <div className="login">
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
                            value="Login"
                        >
                            Log In
                        </Button>
                    </form>
                </FormControl>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)