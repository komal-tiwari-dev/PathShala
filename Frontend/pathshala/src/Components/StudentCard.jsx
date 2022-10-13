import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  Select,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  getStudent,
  updateStudent,
} from "../Redux/Student/student.action";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ data }) => {
  const [studentDetail, setStudentDetail] = useState({
    _id: data._id,
    studentName: data.studentName,
    gender: data.gender,
    age: data.age,
    __v: 0,
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate=useNavigate()

  const { isLoading } = useSelector((state) => state.StudentReducer);

  const deleteHandel = () => {
    dispatch(deleteStudent(data)).then((res) => {
      dispatch(getStudent())
      toast({
        title: `${data.studentName}'s data deleted successfully `,
        position: "top-left",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    });
  };

  const HandelUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStudent(studentDetail)).then((r)=>{
      dispatch(getStudent())
      toast({
        title: "Student data updated Succesfull",
        position: "top-left",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    })
    
  };

  isLoading && <Spinner />;
  return (
    <div>
      <Box
        m={3}
        bg={useColorModeValue("white", "#001429")}
        color={useColorModeValue("#001429", "white")}
        p={2}
        borderRadius={5}
      >
        <Image
          alignSelf={"center"}
          rounded="lg"
          w={"full"}
          h={"60%"}
          fit="cover"
          src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg"
          alt="Article"
        />
        <Stack m="auto" mt={3} w="80%" textAlign="left">
          <Heading size="md">Name: {data.studentName}</Heading>
          <Heading size="md">Gender: {data.gender}</Heading>
          <Heading size="md">Age: {data.age}</Heading>
        </Stack>
        <Flex
          mt={5}
          flexDirection="row"
          justifyContent={"space-between"}
          w={"full"}
        >
          <Button colorScheme="red" onClick={onOpen}>
            <EditIcon />
          </Button>
          <Button colorScheme="red" onClick={()=>navigate(`/test/${data._id}`)}>View Tests</Button>
          <Button colorScheme="red" onClick={deleteHandel}>
            <DeleteIcon />
          </Button>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={HandelUpdate}>
              <FormControl>
                <FormLabel>Student Name</FormLabel>
                <Input
                  placeholder="Enter name"
                  value={studentDetail.studentName}
                  onChange={(e) =>
                    setStudentDetail({
                      ...studentDetail,
                      studentName: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter student age"
                  value={studentDetail.age}
                  onChange={(e) =>
                    setStudentDetail({ ...studentDetail, age: e.target.value })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Select
                  cursor="pointer"
                  value={studentDetail.gender}
                  onChange={(e) =>
                    setStudentDetail({
                      ...studentDetail,
                      gender: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
              <Box mt={4}>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Update 
                </Button>
                <Button colorScheme="red" onClick={onClose}>Cancel</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StudentCard;
