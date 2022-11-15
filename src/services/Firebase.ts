import firebase from '@react-native-firebase/app';
import database, {
    FirebaseDatabaseTypes,
} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import AuthenticationData from '../data/firebase_auth.json';
import { Event } from '../lib/Event';

export default class Firebase {
    public static readonly HealthChange =
        new Event<FirebaseDatabaseTypes.DataSnapshot>();
    private static _HealthRef: FirebaseDatabaseTypes.Reference | null = null;

    public static async init() {
        await this.Auth();
        auth().onAuthStateChanged(user => {
            if (user === null) return;
            console.log('Signed in as ', user.email);
        });
    }

    private static async Auth() {
        const app = await firebase.initializeApp(AuthenticationData.config);
        app.auth().signInWithEmailAndPassword(
            AuthenticationData.email,
            AuthenticationData.password,
        );
    }
    public static async CreateRef(key: string | null) {
        if (key === null) return;
        if (this._HealthRef !== null) this._HealthRef.off('value');

        const user_ref = database().ref(key);
        const data = await user_ref.once('value');

        if (!data.exists()) return false;

        user_ref.on('value', snapshot => this.HealthChange.trigger(snapshot));
        return true;
    }
}
