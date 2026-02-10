
export default function FieldError({ error }) {

    return (
        error ? <p className="mt-2 text-sm text-destructive">{error.message}</p> : null
    )
}