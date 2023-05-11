import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter"; 
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '@/settings/firebase/firebase.setup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app"


export default NextAuth({

  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    CredentialsProvider({
      name:'Credentials',
      credentials:{      

      },
      authorize(credentials,req) {
        const {email,password} = credentials;
        
        const user = {
          username:'you@gmail.com',
          password:'kdkood'
        }
        
      if(signInWithEmailAndPassword(auth,email,password)){
          return user;
      }

      return null;
      }
    })
  ],
  pages:{
    signin:'/signin'
  },
  adapter:FirestoreAdapter({
    credential:cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
    }),
  }),
});