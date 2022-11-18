import { Text, View } from 'react-native';
import { Range } from '../../../data/types';
import { HealthData } from '../types';

type HealthInfo = {
    text: HealthData.Key;
    value: number;
    range: Range;
};

export const Info = ({ text, value, range }: HealthInfo) => (
    <View style={{ flexDirection: 'row' }}>
        <Text>{text + ': '}</Text>
        <Text style={{ color: range.is_outside(value) ? '#C34043' : '#000' }}>
            {value.toString()}
        </Text>
    </View>
);
