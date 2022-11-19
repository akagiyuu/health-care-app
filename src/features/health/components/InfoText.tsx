import { StyleSheet, Text, View } from 'react-native';
import { Range } from '../../../data/types';
import { HealthData } from '../types';

type HealthInfo = {
    text: HealthData.Key;
    value: number;
    range: Range;
};

export const InfoText = ({ text, value, range }: HealthInfo) => (
    <View style={styles.container}>
        <Text style={styles.label}>{text + ': '}</Text>
        <Text style={{ color: range.is_outside(value) ? '#C34043' : '#000' }}>
            {value.toString()}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    label: {
        color: '#000'
    }
});
