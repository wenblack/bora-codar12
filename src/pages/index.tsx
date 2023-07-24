import { Inter } from 'next/font/google'
import { SideBar } from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      id='app'  
      className={`flex min-h-screen  ${inter.className}`}
    >
      <aside >
        <SideBar></SideBar>
      </aside>
      <main className='max-h-screen ml-8 shadow-black shadow-sm mt-4 rounded-tl-[32px] bg-white w-full '>

      </main>
    </div>
  )
}
