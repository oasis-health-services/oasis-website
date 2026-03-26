import { motion } from "framer-motion";

export default function FieldError({ error }) {

    return (
        error ? <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-sm text-destructive">{error.message}</motion.p> : null
    )
}