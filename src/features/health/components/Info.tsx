import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { Range } from '../../../data/types';
import { HealthKey } from '../types';

export const Info: React.FC<
    PropsWithChildren<{
        text: HealthKey;
        value: number;
        range: Range;
    }>
> = ({ text, value, range }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>{text + ': '}</Text>
            <Text
                style={{
                    color: range.is_outside(value) ? '#C34043' : '#000',
                }}>
                {value.toString()}
            </Text>
        </View>
    );
};
