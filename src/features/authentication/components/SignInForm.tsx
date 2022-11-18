import {
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { Button, StyleSheet, View, ViewStyle } from 'react-native';
import { useAppDispatch } from '../../../hooks/Redux';
import { sign_in } from '../slice';
import { FormInput } from './FormInput';
import Icon from 'react-native-vector-icons/Ionicons';

export const SignInForm = ({ style }: { style?: ViewStyle }) => {
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FormData> = data => dispatch(sign_in(data));

    const onError: SubmitErrorHandler<FormData> = (error, _) =>
        console.error(error);

    const { ...methods } = useForm();

    return (
        <View style={style}>
            <FormProvider {...methods}>
                <FormInput
                    name="id"
                    icon="key-outline"
                    placeholder="Id"
                    rules={{ required: 'Id is required!' }}
                    style={styles.form_input}
                />
            </FormProvider>
            <Button
                title="Sign in"
                color="#96CDFB"
                onPress={methods.handleSubmit(onSubmit, onError)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form_input: {
        marginVertical: 10
    }
})
