import Image from "next/image";
import { features } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Check} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section></section> <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col lg:mb-[300px]">
        {/* grid */}

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 lg:mb-[300px]" />

        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center lg:mt-[200px] md:text-[300px]">
          Nexx
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
        <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <br />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px] lg:mt-20 ">
        <h2 className="text-4xl text-center"> What is Nexx.?</h2>
        <p className="text-muted-foreground text-center">
        Transform your digital presence with Nexx, the ultimate platform for agency management and 
          {" website creation."}  Whether you're a startup, a growing business, or an established agency, Nexx  <br />
          ffers an intuitive and powerful suite of tools designed to bring your vision to life.
        </p>
        <h2 className="text-4xl text-center"> Features of our website</h2>

        <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {features.map((feature) => (
            <Card
              key={feature.title}
              className={clsx('w-[300px] flex flex-col justify-between')}
            >
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <Check className="text-muted-foreground" />
                  <p>{feature.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
          </section>  
      
        <footer className=" py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Nexx</h2>
              <p className="text-gray-400 mt-2">
                Transform your digital presence with Nexx, the ultimate platform for agency management and website creation.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Developer</h2>
              <p className="text-gray-400 mt-2">Iam Sabari ,  a student who loves coding. This project is inspired from youtube(Web Prodigies).</p>
            </div>
            
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">&copy; 2024 Nexx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
