'use client';
import Image from "next/image";
import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════
// WAC APOIO CONTABIL — Landing Page
// wacapoio.com.br
// ═══════════════════════════════════════════════════════════════════════

const SERVICOS = [
  { icon: '🏢', title: 'Operação Contábil Completa', desc: 'Assumimos toda a rotina contábil do seu escritório — classificações, conciliações, balancetes e demonstrações — como uma extensão da sua equipe.' },
  { icon: '📋', title: 'Operação Fiscal Integrada', desc: 'Apuração de impostos, escrituração fiscal, obrigações acessórias e compliance tributário para todos os regimes, com processo padronizado.' },
  { icon: '💲', title: 'Menos Custo, Mais Volume', desc: 'Reduza custos fixos com equipe interna. Entregamos mais volume com a mesma qualidade — sua operação escala sem aumentar estrutura.' },
  { icon: '🔄', title: 'Metodologia WAC', desc: 'Processos internos únicos, sistema LUCA integrado e controle em tempo real. Seu escritório ganha escala sem perder qualidade.' },
];

const LUCA_ACESSOS = [
  { icon: '⚙️', title: 'Área do Operador', desc: 'O mesmo painel que a WAC usa no dia a dia. Carteiras, painel anual, evoluções, pendências, extratos, particularidades e documentos — tudo para executar com velocidade.', tag: 'Execução' },
  { icon: '📊', title: 'Área do Contador', desc: 'Seu cliente acompanha cada empresa em tempo real. Status mês a mês, evoluções, pendências e documentos — sem precisar ligar ou esperar relatório.', tag: 'Transparência' },
  { icon: '💼', title: 'Área Administrativa', desc: 'CRM com funil de vendas, controle financeiro com DRE, simulador de orçamentos, custos rateados por carteira e margem por cliente. Gestão completa do escritório.', tag: 'Gestão' },
];

const LUCA_FUNCOES = [
  { icon: '🎯', title: 'Painel Anual', desc: 'Visão completa de todas as empresas por mês. Pinte o status, acompanhe a evolução e identifique gargalos de um olhar.' },
  { icon: '📝', title: 'Evoluções e Pendências', desc: 'Registre cada ação, cada pendência. Histórico completo por empresa com filtro por período e responsável.' },
  { icon: '📁', title: 'LUCA DOCS', desc: 'Biblioteca digital organizada por setor — contábil, fiscal, folha e patrimônio. Cada empresa com suas pastas padronizadas.' },
  { icon: '🔄', title: 'Operação e ECD', desc: 'Controle de processos operacionais e Escrituração Contábil Digital com checklist por empresa e etapa.' },
  { icon: '⚡', title: 'Automações com IA', desc: 'Importação automática de extratos bancários, classificação contábil inteligente e integração com sistemas de domínio.' },
  { icon: '🧮', title: 'Orçamentos e CRM', desc: 'Simule honorários para novos clientes, gerencie leads no funil de vendas e envie propostas com link de preenchimento.' },
];

const NUMEROS = [
  { valor: '1.500+', label: 'Empresas em operação' },
  { valor: '100%', label: 'Setores em dia e padronizados' },
  { valor: '24/7', label: 'Controle em tempo real via LUCA' },
  { valor: '✓', label: 'Equipe consolidada + metodologia única' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative" style={{ background: '#1a3a8f' }}>
      {/* Estrelas e constelações — fundo de todo o site */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ height: '100%' }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Estrelas */}
          {[[1,5],[3,15],[5,28],[7,42],[9,55],[11,68],[13,82],[15,95],
            [18,8],[20,22],[22,38],[24,52],[26,65],[28,78],[30,92],
            [33,12],[35,30],[37,45],[39,58],[41,72],[43,85],
            [46,6],[48,20],[50,35],[52,50],[54,62],[56,75],[58,88],
            [61,10],[63,25],[65,40],[67,55],[69,70],[71,82],[73,95],
            [76,8],[78,22],[80,38],[82,52],[84,65],[86,78],[88,92],
            [91,15],[93,30],[95,45],[97,60],[99,75],
            [2,48],[8,72],[14,35],[19,88],[25,18],[31,62],[36,8],
            [42,52],[47,78],[53,28],[59,95],[64,15],[70,48],[75,68],
            [81,25],[87,58],[92,42],[98,85]].map(([x,y], i) => (
            <circle key={`gs${i}`} cx={`${x}%`} cy={`${y}%`} r={0.8 + (i % 4) * 0.6} fill="white" opacity={0.15 + (i % 5) * 0.06} />
          ))}
          {/* Constelações */}
          {[[1,5,3,15],[3,15,5,28],[5,28,9,55],[13,82,15,95],[18,8,20,22],[20,22,24,52],
            [33,12,35,30],[35,30,39,58],[46,6,48,20],[48,20,52,50],
            [61,10,63,25],[63,25,67,55],[76,8,78,22],[78,22,82,52],
            [91,15,93,30],[93,30,97,60],
            [2,48,8,72],[14,35,19,88],[25,18,31,62],
            [42,52,47,78],[53,28,59,95],[64,15,70,48],
            [75,68,81,25],[87,58,92,42]].map(([x1,y1,x2,y2], i) => (
            <line key={`gl${i}`} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="white" strokeWidth="0.5" opacity="0.08" />
          ))}
        </svg>
      </div>
      {/* ════════════════════════════════════════════════════════════════ */}
      {/* NAVBAR — barra horizontal fixa, estilo LUCA                    */}
      {/* Logo esquerda, links centro, botao direita, 120px altura       */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <nav className="relative" style={{ background: '#111d37', height: '180px', zIndex: 50 }}>
        {/* Estrelas e constelacoes — igual LUCA */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[[2,30],[5,70],[8,45],[11,20],[14,80],[17,55],[20,15],[22,85],[26,40],[29,65],[32,25],[35,90],[38,50],[41,10],[44,75],[47,35],[50,60],[53,20],[56,85],[59,45],[62,70],[65,15],[67,55],[70,80],[73,30],[75,65],[78,40],[81,85],[83,20],[86,60],[88,35],[90,75],[92,50],[94,15],[96,70],[98,40]].map(([x,y], i) => (
            <circle key={`s${i}`} cx={`${x}%`} cy={`${y}%`} r={0.8 + (i % 3) * 0.5} fill="white" opacity={0.12 + (i % 5) * 0.06} />
          ))}
          {[[2,30,5,70],[5,70,8,45],[8,45,14,80],[26,40,32,25],[32,25,38,50],[53,20,59,45],[62,70,67,55],[73,30,78,40],[83,20,88,35],[90,75,96,70]].map(([x1,y1,x2,y2], i) => (
            <line key={`l${i}`} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="white" strokeWidth="0.5" opacity="0.05" />
          ))}
        </svg>

        {/* Logo integrada no centro da navbar — mask forte para fundir 100% */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image src="/logo-wac.jpg" alt="" width={280} height={280} priority
            style={{ mask: 'radial-gradient(circle at center, black 20%, transparent 65%)', WebkitMask: 'radial-gradient(circle at center, black 20%, transparent 65%)' }} />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center justify-center gap-14">

          {/* Links esquerda */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#servicos" className="text-white/70 hover:text-white text-base font-semibold transition-colors">Serviços</a>
            <a href="#luca" className="text-white/70 hover:text-white text-base font-semibold transition-colors">LUCA</a>
            <a href="#contato" className="text-white/70 hover:text-white text-base font-semibold transition-colors">Contato</a>
          </div>

          {/* Espaço para logo no centro */}
          <div className="w-56" />

          {/* Links direita */}
          <div className="hidden md:flex items-center gap-10">
            <div className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-base font-bold transition-all flex items-center gap-2">
                Acessar LUCA
                <svg className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full pt-1 w-56 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <a href="https://luca.wacapoio.com.br/cliente/login" target="_blank" rel="noopener noreferrer"
                    className="block px-5 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors border-b border-gray-50">
                    Área do Contador
                  </a>
                  <a href="https://luca.wacapoio.com.br/login" target="_blank" rel="noopener noreferrer"
                    className="block px-5 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors border-b border-gray-50">
                    Área do Operador
                  </a>
                  <a href="https://luca.wacapoio.com.br/administrativo/login" target="_blank" rel="noopener noreferrer"
                    className="block px-5 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors">
                    Área Administrativa
                  </a>
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* QUARTEIRIZACAO — primeira coisa que o visitante ve              */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="servicos" className="relative overflow-hidden" style={{ background: '#111d37' }}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8 md:pt-20 md:pb-10 text-center">
          <p className="text-blue-300/60 text-sm font-bold uppercase tracking-[0.2em] mb-4">Quarteirização contábil e fiscal</p>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
            Referência no apoio para contabilidades.
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-semibold mb-4 italic">
            Não somos uma contabilidade, apoiamos contabilidades.
          </p>
          <p className="text-white/40 max-w-2xl mx-auto text-lg mb-8">
            Apoio para a execução contábil e fiscal do seu escritório — 100% alinhada com sua forma de trabalhar, com metodologia própria e sistema integrado.
          </p>
          <a href="https://wa.me/message/7VFXJWAEUBGOE1" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-green-500/20 mb-10">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICOS.map((s, i) => (
              <div key={i} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.10] hover:bg-white/[0.12] hover:border-white/25 hover:-translate-y-1 transition-all duration-300">
                <span className="text-5xl mb-5 block">{s.icon}</span>
                <h3 className="font-bold text-white text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NUMEROS.map((n, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
                <p className="text-3xl md:text-4xl font-black text-white">{n.valor}</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* LUCA — bloco unico                                             */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <div id="luca" className="py-16 px-6 relative z-10" style={{ background: '#1a3a8f' }}>
        <div className="max-w-6xl mx-auto">
          {/* Titulo */}
          <div className="text-center mb-14">
            <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">Conheça o LUCA</p>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              Seu escritório, nossa tecnologia.
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              O LUCA é o sistema próprio da WAC — feito por quem vive a rotina contábil todos os dias. Controle total, transparência para o cliente e gestão inteligente do escritório.
            </p>
          </div>

          {/* ── ÁREA DO OPERADOR ─────────────────────────────────── */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">Área do Operador</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-4 mb-4">Controle pleno de cada carteira</h3>
                <p className="text-white/40 leading-relaxed mb-6">O mesmo painel que a WAC usa no dia a dia. Todas as funcionalidades para operar com velocidade e precisão.</p>
                <div className="space-y-3">
                  {[
                    { icon: '🎯', text: 'Painel Anual — status de cada empresa, mês a mês, com cores e filtros' },
                    { icon: '📝', text: 'Evoluções — registro de cada ação com histórico completo' },
                    { icon: '⚠️', text: 'Pendências — controle do que falta, com prazo e responsável' },
                    { icon: '📑', text: 'Extratos — importação automática de extratos bancários (PDF)' },
                    { icon: '💬', text: 'Particularidades — anotações por empresa com anexos' },
                    { icon: '👤', text: 'Contatos — sócios, financeiro, responsáveis de cada empresa' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg shrink-0">{f.icon}</span>
                      <p className="text-sm text-white/50">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mock visual — Painel Anual */}
              <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.08]">
                <div className="flex gap-2 mb-3">
                  {['Painel Anual', 'Evoluções', 'Pendências', 'Extratos', 'Contato'].map((t, i) => (
                    <span key={i} className={`text-[10px] px-2.5 py-1 rounded-lg ${i === 0 ? 'bg-white/10 text-white font-medium' : 'text-white/20'}`}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-2 mb-3">
                  {['2025', '2026'].map((a, i) => (
                    <span key={i} className={`text-[10px] px-3 py-1 rounded-lg font-bold ${i === 1 ? 'bg-white/15 text-white' : 'text-white/30'}`}>{a}</span>
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 96 }).map((_, i) => {
                    const c = ['bg-green-500/60','bg-yellow-500/60','bg-purple-500/60','bg-pink-500/50','bg-white/[0.04]'];
                    return <div key={i} className={`h-3.5 rounded-sm ${c[i%7===0?0:i%5===0?1:i%9===0?2:i%13===0?3:4]}`} />;
                  })}
                </div>
                <div className="grid grid-cols-5 gap-2 mt-3">
                  {[{l:'Zerado',v:'45',c:'text-green-400'},{l:'Lançado',v:'28',c:'text-yellow-400'},{l:'Fazendo',v:'12',c:'text-purple-400'},{l:'S/ Zeram.',v:'3',c:'text-pink-400'},{l:'Sem status',v:'8',c:'text-gray-400'}].map((k,i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
                      <p className="text-white/25 text-[8px] uppercase">{k.l}</p>
                      <p className={`font-bold text-sm ${k.c}`}>{k.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── ÁREA DO CONTADOR ──────────────────────────────────── */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Mock visual — Portal do Contador */}
              <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.08] order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-white font-black text-sm">Exemplo</span>
                  <span className="text-blue-400 text-[9px] font-bold uppercase">Painel do Contador</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {['Resumo', 'Painel Anual', 'Pendências', 'Particularidades', 'DOCS →'].map((t, i) => (
                    <span key={i} className={`text-[10px] px-2.5 py-1 rounded-lg ${i === 0 ? 'bg-white/10 text-white font-medium' : 'text-white/20'}`}>{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {[{l:'Total',v:'50',c:'text-white'},{l:'Zeradas',v:'7',c:'text-green-400'},{l:'Lançadas',v:'0',c:'text-yellow-400'},{l:'Fazendo',v:'5',c:'text-purple-400'},{l:'S/ Zeram.',v:'0',c:'text-pink-400'}].map((k,i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
                      <p className="text-white/25 text-[8px] uppercase">{k.l}</p>
                      <p className={`font-bold text-sm ${k.c}`}>{k.v}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/30 text-[9px] uppercase font-bold mb-2">Processo Operacional</p>
                  <p className="text-white/20 text-[10px]">Como essa carteira é operada — contexto e passos do fluxo.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Área do Contador</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-4 mb-4">Transparência total para o cliente</h3>
                <p className="text-white/40 leading-relaxed mb-6">Seu cliente acompanha tudo em tempo real — sem precisar ligar ou esperar relatório. Cada carteira com acesso próprio e seguro.</p>
                <div className="space-y-3">
                  {[
                    { icon: '📊', text: 'Resumo — KPIs da carteira com zeradas, lançadas e fazendo' },
                    { icon: '🎯', text: 'Painel Anual — mesma visão do operador, read-only' },
                    { icon: '⚠️', text: 'Pendências — vê o que está pendente sem precisar cobrar' },
                    { icon: '📁', text: 'LUCA DOCS — acessa documentos organizados por setor' },
                    { icon: '🔄', text: 'Processos — vê como a carteira é operada passo a passo' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg shrink-0">{f.icon}</span>
                      <p className="text-sm text-white/50">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── ÁREA ADMINISTRATIVA ───────────────────────────────── */}
          <div className="mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">Área Administrativa</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-4 mb-4">Gestão completa do escritório</h3>
                <p className="text-white/40 leading-relaxed mb-6">Portal separado com controle financeiro, comercial e operacional. Tudo o que o dono do escritório precisa para tomar decisões.</p>
                <div className="space-y-3">
                  {[
                    { icon: '💰', text: 'Financeiro — honorários, custos rateados, margem por carteira e DRE' },
                    { icon: '🎯', text: 'CRM — funil de vendas, leads, follow-ups e propostas automáticas' },
                    { icon: '🧮', text: 'Orçamentos — simulador de honorários com custo, imposto e margem' },
                    { icon: '📊', text: 'Resumo — composição de receita, lucro e carteiras com alerta' },
                    { icon: '📋', text: 'Atividade — monitoramento diário de produtividade por colaborador' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg shrink-0">{f.icon}</span>
                      <p className="text-sm text-white/50">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mock visual — Administrativo */}
              <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold text-sm">Painel Administrativo</span>
                  <span className="text-[8px] bg-red-500/30 text-red-300 px-2 py-0.5 rounded-full font-bold uppercase">Restrito</span>
                </div>
                <div className="flex gap-1.5 mb-4 overflow-hidden">
                  {['Resumo', 'Carteiras', 'Custos', 'DRE', 'Orçamento', 'CRM'].map((t, i) => (
                    <span key={i} className={`text-[9px] px-2 py-1 rounded-lg shrink-0 ${i === 0 ? 'bg-white/10 text-white font-medium' : 'text-white/20'}`}>{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-green-500/10 rounded-lg p-2.5 text-center border border-green-500/20">
                    <p className="text-green-400/60 text-[8px] uppercase">Receita</p>
                    <p className="text-green-400 font-black text-sm">R$ 93k</p>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-2.5 text-center border border-red-500/20">
                    <p className="text-red-400/60 text-[8px] uppercase">Custos</p>
                    <p className="text-red-400 font-black text-sm">R$ 68k</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-2.5 text-center border border-blue-500/20">
                    <p className="text-blue-400/60 text-[8px] uppercase">Lucro</p>
                    <p className="text-blue-400 font-black text-sm">R$ 25k</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="h-3 rounded-full overflow-hidden flex mb-2">
                    <div className="bg-orange-400 w-[55%]"></div>
                    <div className="bg-amber-300 w-[15%]"></div>
                    <div className="bg-red-400 w-[10%]"></div>
                    <div className="bg-green-400 w-[20%]"></div>
                  </div>
                  <div className="flex gap-3 text-[8px] text-white/30">
                    <span>Pessoal 55%</span><span>Despesas 15%</span><span>Imposto 10%</span><span>Lucro 20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frase de impacto */}
          <div className="text-center py-10 border-t border-white/[0.06]">
            <p className="text-xl md:text-2xl font-bold text-white/60 italic max-w-3xl mx-auto">
              &ldquo;Um sistema feito por quem está na linha de frente da contabilidade todos os dias.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* CTA                                                            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <div id="contato" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-blue-300/50 text-sm font-medium uppercase tracking-[0.3em] mb-4">Vamos conversar</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Pronto para modernizar sua contabilidade?
          </h2>
          <p className="text-white/40 mb-10 text-lg max-w-xl mx-auto">
            Entre em contato e descubra como a WAC + LUCA podem dar transparência e agilidade ao seu negócio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/message/7VFXJWAEUBGOE1" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/20 flex items-center gap-2 text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="mailto:operacional@wacapoio.com.br"
              className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10 text-lg">
              operacional@wacapoio.com.br
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                         */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/[0.06] text-white/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo-wac.jpg" alt="WAC" width={36} height={36} className="opacity-60" />
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
