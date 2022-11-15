import { UseControllerProps } from 'react-hook-form';
import { TextInputProps, ViewStyle } from 'react-native';

export interface FormInputProps extends TextInputProps, UseControllerProps {
    label: string,
    defaultValue?: string
}
