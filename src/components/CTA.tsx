
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            🚀 Próximo Passo
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl sm:text-2xl text-white font-medium italic leading-relaxed">
              "Queremos transformar seu pet shop em um negócio automatizado, organizado e muito mais profissional. Bora começar?"
            </p>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              💬 Quero Falar com um Especialista
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
              <div className="flex items-center">
                <span className="text-2xl mr-2">✅</span>
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span>Implementação rápida</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                <span>Resultados garantidos</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/90 text-lg">
              <strong>Mais de 100 pet shops</strong> já transformaram seus negócios com nossa solução
            </p>
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
              <span className="text-white ml-2 text-lg font-semibold">4.9/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
