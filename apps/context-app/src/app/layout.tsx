import { TodoProvider } from '@/contexts/TodoContext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}