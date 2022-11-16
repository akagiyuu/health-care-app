import {
    VictoryChart,
    VictoryLine,
} from 'victory-native';
import { useState } from 'react';
import { Button, View } from 'react-native';

export const Chart = () => {
    const [chartData, setData] = useState([]);
    const [maxYear, setMaxYear] = useState(0);
    const addData = () => {
        var d = [...chartData];
        var obj = {
            year: `${maxYear}`,
            earnings: Math.random() * (20000 - 10000) + 10000,
        };
        d.push(obj);
        setData(d);
        setMaxYear(maxYear + 1);
    };

    return (
        <View>
            <Button onPress={addData} title="Add Earnings" />
            <VictoryChart width={350}>
                <VictoryLine
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 },
                    }}
                    data={chartData}
                    x="year"
                    y="earnings"
                />
            </VictoryChart>
        </View>
    );
};
