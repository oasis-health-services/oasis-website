import { removeFile, uploadFile } from "@/api";
import { AlertCircle, Camera, CheckCircle2, FileImage, Loader2, Upload, X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

export interface UploadedFile {
    docId: string;
    fileName: string;
    fileSize: number;
    uploadStatus: 'pending' | 'uploading' | 'success' | 'error';
}

interface FileUploadProps {
    label: string;
    onFileChange: (file: UploadedFile | undefined) => void;
    extraProps?: Record<string, any>
    file?: UploadedFile;
}

const ACCEPTED_TYPES = ["image/jpeg", "images/png", "image/webp", "image/heic", "application/pdf", "msword"];
const MAX_SIZE = 5 * 1024 * 1024;

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function FileUploadZone({ file, onUpload, onRemove }: {
    file?: UploadedFile
    onUpload: (file: File) => Promise<void>
    onRemove: () => void
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const cameraRef = useRef<HTMLInputElement>(null);
    // const [preview, setPreview] = useState<string | null>(null);


    useEffect(() => {
        const check = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(check);
    }, [])

    const validateFile = (f: File): string | null => {
        console.log(`File => ${f.name}, type => ${f.type}`);
        if (!ACCEPTED_TYPES.includes(f.type)) return "Only images, PDF and Word documents are accepted";
        if (f.size > MAX_SIZE) return `File is too large (${formatFileSize(f.size)}). Maximum size is 5MB`;
        return null;
    }

    const handleFile = async (f: File) => {
        const validationError = validateFile(f);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError(null);
        setIsUploading(true);
        try {
            await onUpload(f);
            // setPreview(URL.createObjectURL(f));
        } catch (e) {
            setError(e instanceof Error ? e.message : "Upload failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    }

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) handleFile(droppedFile);
    }, [])

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) handleFile(selectedFile);

        if (inputRef.current) inputRef.current.value = "";
    }

    if (file) {

        return (
            <div className="relative rounded-log border-2 border-primary/30 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                    {/* {isImage ? (
                        <div className="relative w-20 h-14 rounded overflow-hidden border border-border flex-shrink-0">
                            <img
                                src={preview || "/placeholder.svg"}
                                alt={`Uploaded file`}
                                className="w-full h-full object-cover"
                            />
                        </div>) : (
                        <div className="w-20 h-14 rounded bg-muted flex items-center justify-center flex-shrink-0">
                            <FileImage className="h-6 w-6 text-muted-foreground" />
                        </div>
                    )} */}
                    <div className="w-20 h-14 rounded bg-muted flex items-center justify-center flex-shrink-0">
                        <FileImage className="h-6 w-6 text-muted-foreground" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">uploaded file</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{file.fileName}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.fileSize)}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemove()}
                        className="p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Remove image`}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
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
                    accept={ACCEPTED_TYPES.join(",")}
                    onChange={handleInputChange}
                    className="hidden"
                    aria-hidden="true"
                />

                {/* Camera capture input (mobile)*/}
                <input
                    ref={cameraRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleInputChange}
                    className="hidden"
                    aria-hidden="true"
                />

                {isUploading ? (
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 text-primary animate-spin" />
                        <p className="text-sm text-muted foreground">Uploading...</p>
                    </div>
                ) : (
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
                                        JPEG, PNG, WebP, HEIC, PDF, or WORD (max ${formatFileSize(MAX_SIZE)})
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <div className="flex items-start gap-1.5 mt-2">
                    <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error}</p>
                </div>
            )}
        </div>
    )
}

export function FileUpload({ label, onFileChange, extraProps, file }: FileUploadProps) {

    const handleUpload = async (file: File) => {
        const formData = new FormData();

        if (extraProps) {
            Object.entries(extraProps).forEach(([key, value]) => {
                if (value === undefined || value === null) return;
                if (Array.isArray(value) || typeof value === "object") {
                    formData.append(key, JSON.stringify(value))
                } else {
                    formData.append(key, String(value));
                }
            })
        }

        formData.append("file", file);

        const response = await uploadFile(formData);
        console.log(response);

        const uploadedFile: UploadedFile = {
            docId: response.document.docId,
            fileName: file.name,
            fileSize: file.size,
            uploadStatus: "success"
        }

        onFileChange(uploadedFile);
    }

    const handleRemove = async () => {
        if (file && file.docId) {
            await removeFile(file.docId);
        }

        onFileChange(undefined);
    }

    return (
        <>
            <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="file">{label}</label>
            <div className="space-y-4">
                <FileUploadZone
                    file={file}
                    onUpload={handleUpload}
                    onRemove={handleRemove}
                />
            </div>

        </>
    )
}