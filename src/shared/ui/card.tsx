interface CardProps {
  children: React.ReactNode
}
export function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-xs">
      {children}
    </div>
  )
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-1 p-6">{children}</div>
}

export function Title({ children }: CardProps) {
  return <h2 className="text-2xl font-semibold text-center">{children}</h2>
}

export function Description({ children }: CardProps) {
  return <p className="text-sm text-muted-foreground text-center">{children}</p>
}
