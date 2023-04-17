type HorizontalPosition = 'left' | 'center' | 'bottom'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

function Toast({ position }: ToastProps) {
    return (
        <div>Toast Notification Postion - {position}</div>
    )
}

export default Toast