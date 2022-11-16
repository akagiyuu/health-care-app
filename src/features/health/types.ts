export type HealthKey = 'Heart rate' | 'SP O2' | 'Abnormal conditions';

export type HealthData = {
    [key in HealthKey]: number;
};

export const Default: HealthData = {
    'Heart rate': 0,
    'SP O2': 0,
    'Abnormal conditions': 0,
};
