import { ConnectTODB } from "@utils/database";
import Prompt from "@model/prompt";
export const GET = async (req, res) => {
    try{
        await ConnectTODB();
        const prompts = await Prompt.find({}).populate("creater");
        return new Response(JSON.stringify(prompts),{
            status: 200,
        });
    }
    catch(err){
        console.log(err);
        return new Response(JSON.stringify({msg: "Error creating prompt"}),{
            status: 500,
        });
    }
};