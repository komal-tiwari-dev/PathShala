import {
  Box,
  Flex,
  HStack,
  Button,
  Heading,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GrUserExpert } from "react-icons/gr";
import { logout } from "../Redux/Auth/auth.actions";
import { getItem } from "../Utils/localStorage";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const { Teacher } = useSelector((store) => store.AuthReducer);
  console.log("Is auth navbar", isAuth);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box
        py={[2, 3]}
        px={[null, 10]}
        bg={useColorModeValue("white", "#001429")}
        borderBottom={useColorModeValue("5px solid #001429", "5px solid white")}
      >
        <Flex
          h={[10, 16]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <RouterLink to={"/"}>
                <Heading textShadow="1px 1px #ff0000">PathShala</Heading>
              </RouterLink>
            </Box>
          </HStack>
          {isAuth ? (
            <Flex alignItems={"center"}>
              <Button
                onClick={toggleColorMode}
                bgColor={"transparent"}
                _hover={{ bgColor: "transparent" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <GrUserExpert />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  <Text ml={3} textAlign={"left"}>
                    Teacher Name : {Teacher}
                  </Text>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Flex alignItems={"center"}>
              <Button
                onClick={toggleColorMode}
                bgColor={"transparent"}
                _hover={{ bgColor: "transparent" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                variant={"ghosted"}
                colorScheme={"blue"}
                size={["xs", "sm"]}
                mr={4}
              >
                <RouterLink to={"/login"}>LOG IN</RouterLink>
              </Button>
              <Button
                variant={"outline"}
                color={"blue.400"}
                borderColor={"blue.400"}
                borderRadius={"sm"}
                _hover={{ color: "white", bg: "blue.400" }}
                size={["xs", "sm"]}
                mr={4}
                px={7}
                py={5}
              >
                <RouterLink to={"/register"}>SIGN UP</RouterLink>
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}
