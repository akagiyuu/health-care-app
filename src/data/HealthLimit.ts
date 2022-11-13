import { Range } from './types';

export class HealthLimit {
    public static HeartRate: Range = new Range(20, 100);
    public static SPO2: Range = new Range(20, 100);
}
