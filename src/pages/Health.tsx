import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { VictoryChart, VictoryGroup } from 'victory-native';

import { HealthLimit } from '../data/HealthLimit';
import { Info } from '../features/health';
import { InfoGraph } from '../features/health/components/InfoGraph';
import { Default } from '../features/health/types';
import Firebase from '../services/Firebase';

const NUMBER_OF_RECORD = 3;
const MAX_VALUE = 300;

const HealthPage = () => {
    const [health, set_health] = useState(Default);

    useEffect(() => {
        Firebase.HealthChange.on(snapshot => set_health(snapshot.val()));
    }, []);

    return (
        <VictoryChart
            domain={{ x: [0, NUMBER_OF_RECORD - 1], y: [0, MAX_VALUE] }}>
            <VictoryGroup>
                <InfoGraph
                    label="Heart rate"
                    latest_value={health['Heart rate']}
                    number_of_records={NUMBER_OF_RECORD}
                />
            </VictoryGroup>
            <VictoryGroup>
                <InfoGraph
                    label="SP O2"
                    latest_value={health['SP O2']}
                    number_of_records={NUMBER_OF_RECORD}
                />
            </VictoryGroup>
        </VictoryChart>
    );
};

export default HealthPage;
