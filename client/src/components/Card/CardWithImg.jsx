import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CardWithImg(props) {

    const { __typename, name, description, creatorName, dateOfPublic, id } = props

    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        objectFit='cover'
                        boxSize='inherit'
                        src={
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        alt={'fasdf'}
                        
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {__typename}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        <Link to={id ?? '#'}>{name}</Link>
                        
                    </Heading>
                    <Text color={'gray.500'}>
                        {description}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={creatorName}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>A{creatorName}</Text>
                        <Text color={'gray.500'}>{dateOfPublic}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}