import "./globals.css";

export const metadata = {
  title: "Books Mart",
  description: "An E-commerce web app for exploring and buying books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
