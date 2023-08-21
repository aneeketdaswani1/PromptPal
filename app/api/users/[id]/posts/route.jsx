import { ConnectTODB } from "@utils/database";
import Prompt from "@model/prompt";
export const GET = async (request,{params}) => {
    try{
        await ConnectTODB();
        console.log(params.id);
        const prompts = await Prompt.find({creater: params.id}).populate("creater");
        console.log(prompts);
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