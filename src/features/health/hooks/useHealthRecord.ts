import { useEffect, useReducer, Reducer } from 'react';
import { HealthRecordData } from '../types';

const initialize_record = (record_count: number) => {
    let data = Array(record_count);
    for (let i = 0; i < record_count; i++)
        data[i] = {
            time: i,
            value: 0,
        };

    return data;
};

type Action = {
    type: 'add' | 'new';
    data: number;
};
export const useHealthRecord = (
    record_count: number,
    data_property: number,
) => {
    const [record, dispatch] = useReducer<Reducer<HealthRecordData[], Action>>(
        (record, action) => {
            switch (action.type) {
                case 'add':
                    let length = record.length;
                    for (let i = 0; i < length - 1; i++)
                        record[i].value = record[i + 1].value;
                    record[length - 1].value = action.data;
                    return record;
            }

            return record;
        },
        initialize_record(record_count),
    );

    useEffect(() => {
        dispatch({ type: 'add', data: data_property });
    }, [data_property]);

    return record;
};
