import { TypeHeroLogo3D, BeamOfLight } from "./beam";
import { Button } from "../ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
export default function Hero() {
  return (
    <section className="relative -mt-[56px] min-h-[calc(100vh)] overflow-hidden lg:min-h-0 lg:pt-[56px]">
      <div className="absolute inset-10 -z-30 overflow-hidden rounded-full opacity-70 lg:hidden">
        {/* <BackgroundGrid /> */}
      </div>
      <div className="container relative grid min-h-screen items-center justify-center py-24 lg:min-h-0 lg:grid-cols-2 lg:py-0">
        <BeamOfLight />
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:items-start">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/typehero/typehero"
            className="animate-bg-gradient-to-center group rounded-full bg-gradient-to-r from-yellow-600 via-[#3178c6] to-[#3178c6] to-70% bg-[length:420%_420%] bg-right-bottom p-[1px] brightness-90 contrast-150 duration-500 hover:bg-left-top hover:shadow-[0_0_2rem_-0.5rem_#3178c6] dark:from-yellow-500 dark:via-white dark:to-[#3178c6] dark:brightness-125 dark:contrast-100 dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
          >
            <div className="rounded-full bg-white/80 px-3 py-1 dark:bg-black/80">
              <span className="animate-bg-gradient-to-center relative flex items-center bg-gradient-to-r to-70% bg-[length:420%_420%] bg-clip-text bg-right-bottom text-transparent duration-500 group-hover:bg-left-top dark:from-yellow-500 dark:via-white dark:to-[#3178c6]">
                {/* <Sparkle className="animate-oldstar absolute  -left-1 top-0.5 mr-2 h-5 w-5 translate-x-0.5 stroke-[#3178c6] stroke-2 duration-500 group-hover:rotate-180 group-hover:scale-110 group-hover:stroke-yellow-600 dark:duration-500  " /> */}
                {/* <Sparkle className="animate-newstar mr-2 h-4 w-4 stroke-[#3178c6] stroke-2 duration-500 group-hover:rotate-180 group-hover:scale-110 group-hover:fill-[#3178c6] dark:stroke-white dark:duration-500 dark:group-hover:fill-white" />{" "} */}
                Star us on GitHub
              </span>
            </div>
          </a>
          <div className="relative flex w-full items-center justify-center gap-4 lg:justify-start">
            <div className="absolute left-1/2 top-1/2 -z-10 hidden h-56 w-56 -translate-x-[15%] -translate-y-[50%] rounded-full bg-slate-400/10 blur-3xl dark:block" />
            <div className="absolute right-1/2 top-1/2 -z-10 hidden h-56 w-56 -translate-y-[40%] rounded-full bg-[#3178c6]/20 blur-3xl dark:block" />
            <TypeHeroLogo3D />
            <h1 className="animate-bg-gradient-to-center-title dark:to-69% bg-gradient-to-br from-[#3178c6] from-[69%] to-black/0 bg-clip-text bg-right-bottom text-6xl font-extrabold text-transparent dark:from-white dark:from-30% dark:via-[#3178c6] dark:to-[#3178c6] dark:bg-[length:300%_300%] sm:text-8xl sm:leading-[5.5rem]">
              type
              <br />
              hero
            </h1>
          </div>

          <p className="max-w-[55ch] bg-transparent text-center font-medium leading-8 text-black/60 dark:text-white/50 sm:px-8 lg:px-0 lg:text-left">
            <Balancer>description</Balancer>
          </p>
          <div className="flex flex-col-reverse gap-3 md:flex-row">
            <Button
              asChild
              className="hero-join-button group relative mx-auto w-fit overflow-hidden rounded-xl p-[2px] font-bold transition-all duration-300 hover:bg-transparent hover:shadow-[0_0_2rem_-0.5rem_#3178c6] dark:hidden md:mr-0 lg:mr-auto"
            >
              <Link href="/waitlist">
                <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-[#3178c6] transition-all duration-300">
                  {/* <Mail className="mr-1 h-4 w-4 stroke-[3]" /> */}
                  {/* {t("buttons.waitlist")} */}
                </span>
              </Link>
            </Button>
            <Button
              asChild
              className="hero-join-button-dark group relative mx-auto hidden w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all duration-300 dark:block dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8] md:mr-0 lg:mr-auto"
            >
              <Link href="/waitlist">
                <span className="inline-flex h-full w-fit items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black">
                  {/* <Mail className="mr-1 h-4 w-4 stroke-[3]" /> */}
                  buttons.waitlist
                </span>
              </Link>
            </Button>
            <div className="flex gap-3">
              <Button
                asChild
                className="flex items-center gap-2 rounded-xl border-2 px-4 py-2 dark:text-white"
                variant="outline"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="gap-1 md:inline-flex"
                  href="https://github.com/typehero/typehero"
                >
                  {/* <Github className="h-4 w-4" /> */}
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                className="flex items-center gap-2 rounded-xl border-2 px-4 py-2 dark:text-white"
                variant="outline"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="gap-1 md:inline-flex"
                  href="https://twitter.com/typeheroapp"
                >
                  {/* <Twitter className="h-4 w-4" /> */}
                  Twitter
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* <HeroIllustration /> */}
      </div>
    </section>
  );
}
