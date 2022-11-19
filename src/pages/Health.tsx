import { View } from 'react-native';
import { VictoryChart, VictoryGroup } from 'victory-native';
import { HealthLimit } from '../data/HealthLimit';
import { HealthData, InfoText } from '../features/health';

import { InfoGraph } from '../features/health/components/InfoGraph';
import { useHealth } from '../features/health/hooks/useHealth';

const RECORD_COUNT = 10;
const MAX_VALUE = 300;

const HealthPage = () => {
    const health = useHealth(HealthData.Default);
    const graph = HealthData.KeyArray.slice(0, 2).map(value => (
        <VictoryGroup>
            <InfoGraph
                label={value}
                latestData={{ data: health[value] }}
                recordSize={RECORD_COUNT}
                color="#006655"
            />
        </VictoryGroup>
    ));
    const info = HealthData.KeyArray.slice(0, 2).map(value => (
        <InfoText
            text={value}
            value={health[value]}
            range={HealthLimit.HeartRate}
        />
    ));

    return (
        <View>
            <VictoryChart
                domain={{ x: [0, RECORD_COUNT - 1], y: [0, MAX_VALUE] }}>
                {graph}
            </VictoryChart>
            <View>{info}</View>
        </View>
    );
};

export default HealthPage;
