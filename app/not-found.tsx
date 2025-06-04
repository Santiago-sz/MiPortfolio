import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl mb-8">Página no encontrada</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        La página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <Button asChild className="bg-green-400 text-black hover:bg-green-300">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>
    </div>
  )
}
