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
      mTitle,
      mDesc,
      customLink,
      randomPhoto,
      postedBy,
    } = reqBody;
    const newBlog = new Blog({
      title,
      body,
      tags,
      photo,
      mTitle,
      mDesc,
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
