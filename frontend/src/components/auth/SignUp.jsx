import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { signUpSchema } from "../../utils/formValidationSchema";

const SignUp = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="5px">
        <FormControl isRequired isInvalid={errors.name && touched.name}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <FormErrorMessage>
            {errors && touched.name && errors.name}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors.email && touched.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email id"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <FormErrorMessage>
            {errors && touched.email && errors.email}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={errors.password && touched.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                show
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors && touched.password && errors.password}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={errors.confirmPassword && touched.confirmPassword}
        >
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type="password"
              placeholder="Re-enter your password"
              id="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                show
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors && touched.confirmPassword && errors.confirmPassword}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="purple" width="full">
          Sign Up
        </Button>
      </VStack>
    </form>
  );
};

export default SignUp;
