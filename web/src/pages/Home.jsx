import { Header } from "../components/Header"
import { TextButton } from "../components/TextButton"
import { Input } from "../components/Input"
import { Section } from "../components/Section"
import { FiSearch } from "react-icons/fi"
import { FiPlus } from "react-icons/fi"

export function Home() {
  return (
    <div
      id="home"
      className="grid grid-cols-[25rem,_1fr] grid-rows-[11.09rem,_1fr] h-full"
    >
      <aside className="row-span-2 grid grid-rows-[11.09rem,_1fr_auto] bg-gray-900">
        <header className="border-b-[0.1rem] border-gray-700 flex justify-center items-center">
          <h1 className="text-[2.4rem]/[3.2rem] text-orange font-bold">
            Rocketnotes
          </h1>
        </header>

        <ul className="p-[6.4rem] flex flex-col gap-[2.4rem] text-center">
          <li>
            <TextButton title="Todos" isOrange />
          </li>
        </ul>

        <footer>
          <a
            href="#"
            className="bg-orange py-[2.8rem] flex justify-center text-[2rem]/[2.6rem] gap-[0.8rem] items-center text-gray-900"
          >
            <FiPlus className="w-[2.2rem] h-full" />
            Criar nota
          </a>
        </footer>
      </aside>

      <Header />

      <main className="p-[6.4rem] flex flex-col gap-[6.4rem]">
        <Input
          icon={FiSearch}
          id="q"
          type="search"
          placeholder="Pesquisar pelo título"
        />

        <Section title="Minhas notas"></Section>
      </main>
    </div>
  )
}