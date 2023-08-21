import { ConnectTODB } from "@utils/database";
import Prompt from "@model/prompt";
export const GET = async (req,{params}) => {
    try{
        await ConnectTODB();
        const prompts = await Prompt.findById(params.id).populate("creater");

        if(!params.id || !prompts){
            return new Response("Prompt not found",{
                status: 404,
            });
        }

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

export const PATCH = async (req,{params}) => {
    const [prompt,tag] = await req.json()
    try{    

        await ConnectTODB()
        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt){
            return new Response("Prompt not found",{
                status: 404,
            });
        }

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag
        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt),{
            status: 200,
        })
    }
    catch(err){

        console.log(err);
        return new Response(JSON.stringify({msg: "Error creating prompt"}),{
            status: 500,
        });



    }
}

export const DELETE = async (req,{params}) => {

    try{
        await ConnectTODB()
        const existingPrompt = await Prompt.findByIdAndRemove(params.id)
        if(!existingPrompt){
            return new Response("Prompt not found",{
                status: 404,
            });
        }
        return new Response(JSON.stringify({msg: "Prompt deleted"}),{
            status: 200,
        })
    }
    catch(err){

        console.log(err);
        return new Response(JSON.stringify({msg: "Error creating prompt"}),{
            status: 500,
        });
    }

}