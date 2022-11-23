import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import BackgroundImage from '../assets/folketinget-background-image.svg';
import { Field, Form, Formik } from "formik";



export default function Login() {
  const [voterCPRInput, setVoterCPRInput] = useState('')
  const [voterPasswordInput, setVoterPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleChangeCPRInput = (e) => {
    setVoterCPRInput(e.target.value);
    console.log(voterCPRInput)
  };
  const handleChangePasswordInput = (e) => {
    setVoterPasswordInput(e.target.value);
    console.log(voterPasswordInput)

  };

  const navigate = useNavigate();

  //This shows in console
  function validateCPR(value) {

    let error = "";

    if (!value) {
      error = "Du bedes venligst indtaste din CPR-nummer";
      //console.log("tomt")
    } 
    if (value !== "010203-0405"){
      error = "Indtastet CPR-nummer er forkert. Indtast venligst igen: 010203-0405. Husk bindestregen."
      //console.log("forkert nummer")
    }
    if (value !== "0102030405"){
      error = "Indtastet CPR-nummer er forkert. Indtast venligst igen: 010203-0405."
      //console.log("forkert nummer")
    }

    return error;
  }

  // This doens't show in console
  function validatePassword(value) {
    let error = "";

    if (!value) {
      error = "Du bedes venligst indtaste din stemme-nøgle";
    } 
    if (value !== "test123" || "test 123"){
      error = "Indtastet kodeord er forkert. Prøv igen."
    }

    return error;
  }

    // This doens't show in console
  const handleSubmit = (e) => {
    //actions.setSubmitting(false)
    console.log("goes to voting")
    e.preventDefault()
    navigate ('/voting')
  }


  return (
    <Stack 
      minH={'100vh'} 
      direction={{ base: 'column', md: 'row' }}>
       <Flex flex={1}>
        <Image
          maxH={'100vh'}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            BackgroundImage  
          }
        />
      </Flex>

      <Flex 
        p={8} 
        flex={1} 
        align={'center'} 
        justify={'center'}>
        
        <Stack 
          spacing={4} 
          w={'full'} 
          maxW={'md'}>
         
          <Heading 
            color={'#1C4E81'}  
            fontSize={'xl'}>Velkommen til det digitale folketingsvalg.
          </Heading>
          
          <Text>
            For at stemme til folketingsvalget online, bedes du logge ind med de informationer, du har modtaget med posten.
          </Text>
          <Formik initialValues={{ cprnummer: "",
                                    password: "" 
                                     }} onSubmit={handleSubmit}>
              {(props) => (
                <Form className="input-field">
                   <Field
                    name="cprnummer"
                    validate={validateCPR}
                    onChange={handleChangeCPRInput}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel color={"#1C4E81"} marginTop='1rem'
                      >CPR-nummer</FormLabel>
                        <Input
                          id="cprnummer"
/*                           autoComplete="off"
 */                       type="text" 
                          placeholder='Indtast CPR-nummer' 
                          // Styling
                          borderRadius={'0'}
                          borderColor={'#1C4E81'}
                          color={'#1C4E81'} 
                          {...field}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="password"
                    validate={validatePassword}
                    onChange={handleChangePasswordInput}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel color={"#1C4E81"} marginTop='1rem'
                        >Stemme-nøgle</FormLabel>
                        <Input
                          id="stemme-nøgle"
/*                           autoComplete="off"
 */                          type="password" 
                          placeholder='Indtast stemme-nøgle' 
                          // Styling
                          borderRadius={'0'}
                          borderColor={'#1C4E81'}
                          color={'#1C4E81'} 
                          {...field}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <div>{errorMessage}</div> 
            <Button  
            id='login'
            isLoading={props.isSubmitting}

              type='submit'
              // Styling
              color={'#FFF'}
              backgroundColor={'#1C4E81'}
              width={'30%'}
              className='button'
              marginTop={'2rem'}
              >
              Log ind 
            </Button>
          </Form>
           )}
     </Formik>
        </Stack>
      </Flex>
    </Stack>
  );
}