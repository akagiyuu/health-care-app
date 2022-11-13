import notifee, { AndroidImportance } from '@notifee/react-native';
import { HealthData } from '../features/health/types';
import Firebase from '../services/Firebase';

export const health_change_listener = async () => {
    Firebase.HealthChange.on(async snapshot => {
        const data: HealthData = snapshot.val();

        if (data['Abnormal conditions'] === undefined) return;

        const abnormal_conditions = data['Abnormal conditions'];
        await notify(
            'Warning',
            'Abnormal Conditions: ' + abnormal_conditions.toString(),
        );
    });
};

const notify = async (title: string, body: string) => {
    await notifee.requestPermission();

    const channel_id = await notifee.createChannel({
        id: 'sound',
        name: 'Test',
        sound: 'notify',
        importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
        title: title,
        body: body,
        android: {
            channelId: channel_id,
        },
    });
};
