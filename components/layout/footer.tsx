import { Github, Instagram, Mail } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Logo e descrição */}
        <div className="max-w-sm">
          <Logo bg="dark" />
          <p className="mt-2 text-sm font-extralight">
            Teste de implementação em Next.js. Com vários sistemas a serem
            desenvolvidos, principalmente o de desconto de cheques.
          </p>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <Instagram className="cursor-pointer transition-colors hover:text-blue-400" />
          <Github className="cursor-pointer transition-colors hover:text-blue-400" />
          <Mail className="cursor-pointer transition-colors hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
}
