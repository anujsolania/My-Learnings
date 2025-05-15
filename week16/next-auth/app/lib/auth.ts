
import CredentialsProvider from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import GithubProvider from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import GoogleProvider from "next-auth/providers/google";
import { signIn } from 'next-auth/react';
import { pages } from 'next/dist/build/templates/app-page';

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
      }),
     Google({
        clientId: process.env.GOOGLE_CLIENT_ID || "" ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      Github({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
    
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
    },
    async redirect({ }) {
      return '/role'; 
    },
  },
  // pages: {
  //   signIn: "/signin"
  // }
}
