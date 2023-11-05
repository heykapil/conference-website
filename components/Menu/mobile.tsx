"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { components } from "@/lib/data/menu";
import {
  ArrowLeft,
  ArrowRight,
  AtSign,
  Clock,
  CreditCard,
  Download,
  HomeIcon,
  Info,
  Speech,
  User2,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ThemeSwitch2 from "../theme/switch";
export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <StyledMobileMenu>
        <StyledButton
          onClick={() => {
            setMenuOpen(true);
          }}
          aria-label="open menu"
        >
          <svg
            width={24}
            height={20}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="scale-x-[-1]"
          >
            <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" />
            <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" />
            <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
          </svg>
        </StyledButton>
        <AnimatePresence>
          {menuOpen && (
            <FullPageMenu
              className="bg-background"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <LinkContainer>
                <LinkButton
                  handleClick={() => {
                    setMenuOpen(false);
                  }}
                  href="/"
                  className="flex flex-row gap-4 justify-between"
                >
                  <HomeIcon />
                  HomePage
                </LinkButton>
                <LinkButton
                  handleClick={() => {
                    setMenuOpen(false);
                  }}
                  href="/speakers"
                  className="flex flex-row gap-4 justify-between"
                >
                  <Speech />
                  Speakers
                </LinkButton>
                <LinkButton
                  handleClick={() => {
                    setMenuOpen(false);
                  }}
                  href="/schedule"
                  className="flex flex-row gap-4 my-0 py-0 justify-between"
                >
                  <Clock />
                  Schedule
                </LinkButton>
                <hr className="border-1 border-b border-primary" />
                <Accordion type="single" collapsible>
                  <AccordionItem value="attending" className="">
                    <div className="flex flex-row gap-4 ml-2 items-center justify-start">
                      <User2 />
                      <AccordionTrigger className="font-normal text-fade">
                        Attending ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="ml-[1px]">
                      <LinkButton
                        handleClick={() => {
                          setMenuOpen(false);
                        }}
                        href="/register"
                        className="flex flex-row gap-4 justify-between"
                      >
                        <UserPlus />
                        Registration
                      </LinkButton>
                      <LinkButton
                        handleClick={() => {
                          setMenuOpen(false);
                        }}
                        href="/fees"
                        className="flex flex-row gap-4 justify-between"
                      >
                        <CreditCard />
                        Fee payment
                      </LinkButton>
                      <LinkButton
                        handleClick={() => {
                          setMenuOpen(false);
                        }}
                        href="/download"
                        className="flex flex-row gap-4 justify-between"
                      >
                        <Download />
                        Downloads
                      </LinkButton>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Other Info */}
                  <AccordionItem value="otherinfo" className="">
                    <div className="flex flex-row gap-4 ml-2 items-center justify-start">
                      <Info />
                      <AccordionTrigger className="font-normal text-fade">
                        Other Info !
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="ml-[1px]">
                      {components.map((component) => (
                        <LinkButton
                          key={component.title}
                          handleClick={() => {
                            setMenuOpen(false);
                          }}
                          href={component.href}
                          className="flex flex-row gap-4 justify-between"
                        >
                          <ArrowRight />
                          {component.title}
                        </LinkButton>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  {/* <AccordionItem value="attended" className="">
                  <div className="flex flex-row gap-4 ml-2 items-center justify-start">
                    <UserCheck />
                    <AccordionTrigger className="">Attended ?</AccordionTrigger>
                  </div>
                  <AccordionContent>
                    <LinkButton
                      handleClick={() => {
                        setMenuOpen(false);
                      }}
                      href="/certificate"
                      className="flex flex-row gap-4 justify-between"
                    >
                      <UserPlus />
                      Certificate
                    </LinkButton>
                    <LinkButton
                      handleClick={() => {
                        setMenuOpen(false);
                      }}
                      href="/lectures"
                      className="flex flex-row gap-4 justify-between"
                    >
                      <CreditCard />
                      Lectures
                    </LinkButton>
                    <LinkButton
                      handleClick={() => {
                        setMenuOpen(false);
                      }}
                      href="/contact"
                      className="flex flex-row gap-4 justify-between"
                    >
                      <AtSign />
                      Reach Us!
                    </LinkButton>
                  </AccordionContent>
                </AccordionItem> */}
                </Accordion>
              </LinkContainer>
              <button className="flex absolute left-[1rem] top-[1rem] p-1 items-center">
                <ThemeSwitch2 className="h-6 w-6" />
              </button>
              <StyledButton
                aria-label="close menu"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width={21}
                  height={21}
                  fill="currentColor"
                  className="opacity-80"
                >
                  <rect
                    x={4.136}
                    y={0.6}
                    width={23}
                    height={5}
                    rx={2}
                    transform="rotate(45 4.136 .6)"
                  />
                  <rect
                    x={0.601}
                    y={16.864}
                    width={23}
                    height={5}
                    rx={2}
                    transform="rotate(-45 .6 16.864)"
                  />
                </svg>
              </StyledButton>
            </FullPageMenu>
          )}
        </AnimatePresence>
      </StyledMobileMenu>
    </>
  );
}

function LinkButton({
  href,
  children,
  handleClick,
  className,
}: {
  href: string;
  children: ReactNode;
  handleClick: () => void;
  className: string;
}) {
  return (
    <Link href={href} className="">
      <button
        onClick={handleClick}
        className={cn(
          "p-2 border border-b border-muted-foreground rounded-lg",
          className
        )}
      >
        {children}
      </button>
    </Link>
  );
}

const StyledMobileMenu = styled(motion.div)`
  display: flex;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;

const LinkContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  margin: 4rem;
  button {
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  }
`;

const FullPageMenu = styled(motion.div)`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  align-items: start;
  transition: all 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-items: center;
  padding: 4px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  svg {
    transition: all 0.3s ease-in-out;
  }
`;
