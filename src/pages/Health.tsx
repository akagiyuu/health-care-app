import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryGroup } from 'victory-native';
import { HealthLimit } from '../data/HealthLimit';
import { HealthData, Info } from '../features/health';

import { InfoGraph } from '../features/health/components/InfoGraph';
import Firebase from '../services/Firebase';

const NUMBER_OF_RECORD = 10;
const MAX_VALUE = 300;

const HealthPage = () => {
    const [health, set_health] = useState(HealthData.Default);

    useEffect(() => {
        Firebase.HealthChange.on(snapshot => set_health(snapshot));
    }, []);

    return (
        <View>
            <VictoryChart
                domain={{ x: [0, NUMBER_OF_RECORD - 1], y: [0, MAX_VALUE] }}>
                <VictoryGroup>
                    <InfoGraph
                        label="Heart rate"
                        latestData={{ data: health['Heart rate'] }}
                        recordSize={NUMBER_OF_RECORD}
                        color="#006655"
                    />
                </VictoryGroup>
                <VictoryGroup>
                    <InfoGraph
                        label="SP O2"
                        latestData={{ data: health['SP O2'] }}
                        recordSize={NUMBER_OF_RECORD}
                        color="#7896aa"
                    />
                </VictoryGroup>
            </VictoryChart>
            <View>
                <Info
                    text="Heart rate"
                    value={health['Heart rate']}
                    range={HealthLimit.HeartRate}
                />
                <Info
                    text="SP O2"
                    value={health['SP O2']}
                    range={HealthLimit.SPO2}
                />
            </View>
        </View>
    );
};

export default HealthPage;
