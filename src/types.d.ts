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
    addField: Function;
    changeField: Function;
    removeField: Function;
}
declare interface FormContext {
    api: ContextApi;
}