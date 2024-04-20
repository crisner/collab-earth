import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & { id: string; role: string };
  }

  interface User extends DefaultUser {
    role: string;
   given_name: string;
    family_name: string;
    email_verified: string;
  }
}
