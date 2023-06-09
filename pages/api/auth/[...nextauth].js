import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

export const authOptions = {
  
    // adapter: MongoDBAdapter(clientPromise),

    secret: process.env.SECRET,

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
}
export default NextAuth(authOptions)