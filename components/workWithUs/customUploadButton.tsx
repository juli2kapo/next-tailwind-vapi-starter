"use client";

import React, { useState, forwardRef } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { twMerge } from "tailwind-merge";
import { CloudUpload, Loader2 } from "lucide-react";

interface UploadDropzoneV1Props {
    setFileSelected?: (isSelected: boolean) => void;
    onUploadStart?: () => void;
    onUploadComplete?: (fileUrl: string, fileName: string) => void;
    onUploadError?: (errorMessage: string) => void;
}

export default forwardRef<HTMLDivElement, UploadDropzoneV1Props>(function UploadDropzoneV1(
  { setFileSelected, onUploadStart, onUploadComplete, onUploadError }, 
  ref
) {
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [uploadedFileName, setUploadedFileName] = useState<string | null>("Arrastra y suelta el archivo aquí");
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div ref={ref}>
      <UploadDropzone
        endpoint="cvUploader"
        config={{ cn: twMerge }}
        content={{
          button: "",
          allowedContent: "DOCX, PDF, PNG, JPG",
          label: uploadedFileName,
          uploadIcon: isUploading ? (
            <Loader2 className="animate-spin text-white" size={60} strokeWidth={1.5} />
          ) : (
            <CloudUpload className="text-white" size={60} strokeWidth={1.5} />
          ),
        }}
        appearance={{
          container: { border: "1px solid white" },
          label: { color: "#d1d5dc" },
          button: { cursor: "pointer" },
        }}
        className="
          ut-label:text-white border-white border 
          ut-allowed-content:text-white border-solid 
          ut-button:hidden hover:cursor-pointer
        "
        onUploadBegin={() => {
          setIsUploading(true);
          if (onUploadStart) onUploadStart();
        }}
        onClientUploadComplete={(res) => {
          setIsUploading(false);
          if (res && res.length > 0) {
            setUploadedFileName(res[0].name);
            console.log("File uploaded:", res[0].name);
            if (setFileSelected) {
                setFileSelected(true);
            }
            if (onUploadComplete) {
                onUploadComplete(res[0].url, res[0].name);
            }
            console.log("Upload complete:", res[0].url);
          }
        }}
        onUploadError={(error) => {
          setIsUploading(false);
          setErrorMessage(error.message);
          console.log("Upload error:", error);
          if (setFileSelected) {
            setFileSelected(false);
          }
          if (onUploadError) {
            onUploadError(error.message);
          }
        }}
        onChange={(res) => {
          if (res && res.length > 0) {
            setUploadedFileName(res[0].name);
            if (setFileSelected) {
                setFileSelected(true);
            }
          }
        }}
      />
    </div>
  );
});