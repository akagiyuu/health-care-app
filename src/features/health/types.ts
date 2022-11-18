export namespace HealthData {
    export type Key = 'Heart rate' | 'SP O2' | 'Abnormal conditions';

    export type Entry = {
        [key in Key]: number;
    };
    export const Default: Entry = {
        'SP O2': 0,
        'Heart rate': 0,
        'Abnormal conditions': 0,
    };
}

export class HealthRecord {
    public data: {
        time: number;
        value: number;
    }[];
    constructor(n: number) {
        this.data = Array(n);
        for (let i = 0; i < n; i++)
            this.data[i] = {
                time: i,
                value: 0,
            };
    }
    add(value: number) {
        let length = this.data.length;
        for (let i = 0; i < length - 1; i++)
            this.data[i].value = this.data[i + 1].value;
        this.data[length - 1].value = value;
    }
}
