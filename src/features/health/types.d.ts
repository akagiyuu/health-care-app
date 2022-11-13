export interface HealthData {
    'Heart rate': number;
    'SP O2': number;
    'Abnormal conditions': number;
}
export type HealthKey = keyof HealthData;

export const Default: HealthData = {
    'Heart rate': 0,
    'SP O2': 0,
    'Abnormal conditions': 0,
};
