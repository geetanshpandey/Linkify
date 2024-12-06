import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // ShadCN Card
import Image from "next/image";
import Navbar from "@/components/main/navbar";
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Section */}
      <Navbar/>

      {/* Main Content */}
      <main className="space-y-8 border-t border-neutral-800">
        {/* 1. Oval Text */}
        <div className="flex justify-center mt-20">
          <div className="bg-neutral-800 px-8 py-4 rounded-full shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Link<span className="text-blue-500">ify</span></h2>
          </div>
        </div>

        {/* 2. Centered Text Block */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-gray-100"><span className={caveat.className}>Make your work easy at Link<span className="text-blue-500">ify</span></span></h3>
        </div>

        {/* 3. Two Text Blocks (Left) and Empty Area (Right) */}
        <div className="flex justify-around items-center p-6 pt-16 pb-16">
          {/* Left Section */}
          <div className="space-y- text-gray-200 ">
            {/* Left Text Block 1 */}
            <div className="border-none flex justify-center text-center">
              <div>
                <p className="text-3xl font-lg text-blue-400"><span className={caveat.className}>Automatic link detection tool</span></p>
              </div>
            </div>
            {/* Left Text Block 2 */}
            <div className="border-none flex justify-center text-center">
              <div>
                <p className="text-2xl font-lg"><span className={caveat.className}>Link detection made easy</span></p>
              </div>
            </div>
          </div>

          {/* Empty Right Area */}
          <div className="h-40 w-[32%] border-dashed border-2 border-neutral-600 flex items-center justify-center rounded-lg">
            <span className="text-neutral-500">Empty</span>
          </div>
        </div>

        {/* 4. Image Section */}
        <div className="flex justify-center mt-8 h-[60vh]">
          <div className="w-[60%] sm:h-[100%] h-[40%] bg-neutral-700 rounded-lg shadow-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/vercel.svg"
                alt="Image"
                fill
                style={{ objectFit: "cover" }}
                priority // Optional: Use if this image is critical for the page
              />
            </div>
          </div>
        </div>
        <section className="mt-12 sm:max-w-5xl max-w-4xl mx-auto">
          <div className="flex justify-center text-center">
          <h3 className="text-4xl font-bold mb-10 text-center text-blue-600"><span className={`${caveat.className}`}>Pricing</span></h3>
          </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 pb-10">
          {[
            {
              title: "Starter",
              description: "Best option for personal use and for your personal project.",
              price: "$29",
            },
            {
              title: "Company",
              description:
                "Relevant for multiple users, extended & premium support.",
              price: "$99",
            },
            {
              title: "Enterprise",
              description:
                "Best for large scale uses and extended redistribution rights.",
              price: "$499",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-2 lg:mx-0 mx-4 mx-auto text-center text-gray-100 bg-neutral-900 rounded-lg border border-neutral-700 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[1.5x]"
            >
              <h3 className="mb-4 text-3xl font-semibold"><span className={`${caveat.className}`}>{plan.title}</span></h3>
              <p className="font-light text-gray-400 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-blue-500">{plan.price}</span>
                <span className="text-gray-400 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
               <Button className="bg-blue-500 hover:bg-blue-600 w-40">
                Get started
              </Button>
              </a>
            </div>
          ))}
        </div>
        </section>
      </main>
    </div>
  );
}

