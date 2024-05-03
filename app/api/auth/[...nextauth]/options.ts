import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/user";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        await connectMongoDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            // Check if passwords match
            const passwordsMatch = await bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (passwordsMatch) {
              return user;
            } else {
              throw new Error("Please check your email and password!");
            }
          } else {
            throw new Error("Please check your email and password!");
          }
        } catch (error: any) {
          console.log("error", error);
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      profile(profile) {
        console.log("google profile", profile);
        return {
          ...profile,
          id: profile.sub,
          name: profile.name,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
    // signOut: '/signout',
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        token.id = user.id
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.id = token.id
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connectMongoDB();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const saltRounds = 10;
    const defaultHashedPassword = await bcrypt.hash('collab_earth_goole', saltRounds);
            const newUser = new User({
              username: user.email?.split("@")[0],
              email: user.email,
              first_name: user?.given_name,
              last_name: user?.family_name,
              role: "user",
              is_verified: user?.email_verified,
              password: defaultHashedPassword
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
      if(account?.provider === 'credentials') {
        return true;
      }
      return false;
    },
  },
};
