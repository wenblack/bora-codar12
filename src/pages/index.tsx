import { Inter } from 'next/font/google'
import { SideBar } from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen  ${inter.className}`}
    >
      <SideBar></SideBar>
    </main>
  )
}
