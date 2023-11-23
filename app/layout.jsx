import "./global.scss";
import ServerNav from "./server-nav";

export const metadata = {
   title: "C.O Portfolio",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <head>
            <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         </head>
         <body className="w-full">
            <ServerNav>{children}</ServerNav>
         </body>
      </html>
   );
}
