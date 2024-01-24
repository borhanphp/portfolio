import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

function slugifi(text: any) {
  return text
    .toLowerCase()
    .replace(text, text)
    .replace(/^-+|-+$/g, "")
    .replace(/\s/g, "-")
    .replace(/\-\-+/g, "-");
}

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      title,
      body,
      tags,
      photo,
      metaTitle,
      metaDetails,
      customLink,
      randomPhoto,
      postedBy,
    } = reqBody;
    const newBlog = new Blog({
      title,
      body,
      tags,
      photo,
      metaTitle,
      metaDetails,
      postedBy,
      customLink,
      randomPhoto,
      slug: slugifi(title),
    });
    console.log(newBlog);
    await newBlog.save();
    return NextResponse.json(
      { msg: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// import { connect } from "@/dbConfig/dbConfig";
// import Blog from "@/models/blog";
// import formidable from "formidable";
// import fs from "fs/promises";
// import { NextRequest, NextResponse } from "next/server";
// import path from "path";

// function slugify(text: any) {
//   return text
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "")
//     .replace(/\s+/g, "-");
// }

// connect();

// export async function POST(request: NextRequest) {
//   try {
//     const form = new formidable.IncomingForm();

//     const data = await new Promise((resolve, reject) => {
//       form.parse(request.req, (err, fields, files) => {
//         if (err) return reject(err);
//         resolve({ fields, files });
//       });
//     });

//     const { title, body, tags, metaTitle, metaDetails, customLink } =
//       data?.fields;
//     const { photo } = data?.files;

//     // Handle the file upload (save the file to a specific location, etc.)
//     const photoPath = path.join(__dirname, "public/blog/images", photo.name);
//     await fs.rename(photo.path, photoPath);

//     const newBlog = new Blog({
//       title,
//       body,
//       tags,
//       photo: photoPath,
//       metaTitle,
//       metaDetails,
//       customLink,
//       slug: slugify(title),
//     });

//     await newBlog.save();

//     return NextResponse.json(
//       { msg: "Blog created successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }
