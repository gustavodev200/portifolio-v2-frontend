import { ClientSideAppProvider } from "@/components/ClientSideAppProvider";
import localFont from "next/font/local";
import "@/styles/GlobalStyles.css";
import { ClientComponentLoader } from "@/components/ClientComponentLoader";
import { NavBar } from "@/components/NavBar";

const poppinsFont = localFont({
  src: "../../public/fonts/Poppins-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Gustavo Lage",
  description:
    "Trazendo minha paixão à vida através da criatividade. Bem-vindo ao meu portfólio pessoal, onde compartilho minha jornada como Desenvolvedor Frontend. Explore meu trabalho e descubra minha abordagem única com: React.js, Next.js, Typescript, Styled-Components, Node.js e Express.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={poppinsFont.className}>
      <body>
        <ClientComponentLoader />
        <ClientSideAppProvider>{children}</ClientSideAppProvider>
      </body>
    </html>
  );
}
