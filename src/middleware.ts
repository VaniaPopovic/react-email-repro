import { auth } from "./auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth(async (req) => {
  const session = await auth();
  console.log("middleware", session);
});
