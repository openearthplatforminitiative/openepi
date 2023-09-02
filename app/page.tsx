import HeroSection5 from '@/components/hero-section-5'
import FeatureCard from '@/components/feature-section-6'
import Footer3 from "@/components/footer-3"
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <div className='bg-white'>
      <HeroSection5 />
      <FeatureCard />
      <Footer3 />

      </div>
      
    </main>
  )
}
