import { Radley } from 'next/font/google'
import Navbar from '../components/client/Navbar'
import './globals.css'

const radley = Radley( {
  weight: '400',
  subsets: ['latin']
} )

export const metadata = {
  title: 'Borhan Uddin - Full Stack Web Developer',
  description: 'Enjoying web development because its a combination of creativity and problem solving.',
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className={radley.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
