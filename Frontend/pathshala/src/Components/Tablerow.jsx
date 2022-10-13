import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, TableContainer, Tbody, Td, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTest, getStudentTest, updateTest } from '../Redux/Test/test.action';

const Tablerow = ({ele}) => {
    const [testDetail, settestDetail] = useState({
        _id:ele._id,
      subject: ele.subject,
      marks: ele.marks,
      date: ele.date,
      attempt: ele.attempt,
      pass: ele.pass,
      __v:0
    });


    const toast = useToast();
    const dispatch=useDispatch()
    const studentID = useParams();
    // const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handelDelete = () => {
      dispatch(deleteTest(studentID.studentID, ele._id)).then((res) => {
        dispatch(getStudentTest(studentID.studentID));
        toast({
          title: `Test deleted successfully `,
          position: "top-left",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      });
    };

    const HandelUpdate = (e) => {
      e.preventDefault();
      dispatch(updateTest(studentID.studentID,testDetail)).then((r) => {
        dispatch(getStudentTest(studentID.studentID));
        toast({
          title: "Student data updated Succesfull",
          position: "top-left",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        onClose()
      });
    };

  return (
    <Tr>
      <Td pr="200px" fontSize="lg">
        {ele.subject}
      </Td>
      <Td>{ele.marks}/100</Td>
      <Td>{ele.date}</Td>
      <Td>{ele.attempt}</Td>
      <Td>{ele.pass == "Yes" ? "Pass" : "Fail"}</Td>
      <Td>
        <Button colorScheme="red" onClick={onOpen}>
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button colorScheme="red" onClick={handelDelete}>
          <DeleteIcon />
        </Button>
      </Td>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={HandelUpdate}>
              <FormControl>
                <FormLabel>Subject Name</FormLabel>
                <Input
                type="text"
                  placeholder="Enter Subject"
                  value={testDetail.subject}
                  onChange={(e) =>
                    settestDetail({
                      ...testDetail,
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
                  value={testDetail.marks}
                  onChange={(e) =>
                    settestDetail({
                      ...testDetail,
                      marks: e.target.value,
                    })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={testDetail.date}
                  onChange={(e) =>
                    settestDetail({ ...testDetail, date: e.target.value })
                  }
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Attempt</FormLabel>
                <Select
                  cursor="pointer"
                  value={testDetail.attempt}
                  onChange={(e) =>
                    settestDetail({
                      ...testDetail,
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
                  value={testDetail.pass}
                  onChange={(e) =>
                    settestDetail({
                      ...testDetail,
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
              <Box mt={4}>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Update Test
                </Button>
                <Button colorScheme="red" onClick={onClose}>Cancel</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Tr>
  );
}

export default Tablerow