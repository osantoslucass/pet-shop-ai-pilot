
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🐶💻 Pet Shop AI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Transformamos pet shops em negócios automatizados, organizados e muito mais profissionais através de IA e automações inteligentes.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📱</span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📧</span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🌐</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                🔥 Funcionalidades
              </a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                🏗️ Como Funciona
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                💰 Preços
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                📞 Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📱</span>
                <span>WhatsApp: (11) 99999-9999</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📧</span>
                <span>contato@petshopai.com.br</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">🕒</span>
                <span>Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pet Shop AI. Todos os direitos reservados. 
            <span className="mx-2">|</span>
            Transformando pet shops com tecnologia e amor pelos pets 🐾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
