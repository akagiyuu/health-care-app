import { FC, memo, PropsWithChildren } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-gesture-handler';
import { FormInputProps } from './types';

const LabeledTextInput: FC<
    PropsWithChildren<FormInputProps>
> = properties => {
    const { label, name, rules, defaultValue, ...input_props } = properties;

    const { field } = useController({ name, rules, defaultValue });

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {label && <Text>{label}</Text>}
            <RNTextInput
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                {...input_props}
                style={{ padding: 0, flex: 1 }}
            />
        </View>
    );
};

export const FormInput: FC<PropsWithChildren<FormInputProps>> = properties => {
    const form_context = useFormContext();
    if (!form_context) {
        console.error('TextInput must be wrapped by the FormProvider');
        return null;
    }

    return <LabeledTextInput {...properties} />;
};
