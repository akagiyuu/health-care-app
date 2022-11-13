import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { HealthLimit } from '../data/HealthLimit';
import { Info } from '../features/health';
import { Default } from '../features/health/types';
import Firebase from '../services/Firebase';

const HealthPage = () => {
    const [health, set_health] = useState(Default);

    useEffect(() => {
        Firebase.HealthChange.on(snapshot => set_health(snapshot.val()));
    }, []);

    return (
        <ScrollView>
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
        </ScrollView>
    );
};

export default HealthPage;
