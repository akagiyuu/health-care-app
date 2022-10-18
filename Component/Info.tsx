import {PropsWithChildren} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const Info: React.FC<
    PropsWithChildren<{
        text: string;
        value: number;
    }>
> = ({text, value}) => {
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
