"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const responce = await getProviders();
      setProviders(responce);
    };
    fetchProviders();
  }, []);

  const [toggledDown, setToggledDown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Picture of the author"
          width={30}
          height={30}
          className=" object-contain"
        ></Image>
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button className="outline_btn" type="button" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile" className="flex gap-2 flex-center">
              <Image
                src={session?.user?.image}
                alt="Picture of the author"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session?.user? (
          <div className="">
            <Image
              src={session.user.image}
              alt="Picture of the author"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggledDown((prev)=> !prev)}
            />

            {
                toggledDown && (
                    <div className="dropdown pointer-events-auto" >
                        <Link href='/profile' className="dropdown_link"
                        onClick={() => setToggledDown(false)}
                        >   
                            My-Profile
                        </Link>
                        <Link href='/create-prompt' className="dropdown_link"
                        onClick={() => setToggledDown(false)}
                        >   
                            Create Prompt
                        </Link>

                        <button
                        type="button"
                        onClick={()=> {
                            setToggledDown(false)
                            signOut()
                        }}
                        className="mt-5 black_btn w-full"
                        >
                            Sign Out
                        </button>
                    </div>
                )
            }

          </div>
        ) : (
          <> 
          {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
