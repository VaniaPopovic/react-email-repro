import type { DefaultSession } from "@auth/core/types";
import { renderAsync } from "@react-email/render";

import NextAuth from "next-auth";
import type { EmailConfig } from "@auth/core/providers/email";
import VercelInviteUserEmail from "./vercel-invite-user";

const ResendProvider: EmailConfig = {
  id: "email",
  type: "email",
  name: "Email",
  from: "",
  server: "",
  maxAge: 60 * 10,
  options: {},
  async sendVerificationRequest({
    identifier: email,
    url,
  }: {
    identifier: string;
    url: string;
  }) {
    const emailHtml = await renderAsync(
      VercelInviteUserEmail({ inviteLink: url, username: email })
    );

    console.log(emailHtml);

    // send email using email provider such as SendGrid
  },
};

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [ResendProvider],
  callbacks: {},
});
