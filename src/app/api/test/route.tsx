import VercelInviteUserEmail from "@/vercel-invite-user";
import { renderAsync } from "@react-email/render";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  const data = await req.json();

  console.log(data);
  const html = await renderAsync(VercelInviteUserEmail({}));
  console.log(html);
  return NextResponse.json({ success: true });
}
