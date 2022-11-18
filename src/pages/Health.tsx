import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryGroup } from 'victory-native';
import { HealthLimit } from '../data/HealthLimit';
import { HealthData, Info } from '../features/health';

import { InfoGraph } from '../features/health/components/InfoGraph';
import Firebase from '../services/Firebase';

const RECORD_COUNT = 10;
const MAX_VALUE = 300;

const HealthPage = () => {
    const [health, set_health] = useState(HealthData.Default);

    useEffect(() => {
        Firebase.HealthChange.on(snapshot => set_health(snapshot));
    }, []);

    return (
        <View>
            <VictoryChart
                domain={{ x: [0, RECORD_COUNT - 1], y: [0, MAX_VALUE] }}>
                {HealthData.KeyArray.slice(0, 2).map(value => (
                    <VictoryGroup>
                        <InfoGraph
                            label={value}
                            latestData={{ data: health[value] }}
                            recordSize={RECORD_COUNT}
                            color="#006655"
                        />
                    </VictoryGroup>
                ))}
            </VictoryChart>
            <View>
                {HealthData.KeyArray.slice(0, 2).map(value => (
                    <Info
                        text={value}
                        value={health[value]}
                        range={HealthLimit.HeartRate}
                    />
                ))}
            </View>
        </View>
    );
};

export default HealthPage;
