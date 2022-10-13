import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
  Select,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent, getStudent } from "../Redux/Student/student.action";

export default function Addstudent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const toast = useToast({ position: "top" });

  const [studentDetail, setStudentDetail] = useState({
    studentName: "",
    gender: "",
    age:1,
  });
  const HandleAdd = (e) => {
e.preventDefault()
    dispatch(addStudent(studentDetail));
    onClose();
    toast({
      title: "Student added Succesfull",
      position: "top-left",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    dispatch(getStudent());
  };

  

  return (
    <>
      <Button colorScheme="red" w="200px" onClick={onOpen}>
        Add Student
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={HandleAdd}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="name"
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
              <Box mt={4} >
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                >
                  Add Student
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>Cancel</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
