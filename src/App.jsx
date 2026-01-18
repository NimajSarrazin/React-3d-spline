import Header from './components/Header'
import Hero from './components/Hero'
export default function App() {
  return (
    <main>
      {/* Grandient image */}
      <img src="/gradient.png" alt="Gradient" 
      className="absolute top-0 right-0 opacity-100 -z-10" />
      {/* blur effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] 
      shadow-[0_0_900px_20px_#e99B63] -rotate-[30deg] -z-10"></div>
      <Header />
      <Hero />
    </main>
  )
}