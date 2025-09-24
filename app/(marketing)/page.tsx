import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-black ont-display w-xl mx-auto">
        Diga aDeus às longas buscas para uma vaga
      </h1>
      <Button className="cursor-pointer mt-12" variant={"outline"}>
        Busque Uma Vaga
      </Button>
      <img 
        src="/pessoas.jpeg#"
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
