import { ReactNode } from "react"

export default function VagasLayout({
   children,
 }: Readonly <{
  children: ReactNode;
 }>){
  return (
    <div className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-5xl py-10">
      {children}
      </div>
    </div>
  );
}
