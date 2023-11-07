"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useRef } from "react";
import { usePresignedUpload } from "next-s3-upload";
import Link from "next/link";
import {
  // saveForm,
  // sendEmail,
  sendtoGoogle,
} from "@/lib/action";
import { useState } from "react";
import { FormSubmitButton } from "./SubmitButton";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { Check, UploadIcon } from "lucide-react";
import format from "date-fns/format";
import { collegeList } from "@/lib/data/collegelist";
import { Progress } from "../ui/progress";

import Image from "next/image";
type FormInput = z.infer<typeof FormSchema>;

function getDisplayTime() {
  return format(new Date(), "MMM dd yyyy, hh:mm:ss b");
}

export default function ClientForm() {
  const formRef = useRef<HTMLFormElement>(null);
  let [tranXproof, setImageUrl] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  let { FileInput, openFileDialog, uploadToS3, files } = usePresignedUpload();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(FormSchema),
    // defaultValues: {
    //   name: ".",
    //   email: "",
    // },
  });
  useFormPersist("comment-form", {
    watch,
    setValue,
    // exclude: [""],
  });
  let handleFileChange = async (file: any, event: any) => {
    setCurrentDate(getDisplayTime());
    //  Can be invoked to get the upload date and time
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size > 1 * 1000 * 1024) {
        alert(
          "File size is greater than 1 MB. Reduce size of image before uploading."
        );
        return false;
      }
    }
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
      // @ts-ignore
      url.replace(
        "https://s3.tebi.io/file.heykapil.in",
        "https://file.heykapil.in"
        // "https://8e501682577cc8e1aa6aff01d08633e8.r2.cloudflarestorage.com/kapil",
        // "https://cdn.heykapil.in"
      )
    );
  };
  return (
    <>
      <form
        id="comment-form"
        style={{ opacity: 1 }}
        className="w-full h-full min-h-full max-w-full mb-8 space-y-1"
        ref={formRef}
        action={async (formData: FormData) => {
          handleSubmit((d) => console.log(d));
          // setLoading(true);
          // handleSubmit((d) => console.log(d));
          // await saveForm(formData);
          await sendtoGoogle(formData);
          // await sendEmail(formData);
          // await sendtoGoogle(formData);
          // router.replace("/thank-you");
          // setLoading(false);
        }}
      >
        <div className="mb-4">
          <div className="space-y-6" style={{ zIndex: 1 }}>
            <div className="bg-accent p-2 rounded-lg">
              {/* @ts-ignore */}
              <div className="text-xl font-medium mb-2">
                1. Personal Details
              </div>
              <div className="space-y-2 mb-2">
                <div className="flex flex-row space-x-2 ">
                  <div className="text-sm">
                    <select
                      {...register("title")}
                      className={cn(
                        "bg-background",
                        errors?.title?.message
                          ? "text-red-500 border p-[0.65rem] rounded-lg"
                          : "text-green-500 border p-[0.65rem] rounded-lg"
                      )}
                      required
                    >
                      <option value="" id="title">
                        Title
                      </option>
                      <option value="Mr." id="title-0">
                        Mr.
                      </option>
                      <option value="Mrs." id="title-1">
                        Mrs.
                      </option>
                      <option value="Miss" id="title-2">
                        Miss
                      </option>
                      <option value="Ms." id="title-3">
                        Ms.
                      </option>
                      <option value="Mx." id="title-4">
                        Mx.
                      </option>
                      <option value="Dr." id="title-5">
                        Dr.
                      </option>
                      <option value="Hon." id="title-6">
                        Hon.
                      </option>
                      <option id="title-7" value=" ">
                        None
                      </option>
                    </select>
                  </div>
                  <input
                    className="hidden"
                    type="text"
                    id="RegDate"
                    name="RegDate"
                    value={currentDate}
                    onChange={(e) => e.target.value}
                    hidden
                  />
                  <Input
                    placeholder="First name"
                    aria-label="First name"
                    // disabled={pending}
                    {...register("firstname")}
                    minLength={2}
                    className={cn(
                      errors?.firstname?.message
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                    aria-invalid={Boolean(errors.firstname)}
                    required
                  />

                  <Input
                    placeholder="Last name"
                    // disabled={pending}
                    {...register("lastname")}
                    className={cn(
                      errors?.lastname?.message
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                    minLength={2}
                    aria-invalid={Boolean(errors.lastname)}
                    required
                  />
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <Input
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    // disabled={pending}
                    type="email"
                    className={cn(
                      errors?.email?.message
                        ? "text-red-500 w-full md:max-w-[60%] lg-max-w-[55%]"
                        : "text-green-500 w-full md:max-w-[60%] lg:max-w-[55%]"
                    )}
                    aria-invalid={Boolean(errors.email)}
                    required
                    {...register("email")}
                  />
                  {/* @ts-ignore */}
                  <Input
                    placeholder="Phone number"
                    minLength={10}
                    {...register("phone")}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      errors?.phone?.message
                        ? "text-red-500 w-full md:max-w-[37%] lg:max-w-[43.75%]"
                        : "text-green-500 w-full md: max-w-[37%] lg:max-w-[43.75%]"
                    )}
                    aria-invalid={Boolean(errors.phone)}
                  />
                </div>
                <Textarea
                  {...register("address")}
                  placeholder="Full address"
                  className={cn(
                    errors?.address?.message ? "text-red-500" : "text-green-500"
                  )}
                  minLength={4}
                  required
                  aria-invalid={Boolean(errors.address)}
                />
              </div>
              {errors?.firstname?.message && (
                <p className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
              {errors?.lastname?.message && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
              {errors?.email?.message && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              {errors?.phone?.message && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
              {errors?.address?.message && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div className="bg-accent p-2 rounded-lg">
              <div className="-title text-xl font-medium mb-2">
                2. University Details
              </div>
              <div className="flex flex-row space-x-2 mb-2">
                <select
                  {...register("affiliation")}
                  placeholder="Affiliation"
                  aria-invalid={Boolean(errors.affiliation)}
                  className={cn(
                    "flex w-1/2 border p-[0.45rem] rounded-lg bg-background text-foreground/80",
                    errors?.affiliation?.message ? "text-red-500" : ""
                  )}
                  required
                >
                  <option value="">Select Affiliation</option>

                  <option value="Professor">Professor</option>
                  <option value="Assosiate Professor">
                    Assosiate Professor
                  </option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="Guest/AdHoc teacher">Guest teacher</option>
                  <option value="Research Assosiate">Research Assosiate</option>
                  <option value="Research Scholar">Research Scholar</option>

                  <option value="Independent Researcher">
                    Independent Researcher
                  </option>
                  <option value="None">None of these</option>
                </select>
                <select
                  {...register("university")}
                  aria-invalid={Boolean(errors.university)}
                  className={cn(
                    "border w-1/2 p-[0.45rem] rounded-lg bg-background text-foreground/80",
                    errors?.university?.message ? "text-red-500" : ""
                  )}
                  required
                >
                  <option value="">Select University</option>
                  {collegeList.map((college, index) => (
                    <option key={index} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>
              {errors?.affiliation?.message && (
                <p className="text-red-500 text-sm">
                  {errors.affiliation.message}
                </p>
              )}
              {errors?.university?.message && (
                <p className="text-red-500 text-sm">
                  {errors.university.message}
                </p>
              )}
            </div>
            <div className="bg-accent p-2 rounded-lg">
              <div className="-title text-xl font-medium mb-2 ">
                3. Payment Details
              </div>
              <div className="flex flex-row justify-start space-x-4">
                <div className="flex flex-col space-y-2 mb-2">
                  <Input
                    {...register("tranXdate")}
                    placeholder="Trascation date"
                    type="datetime-local"
                    aria-invalid={Boolean(errors.tranXdate)}
                    className={cn(
                      "w-auto",
                      errors?.tranXdate?.message ? "text-red-500" : ""
                    )}
                    required
                  />

                  <Input
                    {...register("tranXno")}
                    placeholder="Transcation no."
                    aria-invalid={Boolean(errors.tranXno)}
                    className={cn(
                      "w-auto",
                      errors?.tranXno?.message
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                    required
                  />
                </div>
                <div className="flex flex-row space-x-1">
                  <div className="flex flex-col space-y-0 justify-between">
                    <FileInput onChange={handleFileChange} accept="image/*" />
                    <div className="flex flex-col justify-start">
                      <Button
                        type="button"
                        aria-roledescription="upload file"
                        variant="outline"
                        className="w-fit space-x-1 hover:bg-background/50 gap-1"
                        onClick={openFileDialog}
                      >
                        Upload <UploadIcon className="" />
                      </Button>
                    </div>
                    <div className="pt-1">
                      {files.map((file, index) => (
                        <div className="flex flex-row items-center" key={index}>
                          <Progress
                            value={file.progress}
                            className="w-full h-[6px] bg-none border border-muted"
                          />
                          {file.progress.toFixed(2)}%
                        </div>
                      ))}
                    </div>
                    {tranXproof && (
                      <div className="flex flex-row gap-1 items-center">
                        <Check className="text-green-500" />
                        <Link
                          href={tranXproof}
                          className="text-primary text-sm underline"
                          target="_blank"
                        >
                          View Attachment
                        </Link>
                      </div>
                    )}
                  </div>
                  <input
                    {...register("tranXproof")}
                    className="hidden"
                    aria-invalid={Boolean(errors.tranXproof)}
                    type="url"
                    value={tranXproof}
                    onChange={(e) => setImageUrl(e.target.value)}
                    minLength={10}
                    required
                  />
                </div>
              </div>
              {tranXproof && (
                <Image
                  alt="uploaded image"
                  crossOrigin="anonymous"
                  src={tranXproof}
                  width={100}
                  height={100}
                />
              )}
              {errors?.tranXdate?.message && (
                <p className="text-red-500 text-sm">
                  {errors.tranXdate.message}
                </p>
              )}

              {errors?.tranXno?.message && (
                <p className="text-red-500 text-sm">{errors.tranXno.message}</p>
              )}
              {!tranXproof && (
                <p className="text-red-500 text-sm">
                  Upload payment proof (image not more than 1MB).
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <select
                name="paper"
                className="border bg-background w-fit p-[0.65rem] rounded-lg"
                id="paper"
                required
              >
                <option value="">Choose one</option>

                <option value="Presenting">I want to present the paper.</option>
                <option value="Not Presenting">
                  I do not want to present the paper.
                </option>
              </select>
            </div>

            <br />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary checkbox-md"
                id="terms"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {" "}
                I have filled the data according to best of my knowledge and I
                agree to all the terms and conditions.
              </label>
            </div>
          </div>
        </div>
        <FormSubmitButton
          className="btn btn-success disabled:btn-error disabled:opacity-50"
          pendingState={
            <p className="flex items-center gap-1">
              Submitting <span className="loading loading-dots"></span>
            </p>
          }
          disabled={!tranXproof}
          type="submit"
          onClick={() => setCurrentDate(getDisplayTime())}
        >
          <p className="">Submit</p>
        </FormSubmitButton>
      </form>
    </>
  );
}
