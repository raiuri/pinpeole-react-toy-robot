import { FunctionComponent } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { TABLE_DIMENSSION } from '../../configs/constants';
import { arrayFromInterger } from '../../utils';
import logoPin from '../../../assets/logoPin.png';

export const Table: FunctionComponent = () => {
    const row = arrayFromInterger(TABLE_DIMENSSION.x);
    const col = arrayFromInterger(TABLE_DIMENSSION.x);

    function renderRow(rowIndex: number) {

        return row.map((index) => {

            return <Box height='100px' width='100px' textAlign='center' paddingTop={10}
                bg={(rowIndex + index) % 2 === 0 ? 'red.400' : 'gray.800'}>
            </Box>
        });
    }

    function renderCoordinateX(coordinateX: number) {
        return <Box height='100px' width='100px' textAlign='center' paddingTop={10}>{coordinateX}</Box>
    }

    function renderCoordinateY(coordinateY: number) {
        return <Box height='100px' width='100px' textAlign='center' paddingTop={10}>{coordinateY}</Box>
    }

    return (
        <div style={{ width: '600px' }}>

            <SimpleGrid
                bg='gray.50'
                columns={{ md: 6 }}
                p={2}
                textAlign='center'
                rounded='lg'
                color='gray.400'
            >
                <div>
                    <img src={logoPin} alt="" />
                </div>

                {row.map(renderCoordinateX)}

            </SimpleGrid>
            <SimpleGrid
                display='flex'
                column={{ md: 6 }}
                color='blue.200'
            >
                <SimpleGrid
                    color='gray.400'
                    bg='gray.50'
                    width={100}
                >
                    {col.map(renderCoordinateY)}

                </SimpleGrid>
                <SimpleGrid
                    color='gray.400'
                    bg='red.400'
                    columns={{ md: 5 }}
                >
                    {row.map(renderRow)}
                </SimpleGrid>
            </SimpleGrid>
        </div>
    )
}