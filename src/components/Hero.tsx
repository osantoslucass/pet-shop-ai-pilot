
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">🐶💻 Solução Completa</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                para Pet Shops
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Automatizamos a gestão do seu pet shop, organizamos agendamentos, facilitamos cobranças e melhoramos a comunicação com os tutores
            </p>
          </div>

          {/* Value proposition */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto shadow-xl border border-white/20">
            <p className="text-lg sm:text-xl text-gray-700 italic">
              "Tudo em um único sistema no Notion, integrado ao WhatsApp, IA e automações inteligentes."
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 Quero Transformar Meu Pet Shop
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToFeatures}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Saiba Como Funciona
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <ArrowDown 
              className="mx-auto h-8 w-8 text-gray-400 animate-bounce cursor-pointer hover:text-gray-600 transition-colors" 
              onClick={scrollToFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
