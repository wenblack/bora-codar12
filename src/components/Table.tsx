import editIcon from "@/assets/pencil.svg"
import Image from "next/image"
import {IoFilter, IoSearch} from 'react-icons/io5'

export function Table (){
    return(
        <>
            <section className="flex justify-between  py-3 items-center ">
                <h1 className="flex gap-3 font-bold text-slate-700 text-5xl">Meu KanBan <Image src={editIcon} alt="" /></h1>
                <img className="rounded-full" src="https://github.com/wenblack.png" width={64} height={64} alt="avatar" />
            </section>
        
            <form className="flex mt-8 items-center gap-4" >
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
        </>
    )
}