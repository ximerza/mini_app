"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `font-medium transition duration-200 pb-1 ${
      pathname === path
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          MiApp
        </h1>

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={linkClass("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/usuarios" className={linkClass("/usuarios")}>
              Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}