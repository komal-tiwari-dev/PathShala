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
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerTeacher } from "../Redux/Auth/auth.actions";
import { SIGNUP_SUCCESS } from "../Redux/Auth/auth.actionTypes";
const Register = () => {
  const [detail, setdetail] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Handelsubmit = (e) => {
    e.preventDefault();
    console.log(detail);
    dispatch(registerTeacher(detail)).then((r) => {
      if (r == SIGNUP_SUCCESS) {
        navigate("/login", { replace: true });
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
            <Heading fontSize={["1xl", "4xl"]}>Register Yourself</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            w={["100", "400px"]}
          >
            <Stack spacing={4}>
              <form action="" onSubmit={Handelsubmit}>
                <FormControl id="name" mt={3}>
                  <FormLabel>Teacher Name</FormLabel>
                  <Input
                    type="name"
                    name="name"
                    onChange={(e) =>
                      setdetail({ ...detail, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id="email" mt={3}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      setdetail({ ...detail, email: e.target.value })
                    }
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
                  />
                </FormControl>
                <Stack spacing={10} mt={2}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link to={"/"} color={"blue.400"}>
                      Allready A User
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
                    Register
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

export default Register;
