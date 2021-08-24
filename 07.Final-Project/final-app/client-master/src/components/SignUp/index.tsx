import React,{useState} from 'react';
import{
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    CircularProgress,
    Link,
    Heading
} from '@chakra-ui/react';

import {Link as RouterLink} from "react-router-dom";
import { userLogin } from "../../utils/mockApi";
import ErrorMessage from '../Shared/ErrorMessage';

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");

    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await userLogin({ email, password });
      setIsLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };
    
    return (
      <Flex width="100%" align="center" justifyContent="center">
        <Box>
            <Box textAlign="center">
              <Heading> Sign Up </Heading>
            </Box>
            <Box>
            <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel> Username </FormLabel>
                    <Input
                      type="text"
                      onChange={(event) => setUsername(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel> First name </FormLabel>
                    <Input
                      type="text"
                      onChange={(event) => setFirstName(event.currentTarget.value)}
                    />
                </FormControl>
                <FormLabel> Last name </FormLabel>
                    <Input
                      type="text"
                      onChange={(event) => setLastName(event.currentTarget.value)}
                    />
                <FormControl isRequired>
                    <FormLabel> Email </FormLabel>
                       <Input
                         type="email"
                         placeholder="test@test.com"
                         onChange={(event) => setEmail(event.currentTarget.value)}
                        />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel> Password </FormLabel>
                  <Input
                    type="password"
                    placeholder="********"
                    onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                  <FormHelperText>Passwords must contain at least eight characters, including at least 1 letter and 1 number. </FormHelperText>
                </FormControl>
                <Button>Sign Up</Button>
                <br />
                <RouterLink to={`/login`}>
                  <label>You have an account? Log In </label>
                </RouterLink>
                        
            </form>
          </Box>
        </Box>
      </Flex>
    )
}