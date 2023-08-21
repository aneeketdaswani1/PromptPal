import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handlesubmit }) => {
  return(<section className=" w-full max-w-full flex-start flex-col">
    <h1 className=" head_text  text-left">
        <span className=" blue_gradient font-serif"> {type} Post</span>

    </h1>
    <p className="desc text-left max-w-md font-mono">
      {type} and share your prompt with the world.
      and let your imagination run wild with the endless possibilities
      and AI-powered Plateform.
    </p>
    <form className=" mt-8 w-full max-w-2xl flex flex-col gap-7 glassmorphism" onSubmit={handlesubmit}>

      <label>
        <span className=" font-satoshi font-bold text-base text-gray-500">Your AI Prompt</span>
        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here"
          required
          className="form_textarea"
        />
      </label>
      <label>
        <span className=" font-satoshi font-bold text-base text-gray-500">Tag
        {' '}
          <span className=" font-thin">
            #product #webdevelopment #idea 
          </span>
        </span>
        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="#tag"
          required
          className="form_input"
        />
      </label>

      <div className=" flex-end mx-3 mb-5 gap-4">
        <Link href='/' className=" text-gray-500 text-sm">  
            Cancel
        </Link>
        <button type="submit" disabled={submitting}
        className=" px-5 py-1.5 text-sm bg-blue-500 text-white rounded-full"
        >
            {
                submitting ? `${type}...` : type
            }
        </button>

      </div>

    </form>

  </section>);
};

export default Form;
