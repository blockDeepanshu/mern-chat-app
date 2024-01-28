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

const Login = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="5px">
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

        <Button type="submit" colorScheme="purple" width="full">
          Sign In
        </Button>
      </VStack>
    </form>
  );
};

export default Login;
