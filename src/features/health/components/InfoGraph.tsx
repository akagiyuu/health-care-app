import { VictoryChart, VictoryLine } from 'victory-native';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import Firebase from '../../../services/Firebase';
import { HealthKey } from '../types';

const take_last = (
    array: { time: number; value: number }[],
    number_of_elements: number,
) => {
    let length = array.length;
    if (length <= number_of_elements) return array;
    let result = Array(number_of_elements);
    for (let i = 0; i < number_of_elements; i++) {
        console.log(array[length - 1 - i]);
        result[i] = {
            time: i,
            value: array[length - 1 - number_of_elements + i].value,
        };
    }

    return result;
};

export const InfoGraph = ({
    label,
    latest_value,
    number_of_records,
    domain,
}: {
    label: HealthKey;
    latest_value: number;
    number_of_records: number;
    domain?: any;
}) => {
    const [record, set_record] = useState([{ time: 0, value: 0 }]);
    console.log('Label: ', label);
    console.log('Record: ', record);

    useEffect(() => {
        const append_chart = (latest_value: number) => {
            console.log(latest_value);
            var data = take_last(record, number_of_records - 1);
            var obj = {
                time: `${data.length}`,
                value: latest_value,
            };
            data.push(obj);
            set_record(data);
        };
        append_chart(latest_value);
    }, [latest_value]);
    return (
        <VictoryLine
            domain={domain}
            standalone={false}
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
