import About from '@/components/About'
import Github from '@/components/GithubCalendar'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Image from 'next/image'
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile/>
      <About/>
      <Github/>
    </>
  )
}
