import VercelInviteUserEmail from "@/vercel-invite-user";
import { renderAsync } from "@react-email/render";

export default async function Home() {
  const email = await renderAsync(VercelInviteUserEmail({}));
  return <div>{JSON.stringify(email)}</div>;
}
