import '../styles/globals.css'

export const metadata = {
  title: 'Tarefas+',
  description: 'Tarefas+ | Organize suas tarefas de forma fácil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
