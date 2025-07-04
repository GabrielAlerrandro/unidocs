import { Link } from "react-router"
import { Button } from "../shared/ui/button"

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! Page not found
        </p>
        <Link to="/">
          <Button variant="link" size="sm">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
