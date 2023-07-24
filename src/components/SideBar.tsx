import Image from "next/image"
import iconApp from '@/assets/logo.svg'
import boardIcon from '@/assets/boards.svg'
import peoplesICon from '@/assets/pleoples.svg'
import orderIcon from '@/assets/order.svg'
import settingsIcon from '@/assets/settings.svg'

export function SideBar () {
    return(
        <nav className="text-white  p-14 ">
            <Image src={iconApp} alt="Logo do site" height={56} width={50} className="logo" />
            
            <ul className=" mt-[6rem] grid gap-[3.6rem] max-w-[11.5rem]">
                <li>
                    <a href="#" className=" flex items-center gap-[1.6rem] hover:opacity-70 font-bold">
                        <Image src={boardIcon} alt="Image of boards" height={20} width={20} className="logo" />
                        Boards
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white  font-medium">
                        <Image src={peoplesICon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        Equipes
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <Image src={orderIcon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        Relatórios
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <Image src={settingsIcon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        Ajustes
                    </a>
                </li>
            </ul>
        </nav>
    )
}