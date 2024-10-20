"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        {
            label: "Dashboard",
            href: "/",
        },
        {
            label: "Issues",
            href: "/issues",
        },
    ];

    return (
        <nav className="flex space-x-6 border-b mb-5 h-14 px-5 items-center justify-between">
            <Link href="/">
                <AiFillBug />
            </Link>

            <ul className="flex space-x-6">
                {links.map((link) => (
                    <li
                        key={link.href}
                        className={classNames({
                            "text-gray-900": link.href === currentPath,
                            "text-gray-500": link.href !== currentPath,
                            "hover:text-gray-800 transition-colors": true,
                        })}
                    >
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
