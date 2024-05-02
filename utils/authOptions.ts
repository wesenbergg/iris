import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { DefaultSession, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User, { IUser } from "@/lib/models/User";

export interface AuthUser extends DefaultUser {
  _id?: string | null;
}
export interface AuthSession extends DefaultSession {
  user?: {
    _id?: string | null;
    name?: string | null;
    email?: string | null;
  };
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<AuthUser | null> {
        const { email, password } = credentials!;

        try {
          await dbConnect();
          const user = (await User.findOne({ email })) as IUser;

          if (!user) {
            return null;
          }

          const passwordsMatch = bcrypt.compareSync(
            password,
            user.passwordHash,
          );

          if (!passwordsMatch) {
            return null;
          }
          console.log("user", user);

          return {
            _id: user._id,
            name: user.name,
            email: user.email,
          } as AuthUser;
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: JWT; user: AuthUser }) {
      if (user) {
        token._id = user?._id;
      }
      return token;
    },
    async session({ session, token }: { session: AuthSession; token: JWT }) {
      return {
        ...session,
        user: {
          ...session?.user,
          _id: token._id,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
