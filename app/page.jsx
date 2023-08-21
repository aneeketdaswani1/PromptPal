import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center  flex-col ">
       <h1 className="head_text  text-center">Discover and Share
       <br className="max-md:hidden"/>
       <span className="orange_gradient text-center"> AI-Powerd Prompts</span>
       </h1>
       <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam euismod, nisl eget mattis aliquam, augue nisl ultricies
        diam, vitae aliquam nunc nisl quis nunc. Donec euismod, nisl eget mattis aliquam, augue nisl ultricies
       </p>
       <Feed/>

    </section>
  )
}

export default Home
