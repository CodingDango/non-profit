"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import { Home, Info, Menu, Phone } from "lucide-react";
import { Container } from "./container";

export function Navbar() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <header className="sm:sticky top-0 z-50 w-full border-b bg-background">
      <Container className="flex h-16 items-center justify-between" py="">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">
            HopeFoundation
          </span>
        </Link>

        <div className="flex gap-4 sm:gap-6">
          {!isSmallScreen ? (
            <nav className="text-sm items-center gap-6 flex">
              <Link
                href="/"
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary"><Menu/></Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit" align='start'>
                <PopoverHeader>
                  <nav className="text-sm gap-4 flex-col flex">
                    <Link
                      href="/"
                      className="font-medium text-muted-foreground transition-colors hover:text-foreground flex gap-2 items-center"
                    >
                      <Home className="size-5!"/> Home
                    </Link>
                    <Link
                      href="/about"
                      className="font-medium text-muted-foreground transition-colors hover:text-foreground flex gap-2 items-center"
                    >
                      <Info className="size-5!"/> About
                    </Link>
                    <Link
                      href="/contact"
                      className="font-medium text-muted-foreground transition-colors hover:text-foreground flex gap-2 items-center"
                    >
                      <Phone className="size-5!"/> Contact
                    </Link>
                  </nav>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          )}

          <Button className="text-sm">Donate</Button>
        </div>
      </Container>
    </header>
  );
}
