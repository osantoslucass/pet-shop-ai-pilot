
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            💰 Investimento na Sua Transformação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos transparentes para revolucionar a gestão do seu pet shop
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Setup Inicial */}
          <Card className="relative border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                🔹 SETUP INICIAL
              </span>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                R$ 4.000
              </CardTitle>
              <p className="text-gray-600">Pagamento único</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implantação do sistema personalizado no Notion</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Configuração de automações, bots e templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Criação dos fluxos de mensagens e agendamentos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Treinamento completo da equipe</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mensalidade */}
          <Card className="relative border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                🔸 MENSALIDADE
              </span>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                R$ 400
              </CardTitle>
              <p className="text-gray-600">Por mês</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Manutenção das automações</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Suporte técnico e ajustes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hospedagem dos bots e integrações</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pequenas melhorias no sistema</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 O que você ganha com nossa solução:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <p className="font-semibold text-gray-800">IA Inteligente</p>
              <p className="text-sm text-gray-600">Automação completa</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔗</div>
              <p className="font-semibold text-gray-800">100% Customizado</p>
              <p className="text-sm text-gray-600">Sistema no Notion</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-semibold text-gray-800">Integração Total</p>
              <p className="text-sm text-gray-600">WhatsApp, e-mail, pagamentos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💼</div>
              <p className="font-semibold text-gray-800">Experiência Premium</p>
              <p className="text-sm text-gray-600">Para tutores e pets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
