import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignUp() {
  return (
    <div id="SignUp" className="flex h-full">
      <aside className="flex-1 bg-[url(../assets/background.png)] bg-cover bg-center bg-no-repeat opacity-20"></aside>

      <main className="px-[16rem] flex flex-col justify-center gap-[4.8rem]">
        <div className="flex flex-col text-center">
          <h1 className="text-orange text-[4.8rem]/[6.3rem] font-bold">
            Rocket Notes
          </h1>

          <p className="text-gray-500 text-[1.4rem]/[1.8rem]">
            Aplicação para salvar e gerenciar seus links úteis.
          </p>
        </div>

        <form className="w-[34rem] flex flex-col gap-[12.4rem] items-center">
          <fieldset className="flex flex-col gap-[0.8rem] w-full">
            <legend className="text-[2.4rem]/[3.2rem] font-medium text-white mb-[4.8rem] w-full text-center">
              Crie sua conta
            </legend>

            <Input
              icon={FiUser}
              id="name"
              type="text"
              placeholder="Nome"
              required
            />
            <Input
              icon={FiMail}
              id="email"
              type="email"
              placeholder="E-mail"
              required
            />
            <Input
              icon={FiLock}
              id="password"
              type="password"
              placeholder="Senha"
              required
            />

            <Button title="Cadastrar" />
          </fieldset>

          <a href="" className="text-orange text-[1.6rem]/[2.1rem]">
            Voltar para o login
          </a>
        </form>
      </main>
    </div>
  )
}