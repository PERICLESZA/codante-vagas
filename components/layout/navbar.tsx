"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Marca que estamos no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full relative flex items-center justify-between max-w-5xl px-4 py-6 mx-auto">
      <Logo className="w-100" />

      {/* Links desktop */}
      <ul className="hidden md:flex items-center gap-6">
        <a href="/" className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </a>
        <a href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </a>
        <a href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </a>
        <a
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar Vagas
        </a>
      </ul>

      {/* Botão hamburguer */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Menu mobile só renderizado no cliente */}
      {mounted && (
        <ul
          className={cn(
            "md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 transition-transform duration-300",
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100%] opacity-0 pointer-events-none"
          )}
        >
          <a
            href="/"
            className="text-black font-medium py-2 px-4 hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="/sobre"
            className="text-black font-medium py-2 px-4 hover:text-blue-600"
          >
            Sobre
          </a>
          <a
            href="/vagas"
            className="text-black font-medium py-2 px-4 hover:text-blue-600"
          >
            Vagas
          </a>
          <a
            href="/vagas/cadastro"
            className="text-black font-medium py-2 px-4 hover:text-blue-600"
          >
            Cadastrar Vagas
          </a>
        </ul>
      )}
    </nav>
  );
}
