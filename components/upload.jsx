"use client";
import { useState } from "react";
import { usePresignedUpload } from "next-s3-upload";
import Link from "next/link";
export default function UploadComponent() {
  let [tranXproof, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3, files } = usePresignedUpload();

  let handleFileChange = async (file) => {
    let { url } = await uploadToS3(file, {
      endpoint: {
        request: {
          url: "/api/s3-upload",
          body: {},
          headers: {},
        },
      },
    });
    setImageUrl(
      url.replace(
        "https://8e501682577cc8e1aa6aff01d08633e8.r2.cloudflarestorage.com/kapil",
        "https://cdn.heykapil.in"
      )
    );
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button className="upload-button" onClick={openFileDialog}>
        Upload Proof<sup>*</sup>
      </button>
      <div className="pt-3">
        {files.map((file, index) => (
          <div key={index}>File progress: {file.progress}%</div>
        ))}
      </div>
      {tranXproof && (
        <>
          <p className="text-green-500">
            Uploaded!{" "}
            <Link className="upload-link" href={tranXproof} target="_blank">
              View Attachment
            </Link>
          </p>
          <input
            className="hidden"
            type="text"
            name="tranXproof"
            value={tranXproof}
            required
          />
        </>
      )}
    </div>
  );
}
