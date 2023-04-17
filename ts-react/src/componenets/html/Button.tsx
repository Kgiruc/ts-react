type ButtonProps = {
    varient: 'primary' | 'secondary'
    children: string
} & Omit< React.ComponentProps<'button'>, 'children'> 

function Button({ varient, children, ...rest }: ButtonProps) {
    return (
        <button className={`class-with-${varient}`} {...rest}>
            {children}
        </button>
    )
}

export default Button