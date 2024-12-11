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

export function FormBox<T extends string | number | readonly string[] | undefined>({fields, className}: LoginProps<T>): JSX.Element {
    return (
        <div className = {`formbox ${className}`}>
        {fields?.map((field, index) => (
            <section key = {index} className = "formbox__item">
                {field.header ?? <header>{field.header}</header>}
                <input 
                    type={field.type}
                    value={field.currState}
                    onChange={field.setCurrState}
                    className = "formbox__box"
                />
            </section>
        ))}
        </div>
    )
}