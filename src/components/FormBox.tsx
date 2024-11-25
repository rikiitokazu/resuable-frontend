import "./FormBox.scss"

type LoginProps<T> = {
    fields: LoginFieldProps<T>[]
    className?: string
}

type LoginFieldProps<T> = {
    type: React.HTMLInputTypeAttribute,
    currState: T,
    setCurrState: React.ChangeEventHandler<HTMLInputElement>
    header?: string,
    className?: string, 
    required?: boolean,
}

// able to create login for x number of rows
export function FormBox<T extends string | number | readonly string[] | undefined>({fields}: LoginProps<T>): JSX.Element {
    return (
        <>
        {fields?.map((field, index) => (
            <div key = {index}>
            {field.header ?? <header>{field.header}</header>}
            <input 
                type={field.type}
                value={field.currState}
                onChange={field.setCurrState}
            />
            </div>
        ))}
        </>
    )
}