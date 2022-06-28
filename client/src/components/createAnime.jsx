
import { gql,  useMutation } from '@apollo/client'
import React, { useState } from 'react'
import CardWithImg from './Card/CardWithImg';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    RadioGroup,
    HStack,
    Radio,
    Select,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberInputStepper,
    NumberDecrementStepper,
    Text,
    Textarea,
    Button,
} from '@chakra-ui/react'


const AnimeMutation = gql`
 mutation Mutation($anime: Animee!) {
  addAnime(anime: $anime) {
    id
    creator
    name
    category
    description
  }
 }
`;


export default function CreateAnime() {

    const [AnimeId, setAnimeId] = useState('3')
    const [Animecreator, setAnimecreator] = useState('3')
    const [Animecategory, setAnimecategory] = useState(null)
    const [Animename, setAnimename] = useState('3')
    const [AnimedateOfPublic, setAnimedateOfPublic] = useState('3')
    const [mutateFunction, { data, loading, error }] = useMutation(AnimeMutation)

    if (loading) {
        <div> loading ...</div>
    }

    if (error) {
        console.log(error);
    }

    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const SunbitMutation = (e) => {
        e.preventDefault()
        mutateFunction({
            variables: {
                anime: {
                    id: AnimeId,
                    creator: Animecreator,
                    name: Animename,
                    category: Animecategory,
                    description: value,
                    rate: null,
                    dateOfPublic: AnimedateOfPublic
                }
            
        }})
    }

    return (
        <>
            
            {/* {data && data.allAnimes.map((el) => {
                return (
                    <CardWithImg key={el.id} creatorName={el.creator} __typename={el.category} name={el.name}
                        description={el.description} dateOfPublic={el.dateOfPublic} />
                )
            })} */}
            <form>
            <FormControl>
                    <FormLabel htmlFor='email'>Anime id </FormLabel>
                    <Input  value={AnimeId} onChange={(e) => setAnimeId(e.target.value)} />
                <Input  value={Animename} onChange={(e) => setAnimename(e.target.value)} />
                <FormHelperText>Anime name.</FormHelperText>
                <Text mb='8px'>Description of Anime: {value}</Text>
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                />
                <FormLabel as='legend'>Category</FormLabel>
                    <RadioGroup defaultValue='Itachi' value={Animecategory} onChange={(e) => setAnimecategory(e.target.value)}> 
                    <HStack spacing='24px'>
                        <Radio value='Sasuke'>Sasuke</Radio>
                        <Radio value='Nagato'>Nagato</Radio>
                        <Radio value='Itachi'>Itachi</Radio>
                        <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
                <FormLabel htmlFor='country'>creator</FormLabel>
                    <Select id='country' placeholder='Select country' value={Animecreator} onChange={(e) => setAnimecreator(e.target.value)}>
                    <option>Yamite cydasai </option>
                    <option>Осаму Тэдзуки</option>
                </Select>
                <FormLabel htmlFor='amount'>dateOfPublic</FormLabel>
                    <NumberInput max={2090} min={1900} value={AnimedateOfPublic} onChange={(e) => setAnimedateOfPublic(e.target.value)} >
                    <NumberInputField id='amount' />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                
            </FormControl>
                <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={false}
                    type='submit'
                    onClick={SunbitMutation}
                >
                    Submit
                </Button>
            </form>
            <h1>Ваше аниме:</h1>
            {data && <CardWithImg key={data.addAnime.id} creatorName={data.addAnime.creator} __typename={data.addAnime.category} name={data.addAnime.name}
                description={data.addAnime.description} dateOfPublic={data.addAnime.dateOfPublic} />}
        </>
    )
}
