import {PropsWithChildren, useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import { get_database } from '../Helper/database';

const Info: React.FC<
    PropsWithChildren<{
        text: string;
    }>
> = ({text}) => {
    const database = get_database();
    return (
        <ScrollView style={style.info}>
            <Text>{text}</Text>
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
