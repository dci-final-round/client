import { Avatar, Box, HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import { ColorModeSwitcher } from '../../ColorModeSwitcher';





interface User {
  name: string,
  profile: string
}

const NavbarComponent = ({name, profile}:User) =>
{
 
  return (

    <HStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        <Icon as={BsFillGrid3X3GapFill} />
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        <ColorModeSwitcher></ColorModeSwitcher>
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        <Avatar
      size="xs"
      name={name}
      src={profile}
    />{" "}
      </Box>
    </HStack>

  )
}

export default NavbarComponent
