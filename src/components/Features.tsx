
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Zap, MessageCircle, CheckCircle, Bot } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Agenda Integrada",
      description: "Controle completo de banho, tosa, consultas e outros serviços com visualização diária, semanal ou mensal",
      details: ["Status em tempo real", "Integração Google Agenda", "Controle de disponibilidade"]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Gestão de Clientes e Pets",
      description: "Fichas completas dos tutores e pets com histórico detalhado de todos os serviços realizados",
      details: ["Dados cadastrais completos", "Histórico de serviços", "Alergias e observações"]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Automações Inteligentes",
      description: "Confirmações, lembretes e follow-ups automáticos via WhatsApp para melhor experiência do cliente",
      details: ["Lembretes automáticos", "Confirmações por WhatsApp", "Follow-up pós-atendimento"]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: "Chatbot com IA",
      description: "Atendimento automático 24/7 para agendamentos, informações e suporte básico aos clientes",
      details: ["Atendimento 24/7", "Agendamento automático", "Suporte inteligente"]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      title: "Dashboard Completo",
      description: "Indicadores em tempo real de atendimentos, faturamento e performance do seu pet shop",
      details: ["Relatórios em tempo real", "Análise de performance", "Controle financeiro"]
    },
    {
      icon: <Bot className="h-8 w-8 text-pink-600" />,
      title: "Reconvocação Inteligente",
      description: "Sistema que identifica clientes inativos e os convida automaticamente para retornar",
      details: ["Detecção automática", "Mensagens personalizadas", "Aumento de fidelização"]
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🔥 Diferenciais da Nossa Solução
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme seu pet shop em um negócio automatizado, organizado e muito mais profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
