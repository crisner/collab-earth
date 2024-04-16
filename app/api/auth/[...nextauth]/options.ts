import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
        GoogleProvider({
            profile(profile) {
                console.log('google profile', profile);
                return {
                    ...profile,
                    id: profile.sub,
                    name: profile.name,
                }
            },
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
        }),
      ],
      pages: {
        signIn: '/signin',
        signOut: '/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
      },
      callbacks: {
        async jwt({token, user}) {
          if(user) {
            token.role = user.role;
          }
          return token;
        },
        async session({session, token}) {
          if (session.user) {
            session.user.role = token.role;
          }
          return session;
        },
        // async signIn({ account, profile }) {
        //   if (account.provider === "google") {
        //     return profile.email_verified
        //   }
        //   return true // Do different verification for other providers that don't have `email_verified`
        // },
      }
}