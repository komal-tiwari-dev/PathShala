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
import { useParams } from "react-router-dom";
import { addStudent, getStudent } from "../Redux/Student/student.action";
import { addTest, getStudentTest } from "../Redux/Test/test.action";

export default function AddTest() {
  const studentID=useParams()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const toast = useToast({ position: "top" });

  const [studentDetail, setStudentDetail] = useState({
    subject: "",
    marks: 1,
    date: "",
    attempt: "",
    pass: "",
  });
  const HandleAdd = (e) => {
e.preventDefault()
    dispatch(addTest(studentID.studentID,studentDetail));
    onClose();
    toast({
      title: "Test added Succesfull",
      position: "top-left",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    dispatch(getStudentTest(studentID.studentID));
  };

  

  return (
    <>
      <Button colorScheme="red" w="200px" onClick={onOpen}>
        Add Test
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={HandleAdd}>
              <FormControl>
                <FormLabel>Subject Name</FormLabel>
                <Input
                  placeholder="Enter Subject"
                  onChange={(e) =>
                    setStudentDetail({
                      ...studentDetail,
                      subject: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Marks</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter test mark"
                  onChange={(e) =>
                    setStudentDetail({ ...studentDetail, marks: e.target.value })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  onChange={(e) =>
                    setStudentDetail({ ...studentDetail, date: e.target.value })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Attempt</FormLabel>
                <Select
                  cursor="pointer"
                  onChange={(e) =>
                    setStudentDetail({
                      ...studentDetail,
                      attempt: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Result</FormLabel>
                <Select
                  cursor="pointer"
                  onChange={(e) =>
                    setStudentDetail({
                      ...studentDetail,
                      pass: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Pass</option>
                  <option value="No">Fail</option>
                </Select>
              </FormControl>
              <Box mt={4} >
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                >
                  Add Test
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
