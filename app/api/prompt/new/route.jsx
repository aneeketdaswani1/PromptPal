import { ConnectTODB } from "@utils/database";
import Prompt from "@model/prompt";
export const POST = async (req, res) => {
    const { prompt, UserID, tag } = await req.json();
    try{
        await ConnectTODB();
        const newPrompt = new Prompt({
            creater: UserID,
            prompt,
            tag,
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{
            status: 201,
        });

    }
    catch(err){
        console.log(err);
        return new Response(JSON.stringify({msg: "Error creating prompt"}),{
            status: 500,
        });

    }
      
};