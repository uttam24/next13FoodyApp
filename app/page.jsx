import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div className="h-screen w-full homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="my-6 text-3xl">Explore food form around the world</h1>
          <Link  href="/types" className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-2 cursor-pointer hover:bg-blue-500 hover:text-white">List of Cuisines</Link>
      </div>
      </div>
  )
}
