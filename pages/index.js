import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import '../components/first.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className="onboarding onboarding--loading">
        <div className="onboarding__item onboarding__item--active item1">
          <h1>Find your dream career today</h1>
          <p>ExpressX will get you to the top of your career by express guidance
          </p>
          <a target="_blank">
            <button onClick={() => signIn()}>
              Sign Up
            </button>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg></a>
        </div>
        <div className="onboarding__item item2">
          <img src="https://assets.codepen.io/344846/RoundCube-White-Matte-2.png" />
          <h2>Skill Tester</h2>
          <p>Find out how efficient is your skill stack.</p>
          <a href="https://github.com/sehajs5/Skill-Set.git" target="_blank">Skill Tester<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg></a>
        </div>
        <div className="onboarding__item">
          <img src="https://assets.codepen.io/344846/Cone-White-Matte.png" />
          <h2>Alumni Talk</h2>
          <p>Learn from the best people in your field. Know how they did it and choose your role models. Get video lectures, live queries, personalized sessions and much more!</p>
          <a href="./alumina" target="_blank">Alumni Talks<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg></a>
        </div>
        <div className="onboarding__item">
          <img src="https://assets.codepen.io/344846/Cone-White-Matte.png" />
          <h2>Mentorship</h2>
          <p>Having a good mentor is crucial for your success. Get awesome mentorship today!  </p>
          <a href="./mentor" target="_blank">Find a Mentor<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg></a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
