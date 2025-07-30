import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Slug is required", { status: 400 });
  }

  // Enable draft mode
  const draft = await draftMode(); 
  draft.enable();

  // Redirect with original query string
  redirect(`/${slug}?${searchParams.toString()}`);
};
