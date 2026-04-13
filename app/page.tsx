import Image from "next/image";

// ═══════════════════════════════════════════════════════════════════════
// WAC APOIO CONTABIL — Landing Page
// wacapoio.com.br
// ═══════════════════════════════════════════════════════════════════════

const SERVICOS = [
  { icon: '📊', title: 'Contabilidade', desc: 'Escrituracao, balancetes, demonstracoes contabeis e obrigacoes acessorias com precisao e agilidade.' },
  { icon: '📋', title: 'Fiscal e Tributario', desc: 'Apuracao de impostos, planejamento tributario e compliance fiscal para Simples, Presumido e Real.' },
  { icon: '👥', title: 'Departamento Pessoal', desc: 'Folha de pagamento, admissoes, rescisoes, eSocial e todas as rotinas trabalhistas.' },
  { icon: '📈', title: 'Consultoria', desc: 'Analise financeira, indicadores de gestao e apoio estrategico na tomada de decisoes.' },
];

const LUCA_FEATURES = [
  { icon: '🎯', title: 'Painel em Tempo Real', desc: 'Acompanhe o status de cada empresa — mes a mes, tarefa por tarefa. Tudo transparente.' },
  { icon: '📁', title: 'Documentos Digitais', desc: 'LUCA DOCS: toda a documentacao contabil, fiscal e trabalhista organizada e acessivel.' },
  { icon: '🔄', title: 'Portal do Contador', desc: 'Cada carteira parceira tem acesso exclusivo para acompanhar entregas e processos.' },
  { icon: '📱', title: 'Acesso Mobile', desc: 'PWA responsivo — acesse do celular como app. Funciona em qualquer dispositivo.' },
  { icon: '⚡', title: 'Automacoes com IA', desc: 'Importacao de extratos, classificacao contabil e processos otimizados com inteligencia artificial.' },
  { icon: '🔒', title: 'Seguranca Total', desc: 'Dados criptografados, controle de acessos por niveis e backup continuo em nuvem.' },
];

const NUMEROS = [
  { valor: '20+', label: 'Carteiras ativas' },
  { valor: '1.500+', label: 'Empresas gerenciadas' },
  { valor: '100%', label: 'Digital' },
  { valor: '24/7', label: 'Acesso ao sistema' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* ════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0c1a3a 40%, #1a3355 100%)' }}>
        {/* Particulas / nodes decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Linhas de circuito */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h40M60 50h40M50 0v40M50 60v40" stroke="white" strokeWidth="0.5" fill="none"/>
              <circle cx="50" cy="50" r="3" fill="white"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
          {/* Dots brilhantes */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-blue-400"
              style={{
                left: `${(i * 19 + 5) % 100}%`, top: `${(i * 27 + 3) % 100}%`,
                width: `${1.5 + (i % 3)}px`, height: `${1.5 + (i % 3)}px`,
                opacity: 0.15 + (i % 4) * 0.08,
              }} />
          ))}
          {/* Glow gradients */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)' }} />
        </div>

        {/* Nav */}
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div />
          <div className="flex items-center gap-6">
            <a href="#servicos" className="text-white/50 hover:text-white text-sm transition-colors hidden md:block">Servicos</a>
            <a href="#luca" className="text-white/50 hover:text-white text-sm transition-colors hidden md:block">LUCA</a>
            <a href="#contato" className="text-white/50 hover:text-white text-sm transition-colors hidden md:block">Contato</a>
            <a href="https://luca.wacapoio.com.br/cliente/login" className="text-white/60 hover:text-white text-sm transition-colors">Portal</a>
            <a href="https://luca.wacapoio.com.br/login"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2 rounded-xl text-sm font-semibold transition-all">
              Acessar LUCA
            </a>
          </div>
        </nav>

        {/* Logo central + conteudo */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-28 md:pt-16 md:pb-36 text-center">
          {/* Logo WAC */}
          <div className="flex justify-center mb-10">
            <Image src="/logo-wac.png" alt="WAC Apoio Contabil" width={320} height={180}
              className="drop-shadow-2xl" priority />
          </div>

          <p className="text-blue-300/70 text-sm font-medium uppercase tracking-[0.3em] mb-6">Apoio Contabil</p>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Contabilidade com{' '}
            <span style={{ background: 'linear-gradient(90deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              tecnologia
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            Unimos expertise contabil ao LUCA — nosso sistema proprio que oferece transparencia total e controle em tempo real para nossos clientes e parceiros.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/5547992472740" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-green-500/20 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Fale conosco
            </a>
            <a href="#luca"
              className="bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-all border border-white/10">
              Conhecer o LUCA →
            </a>
          </div>
        </div>

        {/* Numeros */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NUMEROS.map((n, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center">
                <p className="text-3xl md:text-4xl font-black text-white">{n.valor}</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SERVICOS                                                       */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 px-6" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">O que fazemos</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">Solucoes completas</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Atendemos empresas de todos os portes e regimes tributarios com excelencia e tecnologia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICOS.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* LUCA                                                           */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="luca" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-blue-600 font-bold text-sm">LUCA</span>
                <span className="text-blue-400 text-xs">Sistema proprio</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Seu escritorio na
                <span className="block text-blue-600">palma da mao</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                O LUCA e o sistema que desenvolvemos para dar visibilidade total aos nossos clientes. Cada carteira parceira acompanha em tempo real o andamento dos servicos — sem ligar, sem esperar.
              </p>
              <div className="space-y-5">
                {LUCA_FEATURES.slice(0, 3).map((d, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5 shrink-0">{d.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{d.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock do sistema LUCA */}
            <div className="bg-[#0c1a3a] rounded-3xl p-7 shadow-2xl shadow-blue-900/20">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                <span className="text-white/20 text-xs ml-3 font-mono">luca.wacapoio.com.br</span>
              </div>

              {/* Tabs */}
              <div className="bg-white/5 rounded-xl p-5 mb-4">
                <div className="flex gap-2 mb-4">
                  {['Painel Anual', 'Pendencias', 'Particularidades', 'Extratos'].map((t, i) => (
                    <span key={i} className={`text-[11px] px-3 py-1.5 rounded-lg font-medium ${i === 0 ? 'bg-white/10 text-white' : 'text-white/25'}`}>{t}</span>
                  ))}
                </div>
                {/* Grid simulando painel */}
                <div className="grid grid-cols-12 gap-1.5">
                  {Array.from({ length: 72 }).map((_, i) => {
                    const colors = ['bg-green-500/50', 'bg-yellow-500/50', 'bg-purple-500/50', 'bg-pink-500/40', 'bg-white/[0.03]'];
                    const c = i % 7 === 0 ? 0 : i % 5 === 0 ? 1 : i % 11 === 0 ? 2 : i % 13 === 0 ? 3 : 4;
                    return <div key={i} className={`h-4 rounded ${colors[c]}`} />;
                  })}
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Zerado', val: '45', color: 'text-green-400' },
                  { label: 'Lancado', val: '28', color: 'text-yellow-400' },
                  { label: 'Fazendo', val: '12', color: 'text-purple-400' },
                  { label: 'Pendente', val: '3', color: 'text-pink-400' },
                ].map((k, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{k.label}</p>
                    <p className={`font-bold text-lg ${k.color}`}>{k.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* DIFERENCIAIS LUCA                                              */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Diferenciais</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">Tecnologia que faz a diferenca</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LUCA_FEATURES.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl mb-4 block">{d.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* CTA                                                            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="contato" style={{ background: 'linear-gradient(160deg, #0c1a3a 0%, #1a3355 100%)' }} className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-blue-300/50 text-sm font-medium uppercase tracking-[0.3em] mb-4">Vamos conversar</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Pronto para modernizar sua contabilidade?
          </h2>
          <p className="text-white/40 mb-10 text-lg max-w-xl mx-auto">
            Entre em contato e descubra como a WAC + LUCA podem dar transparencia e agilidade ao seu negocio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/5547992472740" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/20 flex items-center gap-2 text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="mailto:contato@wacapoio.com.br"
              className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10 text-lg">
              contato@wacapoio.com.br
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                         */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#060d1f] text-white/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo-wac.png" alt="WAC" width={48} height={28} className="opacity-50" />
              <span className="text-white/40 font-semibold text-sm">WAC Apoio Contabil</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#servicos" className="hover:text-white transition-colors">Servicos</a>
              <a href="#luca" className="hover:text-white transition-colors">LUCA</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              <a href="https://luca.wacapoio.com.br/login" className="hover:text-white transition-colors">Sistema</a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs">&copy; 2026 WAC Apoio Contabil. Todos os direitos reservados.</p>
            <p className="text-xs">Powered by <span className="text-blue-400/60 font-semibold">LUCA</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
