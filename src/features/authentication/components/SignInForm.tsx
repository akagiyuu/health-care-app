import {
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { Button, View } from 'react-native';
import { useAppDispatch } from '../../../hooks/Redux';
import { sign_in } from '../slice';
import { FormInput } from './FormInput';

export const SignInForm = () => {
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FormData> = data => dispatch(sign_in(data));

    const onError: SubmitErrorHandler<FormData> = (error, _) =>
        console.error(error);

    const { ...methods } = useForm();

    return (
        <View>
            <FormProvider {...methods}>
                <FormInput
                    name="id"
                    label="Id: "
                    rules={{ required: 'Id is required!' }}
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
