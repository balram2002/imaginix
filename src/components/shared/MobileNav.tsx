'use client';

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import textLogo from '../../../public/assets/images/logo-text.svg'
import menuSvg from '../../../public/assets/icons/menu.svg'

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "../../../constants"
import { usePathname } from "next/navigation"

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href='/' className="flex items-center gap-2">
                <Image src={textLogo} alt="logo" width={180} height={28} />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Image src={menuSvg} alt="menu" width={32} height={32} className="cursor-pointer" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <Image src={textLogo} alt="logo" width={152} height={23} />

                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathname;

                                        return (
                                            <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                                <Link href={link.route} className='sidebar-link cursor-pointer'>
                                                    <Image src={link.icon} width={24} height={24} alt='logo' />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button>
                        <Link href='/sign-in' className='button bg-purple-gradient bg-cover'>
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav