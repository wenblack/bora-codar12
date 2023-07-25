import { Inter } from 'next/font/google'
import { Container } from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      id='app'  
      className={`flex min-h-screen  bg-[#7c3aed] ${inter.className}`}
    >
      <main className='min-h-screen ml-0 md:ml-8 pt-16 items-center px-[5vw]  shadow-black shadow-sm mt-4 rounded-tl-[32px] bg-white w-full '>
        <Container></Container>
      </main>
    </div>
  )
}
