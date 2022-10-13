import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  useColorModeValue,
  useToast,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTest, getStudentTest } from "../Redux/Test/test.action";
import Tablerow from "../Components/Tablerow";
import AddTest from "../Components/AddTest";

const Tests = () => {
  
  const studentID = useParams();
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.TestReducer);
  console.log("TEST IN TEST ", tests);

  

  useEffect(() => {
    dispatch(getStudentTest(studentID.studentID));
  }, []);
  return (
    <>
      <Box
        m={5}
        bg={useColorModeValue("gray.100", "gray.500")}
        color={useColorModeValue("blue.900", "white")}
        p={2}
        borderRadius={5}
      >
        <AddTest />
      </Box>
      <Box
        m={5}
        bg={useColorModeValue("gray.100", "gray.500")}
        color={useColorModeValue("black.900", "white")}
        p={2}
        borderRadius={5}
      >
        <TableContainer w={"90%"} m={"auto"} mt={10}>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>
                  <Heading
                    color={useColorModeValue("black.900", "black")}
                    size="md"
                  >
                    Student Name
                  </Heading>
                </Th>
                <Th>
                  <Heading
                    color={useColorModeValue("black.900", "black")}
                    size="md"
                  >
                    Marks
                  </Heading>
                </Th>
                <Th>
                  <Heading
                    color={useColorModeValue("black.900", "black")}
                    size="md"
                  >
                    Date
                  </Heading>
                </Th>
                <Th>
                  <Heading
                    color={useColorModeValue("black.900", "black")}
                    size="md"
                  >
                    Attempt
                  </Heading>
                </Th>
                <Th>
                  <Heading
                    color={useColorModeValue("black.900", "black")}
                    size="md"
                  >
                    Result
                  </Heading>
                </Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tests.length > 0 ? (
                tests.map((ele, ind) => {
                  return <Tablerow ele={ele} key={ele._id} />;
                })
              ) : (
                <Tr>
                  <Td w={"100%"} textAlign="center" colSpan={5}>
                    There is no test related to this student, Create some test
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Tests;
