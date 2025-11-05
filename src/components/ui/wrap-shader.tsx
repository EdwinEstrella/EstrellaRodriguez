import { Warp } from "@paper-design/shaders-react"
import { ArrowLeft } from "lucide-react"

interface WarpShaderHeroProps {
  onBack?: () => void;
  children?: React.ReactNode;
}

export default function WarpShaderHero({ onBack, children }: WarpShaderHeroProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(270, 70%, 15%)", "hsl(280, 65%, 25%)", "hsl(290, 60%, 35%)", "hsl(300, 55%, 45%)"]}
        />
      </div>

      {/* Botón de volver atrás */}
      {onBack && (
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </button>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        {children || (
          <div className="max-w-4xl w-full text-center space-y-8">
            <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance">
              Acceso al Portal
            </h1>

            <p className="text-white/90 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Ingresa a tu cuenta para ver tu progreso académico y acceder a todas las herramientas de aprendizaje.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}