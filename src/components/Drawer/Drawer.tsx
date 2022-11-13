import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch } from '../../hooks/Redux';
import { sign_out } from '../../features/authentication/slice';
import UserProfile from './UserProfile';
import HealthPage from '../../pages/Health';

const DrawerContent: React.FC<DrawerContentComponentProps> = properties => {
    const dispatch = useAppDispatch();
    return (
        <DrawerContentScrollView
            {...properties}
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between',
            }}>
            <View>
                <UserProfile />
                <DrawerItemList {...properties} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon name="sign-out" color="#C34043" size={size} />
                    )}
                    label="Sign Out"
                    labelStyle={{ color: '#C34043' }}
                    onPress={() => dispatch(sign_out())}
                />
            </View>
        </DrawerContentScrollView>
    );
};

const drawer = createDrawerNavigator();

export const Drawer = () => {
    return (
        <drawer.Navigator
            drawerContent={properties => <DrawerContent {...properties} />}>
            <drawer.Screen
                name="Health"
                component={HealthPage}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Icon name="heartbeat" color={color} size={size} />
                    ),
                }}
            />
        </drawer.Navigator>
    );
};
