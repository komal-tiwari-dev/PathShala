import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../Redux/Auth/auth.actionTypes";
import {loginTeacher} from "../Redux/Auth/auth.actions"
const Login = () => {
  const [detail, setdetail] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast=useToast()



  const Handelsubmit = (e) => {
    e.preventDefault();
    console.log(detail);
    dispatch(loginTeacher(detail)).then((res) => {
      if (res.data.message == "Login Successfull") {
        toast({
          title: "Login Successfull",
          position: "top-left",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/", { replace: true });
      }
      else{
        toast({
          title: "Invalid Credentials",
          position: "top-left",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.600")}
        color={useColorModeValue("blue.900", "white")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={["1xl", "4xl"]}>Login Into Your Account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form action="" onSubmit={Handelsubmit}>
                <FormControl id="email" mt={3}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      setdetail({ ...detail, email: e.target.value })
                    }
                    required
                  />
                </FormControl>
                <FormControl id="password" mt={3}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) =>
                      setdetail({ ...detail, password: e.target.value })
                    }
                    required
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    mt={3}
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link to={"/register"}  color={"blue.400"}>
                      New User? Register
                    </Link>
                  </Stack>
                  <Button
                    mt={2}
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
