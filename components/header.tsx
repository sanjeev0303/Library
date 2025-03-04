"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { AvatarFallback, AvatarImage, Avatar } from "./ui/avatar";
import { getInitials } from "@/lib/utils";

const Header = ({session}: {session: Session}) => {

    const pathname = usePathname()

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link className="text-white text-xl" href="/">
          Library
          </Link>
        </li>

        <li>
            <Link href={'/my-profile'}>
            <Avatar>
            <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "IN")}
            </AvatarFallback>
            </Avatar>
            </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
