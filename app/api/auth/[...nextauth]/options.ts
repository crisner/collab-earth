import GoogleProvider from 'next-auth/providers/google'

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
                console.log('google profile', profile);
                return {
                    ...profile,
                    id: profile.sub,
                    name: profile.name,
                    role: 'userRole'
                }
            },
          clientId: 'process.env.GOOGLE_ID',
          clientSecret: 'process.env.GOOGLE_SECRET',
        }),
      ],
      callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      }
}