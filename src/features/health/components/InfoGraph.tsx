import { VictoryChart, VictoryLine } from 'victory-native';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import Firebase from '../../../services/Firebase';
import { HealthKey } from '../types';

export const InfoGraph: FC<
    PropsWithChildren<{ label: HealthKey; latest_value: number }>
> = ({ label, latest_value }) => {
    const [record, set_record] = useState([
        { time: 0, value: 0 }
    ]);
    const [maxYear, setMaxYear] = useState(0);
    console.log("Record: ", record);

    useEffect(() => {
        const append_chart = (latest_value: number) => {
            console.log(latest_value);
            var data = record.slice(Math.max(record.length - 4, 0))
            var obj = {
                time: `${maxYear}`,
                value: latest_value,
            };
            data.push(obj);
            set_record(data);
            setMaxYear(maxYear + 1);
        };
        append_chart(latest_value);
    }, [latest_value]);
    return (
        <VictoryLine
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
            }}
            data={record}
            x="time"
            y="value"
        />
    );
};
