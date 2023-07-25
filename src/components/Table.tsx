import editIcon from "@/assets/pencil.svg"
import Image from "next/image"
import {IoFilter, IoSearch} from 'react-icons/io5'
import { Task } from "./Task"

export function Table (){
    return(
        <>
            <section className="flex justify-between  py-3 items-center ">
                <h1 className="flex gap-3 font-bold text-slate-700 text-5xl">Meu KanBan <Image src={editIcon} alt="" /></h1>
                <img className="rounded-full" src="https://github.com/wenblack.png" width={64} height={64} alt="avatar" />
            </section>
        
            <form className="flex mt-8 items-center gap-4 text-3xl" >
                <button className="bg-[#7c3aed] hidden gap-4 items-center justify-center md:flex lg:flex text-white  hover:opacity-70 rounded-lg py-5 px-12">
                    <IoFilter  ></IoFilter>
                    Filtrar
                </button>
                <div className="flex text-3xl shadow-lg text-gray-700 w-full border gap-4 items-center  border-gray-300 p-5 rounded-lg">
                    <IoSearch /> 
                    <input 
                        type="text" 
                        placeholder="Busque por cards, assuntos ou responsáveis ..." 
                        className="outline-none w-full"
                        />
                    <button className="lg:hidden md:hidden" type="button"><IoFilter/></button>
                </div>
            </form>


            <section className="kanban grid mt-32 grid-cols-3 space-x-8">
            <div className="todo grid ">
              <h2 className="font-bold text-3xl mb-8">A fazer</h2>
              <div className="cards">
                <Task 
                    title="#boraCodar um Kanban 🧑🏾‍💻"
                    content="Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban."
                    tagOne="adas"
                    tagTwo="asdas"
                />
                <div className="card">
                  <h3>Manter a ofensiva 🔥</h3>
                  <p>
                    Manter minha atividade na plataforma da Rocketseat para não
                    perder a ofensiva
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="doing   ">
              <h2 className="font-bold text-3xl mb-8">Fazendo</h2>
              <div className="cards">
                <div className="card">
                  <h3>Conferir o novo desafio 🚀</h3>
                  <p>
                    Conferir o novo projeto do #boraCodar para fazê-lo da melhor
                    maneira possível
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                    <span>desafio</span>
                  </div>
                </div>
              </div>
        </div>
            <div className="done ">
              <h2 className="font-bold text-3xl mb-8">Feito</h2>
              <div className="cards">
                <div className="card">
                  <h3>#boraCodar uma página de login 🧑‍💻</h3>
                  <p>
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir uma página de login.
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                    <span>desafio</span>
                  </div>
                </div>
              </div>
        </div>
          </section>
        </>
    )
}