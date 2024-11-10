import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "AR Developers",
    description: "AR Developers is a cutting-edge web design and software development agency",
    openGraph: {
        title: "AR Developers",
        description: "AR Developers is a cutting-edge web design and software development agency",
        url: "https://ardevelopers.vercel.app",
        siteName: "AR Developers",
        images: [
            {
                url: "https://raw.githubusercontent.com/the-rajabraza/id_card_generator/main/socialcard.png",
                width: 1200,
                height: 630,
                alt: "AR Developers Social Card",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AR Developers",
        description: "AR Developers is a cutting-edge web design and software development agency",
        images: [
            {
                url: "https://raw.githubusercontent.com/the-rajabraza/id_card_generator/main/socialcard.png",
                alt: "AR Developers Social Card",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-inter transition-colors duration-300`}
        >
        <div className="fixed inset-0 bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 transition-colors duration-300" style={{
            backgroundImage: `radial-gradient(#cbd5e0 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
        }}></div>
        <div className="relative">
            <Header />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}