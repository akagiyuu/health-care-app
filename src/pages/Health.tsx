import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { VictoryChart } from 'victory-native';

import { HealthLimit } from '../data/HealthLimit';
import { Info } from '../features/health';
import { InfoGraph } from '../features/health/components/InfoGraph';
import { Default } from '../features/health/types';
import Firebase from '../services/Firebase';

const HealthPage = () => {
    const [health, set_health] = useState(Default);

    useEffect(() => {
        Firebase.HealthChange.on(snapshot => set_health(snapshot.val()));
    }, []);

    return (
        <VictoryChart width={350}>
            <InfoGraph label="Heart rate" latest_value={health['Heart rate']} />
            <InfoGraph label="SP O2" latest_value={health['SP O2']} />
        </VictoryChart>
    );
};

export default HealthPage;
