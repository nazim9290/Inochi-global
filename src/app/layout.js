// import { Inter } from 'next/font/google'
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { UserProvider } from '../context/index';
import "react-toastify/dist/ReactToastify.css";
import { VideoProvider } from '../context/VideoContext';

// const inter = Inter({ subsets: ['latin'] })
import 'popper.js';
import 'jquery';
import Head from 'next/head';
export const metadata = {
  title: "Inochi Global Education Institute",
  description:
    "Inochi Global Education Institute guides students for higher study in Japan, offering expert Japanese language training and COE/visa application support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <div>
      <UserProvider>
<VideoProvider>
      {children}
</VideoProvider>
      </UserProvider>

      </div>
      </body>
    </html>
  )
}
