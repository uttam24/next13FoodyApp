import './../styles/globals.css'
import Header from '../components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Header/>
      {children}</body>
    </html>
  )
}
