import { PHQ9 } from "./phq9"
import { GAD7 } from "./gad7"
import { PCPTSD5 } from "./pcptsd5"
import { ASRS } from "./asrs"
import type { ScreenerConfig } from "./types"

export const screeners: Record<string, ScreenerConfig> = {
    "phq-9": PHQ9,
    "gad-7": GAD7,
    "pc-ptsd-5": PCPTSD5,
    "asrs": ASRS,
}

export const screenersList: ScreenerConfig[] = [PHQ9, GAD7, PCPTSD5, ASRS]

export function getScreenerBySlug(slug: string): ScreenerConfig | undefined {
    return screenersList.find((s) => s.slug === slug || s.slug.endsWith(slug))
}

export function getScreenerById(id: string): ScreenerConfig | undefined {
    return screeners[id]
}

export { type ScreenerConfig, type ScreenerQuestion, type ResultLevel } from "./types"
