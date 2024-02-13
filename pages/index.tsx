import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const countResponses = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Do you need 10 mins?",
  "Fine you get 10 mins.",
  "Just think about it.",
  "Just think about it before clicking no.",
  "Gosh, Manuel.",
  "I'll give you more than 10 mins",
  "Come on... 🥺",
  "what's the worst that can happen?",
  "Ok fine, I'll stop asking...",
  "Just kidding..",
  "Now you're just pressing no for fun.",
  "Aren't you?",
  "Aren't you? 😑",
  "Try better at saying no.",
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleNoButtonClick = () => {
    if (count < countResponses.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-[#FDFEFC]`}
    >
      <Head>
        <title>Valentine's Day Card</title>
        <meta
          name="description"
          content="Hi Manuel, will you be my valentine?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      {!isConfirmed && (
        <>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
            <Image
              className=" rounded-full"
              src="/question.gif"
              alt="Question GIF"
              width={280}
              height={200}
              priority
            />
          </div>

          <h1 className="text-4xl">
            <span className=" bg-transparent">Hypothetically</span> <br />
            <span className="text-black">
              Manuel Fernandes, will you be my valentine?
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{ fontSize: 20 * count + 16 }}
              onClick={() => setIsConfirmed(true)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNoButtonClick}
            >
              {countResponses[count]}
            </button>
          </div>
        </>
      )}

      {isConfirmed && (
        <>
          <div className="text-4xl mb-2 text-black">
            Waaad yay!
            <br />
          </div>
          <a
            className="text-2xl  text-black"
            href="https://wa.me/+919821032203"
            rel="noopener noreferrer"
          >
            Click here to reach me
          </a>
        </>
      )}
    </main>
  );
}
