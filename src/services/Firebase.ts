import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    Unsubscribe
} from 'firebase/auth';
import {
    DataSnapshot,
    get,
    getDatabase,
    onValue,
    ref,
    type Database
} from 'firebase/database';
import AuthenticationData from '../data/firebase_auth.json';
import { Event } from '../lib/Event';

export default class Firebase {
    private static _Instance: Database | null = null;
    private static readonly _HealthChange = new Event<DataSnapshot>();
    private static _unscribe: Unsubscribe | null = null;
    public static get HealthChange() {
        return this._HealthChange.expose();
    }

    public static async init() {
        this._Instance = await this.CreateDatabase();
    }

    private static async CreateDatabase(): Promise<Database> {
        const app = initializeApp(AuthenticationData.config);
        const auth = getAuth(app);
        const database = getDatabase(app);
        await signInWithEmailAndPassword(auth, AuthenticationData.email, AuthenticationData.password);

        return database;
    }
    public static async CreateRef(key: string | null) {
        if (key === null) return;
        if (this._unscribe !== null) {
            this._unscribe();
            this._unscribe = null;
        }

        const database = await this.Instance();
        const user_ref = ref(database, key);
        const data = await get(user_ref);

        if (!data.exists()) return false;

        this._unscribe = onValue(user_ref, snapshot => {
            this._HealthChange.trigger(snapshot);
        });
        return true;
    }

    public static async Instance() {
        if (this._Instance === null)
            this._Instance = await this.CreateDatabase();
        return this._Instance;
    }
}
