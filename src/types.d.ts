declare interface FormInputProps {
    api: ContextApi;
    className?: string;
    name: string;
    label: string;
    value?: string | Array<string> | boolean | number;
    changeFieldValue: Function;
    disabled?: boolean;
}
declare interface ContextApi {
    getErrors: Function;
    setValue: Function;
    getValues: () => Object;
    getTouched: Function;
    addField: (field: Field) => void;
    changeField: (field: Field) => void;
    removeField: (name: string) => void;
}
declare interface FormContext {
    api: ContextApi;
}
declare interface Field {
    name: string;
    validate: () => null | string;
    required: boolean;
    requiredMessage?: string;
}