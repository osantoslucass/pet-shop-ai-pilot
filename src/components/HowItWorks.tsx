
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sistema Central no Notion",
      description: "Criamos seu sistema personalizado no Notion com agenda integrada, gestão de clientes, pets e dashboard completo de indicadores.",
      features: ["Agenda visual completa", "Fichas de clientes e pets", "Dashboard de indicadores", "Controle financeiro"]
    },
    {
      number: "2", 
      title: "Automações Inteligentes",
      description: "Configuramos automações com n8n, WhatsApp e IA para agendamentos, confirmações, lembretes e cobranças automáticas.",
      features: ["Agendamento inteligente", "Lembretes automáticos", "Cobrança automática", "Follow-up pós-atendimento"]
    },
    {
      number: "3",
      title: "Chatbot com IA",
      description: "Implementamos chatbot inteligente no WhatsApp para atendimento 24/7, agendamentos e suporte aos clientes.",
      features: ["Atendimento 24/7", "Agendamento por chatbot", "Consulta ao histórico", "Direcionamento inteligente"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🏗️ Como Funciona Nossa Solução
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em 3 etapas simples, transformamos completamente a gestão do seu pet shop
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <Card className="flex-1 w-full shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-green-50 rounded-lg p-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 lg:w-0.5 lg:h-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
