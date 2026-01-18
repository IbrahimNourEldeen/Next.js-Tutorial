export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ border: '2px solid blue', padding: '20px' }}>
            <h2>Auth Layout for login and register only</h2>
            {children}
        </div>
    );
}