import { cn } from "@/lib/utils"
import { buttonVariants } from "../components/ui/button"

export default function Notfound() {
    return(
        <main className="mx-auto text-center py-10 max-w-5xl">
            <h1 className="text-4xl font-display font-bold text-gray-600">
                Nada encontrado aqui...
            </h1>
            <img className="mx-auto w-xs mt-10" 
                src="/astro.png" 
                alt="Imagem de um barco afundando" />
            <p className="text-3xl font-light text-gray-500">Não foi possível encontrar a página solicitada.</p>
            <a
                href="/" 
                className={cn(
                    buttonVariants({ variant: "default"}),
                    "mt-6",
                )}
            >
            Voltar à Home
            </a>

        </main>
    )
}