import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { ConnectTODB } from "@utils/database";
import User from "@model/user";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks:{
        async session({ session }) {

            const user = await User.findOne({ email: session.user.email });
    
            session.user.id = user._id.toString();
    
            return session;
            
            
        },
        async signIn({profile}){
            try{
                await ConnectTODB();
                // check if user exists
                const user = await User.findOne({email: profile.email});
                // if not, create user
                if(!user){
                    const newUser = new User({
                        username: profile.name.replace(' ','').toLowerCase(),
                        email: profile.email,
                        image: profile.picture,
                    })
    
                    await newUser.save();
                }
    
                return true;
            }
            catch(err){
                console.log(err);
                return false;
            }
        },
    }

})

export {handler as POST, handler as GET}