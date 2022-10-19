import {PropsWithChildren} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import get_data from '../Helper/database';

const Info: React.FC<
    PropsWithChildren<{
        text: string;
    }>
> = ({text}) => {
    const value = get_data();
    return (
        <ScrollView style={style.info}>
            <Text>{text}</Text>
            <Text>{value}</Text>
        </ScrollView>
    );
};
const style = StyleSheet.create({
    info: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default Info;
