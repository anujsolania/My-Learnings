
import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize() {
            
            return {
                id: "1",
                name: "anujjjj",
                email: "anuj@gmaul.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({user,token}: any) {
        token.userId = token.sub
        console.log(token)
        
        return token
    },
    async session({session,user,token}: any) {
        console.log(session)
        if (session && session.user) {
            session.user.id = token.sub
        }
        return session
    }
  }
}
