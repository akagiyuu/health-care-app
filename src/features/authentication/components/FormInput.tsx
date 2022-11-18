import {
    useController,
    UseControllerProps,
    useFormContext,
} from 'react-hook-form';
import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export interface FormInputProps extends TextInputProps, UseControllerProps {
    placeholder: string;
    icon: string;
    defaultValue?: string;
}

const LabeledTextInput = ({
    placeholder,
    icon,
    name,
    rules,
    defaultValue,
    style,
    ...input_props
}: FormInputProps) => {
    const { field } = useController({ name, rules, defaultValue });

    return (
        <View
            style={StyleSheet.compose(style, {
                flexDirection: 'row',
                alignItems: 'center',
            })}>
            <View style={styles.label}>
                <Icon name={icon} color="#C34043" />
            </View>
            <TextInput
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                placeholder={placeholder}
                {...input_props}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        padding: 0,
    },
});

export const FormInput = (properties: FormInputProps) => {
    const form_context = useFormContext();
    if (!form_context) {
        console.error('TextInput must be wrapped by the FormProvider');
        return null;
    }

    return <LabeledTextInput {...properties} />;
};
