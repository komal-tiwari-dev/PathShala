import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  useColorModeValue,
  SimpleGrid,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Addstudent from "../Components/Addstudent";
import StudentCard from "../Components/StudentCard";
import { getStudent, addStudent } from "../Redux/Student/student.action";

const Homepage = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.StudentReducer);
  const { isLoading } = useSelector((state) => state.StudentReducer);
  
  console.log("Student homepage", students);
  
  useEffect(() => {
    dispatch(getStudent());
  }, []);
  return (
    <div>
      <Box
        m={5}
        bg={useColorModeValue("gray.300", "gray.600")}
        color={useColorModeValue("blue.900", "white")}
        p={2}
        borderRadius={5}
      >
        <Addstudent />
      </Box>
      <Box
        minH={"100vh"}
        justify={"center"}
        w={"100%"}
        bg={useColorModeValue("gray.300", "gray.600")}
        color={useColorModeValue("blue.900", "white")}
      >
        {!isLoading ? (
          <Box
            display="grid"
            gridTemplateColumns="repeat(5,1fr)"
            textAlign={"center"}
          >
            {students.map((el) => (
              <StudentCard key={el._id} data={el} />
            ))}
          </Box>
        ) : (
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Box>
    </div>
  );
};

export default Homepage;
