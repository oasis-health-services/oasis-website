
export default function FieldError({ error }) {

    return (
        error ? <p className="mt-2 text-xs text-destructive">{error.message}</p> : null
    )
}