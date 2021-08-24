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

export default function LoginPage() {
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
              <Heading> Log In </Heading>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}
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
              </FormControl>
              <Button
                type="submit"
              >Log In</Button>
              <br />
              <RouterLink to={`/signup`}>
                <label>Dont have an account? Sign Up </label>
              </RouterLink>
              
            </form>
          </Box>
        </Box>
      </Flex>
    )
}
