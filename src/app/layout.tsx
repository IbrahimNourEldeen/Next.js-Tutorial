export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: 'lightblue', padding: '10px', textAlign: 'center'}}>
          <h1>Navigation bar</h1>
        </header> 
        {children} 
        <footer style={{backgroundColor: 'lightgray', marginTop: '20px', padding: '10px', textAlign: 'center'}}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}