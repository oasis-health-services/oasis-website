import { AlertCircle, Camera, CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

export type UploadedFile = {
    file: File
    status: "pending" | "uploading" | "done" | "error"
    fileId?: string
    preview?: string
}

interface MultiFileUploadProps {
    label: string;
    description?: string;
    files?: UploadedFile[];
    setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
    maxFiles: number;
}

export function FileUploadZone({ label, description, files, setFiles, maxFiles = 1 }: MultiFileUploadProps) {

    const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const MAX_SIZE = 5 * 1024 * 1024;

    function formatFileSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    }

    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const cameraRef = useRef<HTMLInputElement>(null);

    const addFiles = useCallback((newFiles: File[]) => {

        setError(null);

        const validFiles = newFiles.filter(
            (f) => f.size <= MAX_SIZE && (
                ACCEPTED_TYPES.includes(f.type)
            )
        )

        if (validFiles.length === 0) {
            setError("No valid files selected");
            return;
        }

        const entries: UploadedFile[] = validFiles.map((f) => ({
            file: f,
            status: "pending" as const,
        }))
        setFiles((prev) => [...prev, ...entries].slice(0, maxFiles))
    }, [maxFiles, setFiles])

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            addFiles(Array.from(e.target.files))
        }
        if (isMobile) {
            if (cameraRef.current) cameraRef.current.value = "";
        } else if (inputRef.current) inputRef.current.value = "";
    }

    function removeFile(index: number) {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault()
        setIsDragging(true)
    }

    function handleDragLeave(e: React.DragEvent) {
        e.preventDefault()
        setIsDragging(false)
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files) {
            addFiles(Array.from(e.dataTransfer.files))
        }
    }

    useEffect(() => {
        const check = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(check);
    }, [])

    return (
        <div className="mt-5">
            <h3 className={`text-sm font-semibold text-foreground tracking-wide ${description ? "mb-1" : "mb-3"}`}>{label}</h3>
            {description && <p className="text-sm text-muted-foreground mb-3">{description} <span className="font-bold text-muted-foreground">(max {maxFiles} files)</span></p>}

            {(!files || files.length < maxFiles) && (
                <div
                    onDrag={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative rounded-lg border-2 border-dashed transition-colors cursor-pointer ${isDragging
                    ? "border-primary bg/primary/5"
                    : error
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    } p-6`}
                onClick={() => inputRef.current?.click()}
                onKeyDown={(e) => {
                    if (e.key == "Enter" || e.key === " ") inputRef.current?.click();
                }}
                role="button"
                tabIndex={0}
                aria-label={`Upload file`}
            >
                {/* Standard file picker*/}
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept={ACCEPTED_TYPES.join(",")}
                    onChange={handleFileChange}
                    className="hidden"
                    aria-hidden="true"
                />

                {/* Camera capture input (mobile)*/}
                <input
                    ref={cameraRef}
                    type="file"
                    multiple
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-hidden="true"
                />

                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        {isMobile ? (
                            <Camera className="h-5 w-5 text-muted-foreground" />
                        ) : (
                            <Upload className="h-5 w-5 text-muted-foreground" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-foreground">File</p>
                        {isMobile ? (
                            <>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Tap to take a photo or choose from gallery
                                </p>
                                <div className="flex items-center justify-center gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        type="button"
                                        onClick={() => cameraRef.current?.click()}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-primary-foreground rounded-md text-xs font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        <Camera className="h-3.5 w-3.5" />
                                        Take Photo
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => inputRef.current?.click()}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground rounded-md text-xs font-medium hover:bg-muted/80 transition-colors"
                                    >
                                        <Upload className="h-3.5 w-3.5" />
                                        Browse Files
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Drag and drop or click to browse
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    JPEG, PNG, WebP, HEIC, PDF, or WORD (max {formatFileSize(MAX_SIZE)})
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            )}

            {/* File list */}
            {files && files.length > 0 && (
                <ul className="mt-3 space-y-2">
                    {files.map((entry, i) => (
                        <li key={`${entry.file.name}-${i}`} className="flex items-center gap-2 text-sm bg-muted/50 rounded-md px-3 py-2">
                            {entry.status === "done" ? (
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            ) : entry.status === "uploading" ? (
                                <Loader2 className="h-4 w-4 text-primary animate-spin shrink-0" />
                            ) : entry.status === "error" ? (
                                <AlertCircle className="h-4 w-4 text-destructive shrink-0" />
                            ) : (
                                <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                            )}
                            <span className="text-foreground truncate flex-1">{entry.file.name}</span>
                            <span className="text-muted-foreground text-xs shrink-0">
                                {formatFileSize(entry.file.size)}
                            </span>
                            {entry.status !== "uploading" && (
                                <button
                                    type="button"
                                    onClick={() => removeFile(i)}
                                    className="text-muted-foreground hover:text-destructive"
                                    aria-label={`Remove ${entry.file.name}`}
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}