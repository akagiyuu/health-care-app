import { useEffect, useState } from 'react';
import { VictoryLine } from 'victory-native';
import { HealthData, HealthRecord } from '../types';

interface InfoGraphProps {
    label: HealthData.Key;
    latestData: { data: number };
    recordSize: number;
    color: string;
    domain?: any;
}

export const InfoGraph = ({
    label,
    latestData,
    recordSize,
    color,
    domain,
}: InfoGraphProps) => {
    const [record, set_record] = useState(new HealthRecord(recordSize));
    console.log('Label: ', label);
    console.log('Record: ', record);

    useEffect(() => {
        const append_chart = (value: number) => {
            set_record(record => {
                record.add(value);
                return record;
            });
        };
        append_chart(latestData.data);
    }, [latestData]);
    return (
        <VictoryLine
            style={{
                data: {
                    stroke: color,
                },
            }}
            domain={domain}
            standalone={false}
            animate={{
                duration: 500,
                onLoad: { duration: 500 },
            }}
            data={record.data}
            x="time"
            y="value"
        />
    );
};
