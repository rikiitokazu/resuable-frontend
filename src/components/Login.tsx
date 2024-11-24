import "./Login.scss"

type LoginProps<T> = {
    fields: LoginFieldProps<T>[]
    className?: string
}

type LoginFieldProps<T> = {
    header?: string,
    type: string,
    className?: string, 
    currState: T,
    setCurrState: (val:T) => void
}

// able to create login for x number of rows
export function Login(): JSX.Element {
    return (
        <div>
           <div>
                Hello
            </div> 
        </div>
    )
}