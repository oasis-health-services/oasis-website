import { create } from "zustand";
import type { UploadedFile } from "@/components/forms/FileUploadZone";

interface FormState {
    currentStep: number;
    isSubmitting: boolean;
    submitted: boolean;
    files: Record<string, UploadedFile[]>;
    setStep: (step: number) => void;
    setIsSubmitting: (loading: boolean) => void;
    setFiles: (id: string, files: UploadedFile[]) => void;
    setSubmitted: (submitted: boolean) => void;
    next: () => void;
    prev: () => void;
    reset: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    currentStep: 0,
    isSubmitting: false,
    submitted: false,
    files: {},
    setStep: (step) => set({ currentStep: step }),
    setIsSubmitting: (loading) => set({ isSubmitting: loading }),
    setFiles: (id, files) => set((state) => ({
        files: {
            ...state.files,
            [id]: files
        }
    })),
    setSubmitted: (submitted: boolean) => set({ submitted }),
    next: () => set((state) => ({ currentStep: state.currentStep + 1, submitted: false })),
    prev: () => set((state) => ({ currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0, submitted: false })),
    reset: () => set({ currentStep: 0, isSubmitting: false, submitted: false, files: {} }),
}))