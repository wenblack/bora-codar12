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
        
            <form className="flex items-center gap-4" >
                <button className="bg-[#7c3aed] gap-4 items-center justify-center flex text-white  hover:opacity-70 rounded-lg py-4 px-10">
                    <IoFilter  ></IoFilter>
                    Filtrar
                </button>
                <div className="flex text-gray-700 w-full border gap-8 items-center  border-gray-300 p-4 rounded-lg">
                    <IoSearch /> 
                    <input 
                        type="text" 
                        placeholder="Procur por cards, assuntos ou responsáveis ..." 
                        className="outline-none w-full"
                        />
                </div>
            </form>
        </>
    )
}