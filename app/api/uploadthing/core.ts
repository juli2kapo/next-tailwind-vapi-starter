import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  cvUploader: f({
    // Allow images and specific document types
    // image: {
    //   maxFileSize: "32MB",
    //   maxFileCount: 1,
      
    // },
    "image/png":{
        maxFileCount: 1,
        maxFileSize: "32MB",
    },
    "image/jpeg":{
        maxFileCount: 1,
        maxFileSize: "32MB",
    },
    "application/pdf":{
        maxFileCount: 1,
        maxFileSize: "32MB",
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":{
        maxFileCount: 1,
        maxFileSize: "32MB",
    }, // .docx MIME type

  })
    // .middleware(async ({ req }) => {
    //   const user = await auth(req);
    //   if (!user) throw new UploadThingError("Unauthorized");
    //   return { userId: user.id };
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for user");
      console.log("file url", file.ufsUrl);
      return { uploadedBy: "user" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
