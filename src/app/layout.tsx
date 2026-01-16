export const metadata = {
  title: 'Routing Demo',
  description: 'A demo application to showcase routing in Next.js',
};
    
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}