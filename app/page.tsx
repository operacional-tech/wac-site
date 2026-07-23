'use client';
import Image from 'next/image';

// ═══════════════════════════════════════════════════════════════════════
// WAC APOIO CONTÁBIL — Landing wacapoio.com.br
// Redesign: navbar navy (mesma pegada do LUCA) + corpo branco + foco em
// quarteirização contábil/fiscal e otimização de processos/custo.
// LUCA aparece embedded como diferencial da WAC.
// ═══════════════════════════════════════════════════════════════════════

const PILARES = [
  {
    tag: 'Contábil',
    tagCls: 'bg-blue-50 text-blue-700 border-blue-200',
    titulo: 'Operação Contábil Completa',
    desc: 'Assumimos a rotina contábil do seu escritório — classificações, conciliações, balancetes e demonstrações — como extensão do seu time.',
    itens: [
      'Classificação e conciliação bancária',
      'Balancete mensal + análise por IA',
      'ECD / ECF com controle anual',
      'Padronização de plano de contas',
      'Fechamento no prazo, sempre',
    ],
  },
  {
    tag: 'Fiscal',
    tagCls: 'bg-rose-50 text-rose-700 border-rose-200',
    titulo: 'Operação Fiscal Integrada',
    desc: 'Apuração de impostos, escrituração fiscal e obrigações acessórias pra todos os regimes — SN, LP e LR — com processo padronizado.',
    itens: [
      'Fluxo mensal por regime tributário',
      'SPED · DCTFWeb · EFD-Reinf · DARE',
      'Retenções (IRRF · CSRF · INSS · PIS-COFINS)',
      'Formulário de particularidades por empresa',
      'Metodologia 7em7 pra fechar no dia certo',
    ],
  },
];

const OTIMIZACOES = [
  {
    titulo: 'Menos custo fixo',
    desc: 'Reduza o peso da folha interna. Você paga por entrega, não por presença.',
  },
  {
    titulo: 'Mais volume, mesma qualidade',
    desc: 'Time treinado + método próprio = você atende mais carteiras sem crescer estrutura.',
  },
  {
    titulo: 'Foco no que só o dono faz',
    desc: 'A rotina operacional sai do seu ombro. Você foca em cliente, comercial e crescimento.',
  },
  {
    titulo: 'Processo que não depende de pessoa',
    desc: 'Metodologia WAC + LUCA garantem continuidade mesmo com troca de time.',
  },
];

const LUCA_FEATURES = [
  { titulo: 'Painel Anual', desc: 'Cada empresa × cada mês numa grade única — status pintado por cor, avanço visível de um olhar.' },
  { titulo: 'Evoluções diárias', desc: 'Time descreve o que fez em cada carteira. Você enxerga produtividade em tempo real.' },
  { titulo: 'ECD / ECF centralizado', desc: 'Empresas obrigadas (LP, LR, Imune, Isenta, 3º Setor) com status anual no Hub de Líderes.' },
  { titulo: 'LUCA DOCS', desc: 'Extratos, balancetes, contratos e certificados digitais organizados por empresa e mês.' },
  { titulo: 'Agentes de IA', desc: 'Análise de balancete, PDF→OFX, análise de razão — a IA rala nos gargalos.' },
  { titulo: 'Portal do Contador', desc: 'Seu cliente acompanha status, docs e pendências sem precisar ligar.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ═══ NAVBAR NAVY com estrelas — mesma pegada do LUCA ═══ */}
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-6 md:pt-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Quarteirização Contábil e Fiscal
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-slate-900 mb-5">
              Otimize processos e{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                reduza o custo do seu escritório contábil.
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              A <strong>WAC</strong> assume a operação contábil e fiscal do seu escritório como extensão do seu time
              — com metodologia própria e sistema integrado. Você entrega mais carteiras, com o mesmo padrão de qualidade
              e menos estrutura interna.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://wa.me/message/7VFXJWAEUBGOE1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105"
              >
                <IconWhatsapp />
                Falar com a WAC
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-transform hover:scale-105"
              >
                Como funciona →
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><IconCheck /> Sem contrato de fidelidade</span>
              <span className="flex items-center gap-1.5"><IconCheck /> Onboarding personalizado</span>
              <span className="flex items-center gap-1.5"><IconCheck /> Sistema LUCA incluído</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOR + PROMESSA ═══ */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { n: 'Alto', l: 'Custo de folha interna pesando na margem' },
              { n: 'Rotativo', l: 'Time saindo e método indo embora junto' },
              { n: 'Espremido', l: 'Sem tempo pra crescer, pra vender, pra tocar o negócio' },
            ].map((x, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <p className="text-2xl md:text-3xl font-black text-rose-600 mb-1">{x.n}</p>
                <p className="text-sm text-slate-600 leading-snug">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8 text-sm max-w-2xl mx-auto">
            É pra escritórios que sentem essas 3 dores todo mês que a WAC existe.
            A gente assume a operação e você recupera tempo, margem e ritmo.
          </p>
        </div>
      </section>

      {/* ═══ PILARES: CONTÁBIL + FISCAL ═══ */}
      <section id="pilares" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Dois pilares · Uma operação</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-slate-900">
              A WAC assume Contábil e Fiscal com processo próprio.
            </h2>
            <p className="text-slate-600">
              Cada setor com metodologia validada e sistema pra você acompanhar tudo em tempo real.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PILARES.map(p => (
              <div key={p.tag} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${p.tagCls}`}>
                  {p.tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-3 mb-2">{p.titulo}</h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.itens.map((it, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OTIMIZAÇÃO: 4 GANHOS ═══ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600">Otimização de processos</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-slate-900">
              Escale sem crescer estrutura.
            </h2>
            <p className="text-slate-600">
              Quando você paga por entrega e não por presença, a matemática do escritório muda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTIMIZACOES.map((o, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all">
                <p className="text-xs font-black text-indigo-600 mb-2">0{i + 1}</p>
                <h3 className="font-bold text-slate-900 mb-2">{o.titulo}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LUCA — o diferencial da WAC ═══ */}
      <section id="luca" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Sistema próprio · incluído</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-slate-900">
              LUCA — o sistema que faz a WAC funcionar.
            </h2>
            <p className="text-slate-600">
              Nascido dentro da operação contábil, o LUCA é o mesmo painel que a equipe WAC usa todo dia.
              Você acompanha cada empresa, cada mês, cada evolução — em tempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {LUCA_FEATURES.map(f => (
              <div key={f.titulo} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all">
                <h4 className="font-bold text-slate-900 mb-1.5">{f.titulo}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://luca.wacapoio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-transform hover:scale-105"
            >
              Conheça o LUCA em detalhes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ COMO FUNCIONA ═══ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600">Passo a passo</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3 text-slate-900">
              Como a WAC entra no seu escritório.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: '01', titulo: 'Diagnóstico', desc: 'Conversa inicial pra entender volume, regime das empresas e o que trava hoje.' },
              { n: '02', titulo: 'Piloto', desc: 'Assumimos 5–10 empresas pra rodar 1 mês. Você vê o método na prática, sem risco.' },
              { n: '03', titulo: 'Onboarding', desc: 'Migração das demais empresas, treinamento do time e configuração no LUCA.' },
              { n: '04', titulo: 'Escala', desc: 'Operação rodando com padrão WAC. Você acompanha tudo pelo sistema.' },
            ].map(p => (
              <div key={p.n} className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="text-3xl font-black text-blue-600 mb-2">{p.n}</p>
                <h4 className="font-black text-slate-900 mb-1.5">{p.titulo}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Pronto pra otimizar o seu escritório?
          </h2>
          <p className="text-slate-600 mb-10 text-lg max-w-xl mx-auto">
            Fale com a WAC e descubra em quanto tempo você recupera folga na margem e no calendário.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/message/7VFXJWAEUBGOE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-500/20 text-lg transition-all hover:scale-105"
            >
              <IconWhatsapp />
              WhatsApp
            </a>
            <a
              href="mailto:operacional@wacapoio.com.br"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 transition-colors"
            >
              operacional@wacapoio.com.br
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-slate-100 bg-slate-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-500">© 2026 WAC Apoio Contábil. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#pilares" className="hover:text-slate-900">Serviços</a>
              <a href="https://luca.wacapoio.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">LUCA</a>
              <a href="#contato" className="hover:text-slate-900">Contato</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/wacapoio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://br.linkedin.com/company/wac-apoio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-6">
            Powered by <a href="https://luca.wacapoio.com.br" className="text-blue-500 font-semibold hover:underline">LUCA</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── Navbar navy com estrelas (mesma pegada do LUCA) ─────────────────
function Navbar() {
  const STARS: [number, number][] = [
    [2, 30], [5, 70], [8, 45], [11, 20], [14, 80], [17, 55], [20, 15], [22, 85],
    [26, 40], [29, 65], [32, 25], [35, 90], [38, 50], [41, 10], [44, 75], [47, 35],
    [50, 60], [53, 20], [56, 85], [59, 45], [62, 70], [65, 15], [67, 55], [70, 80],
    [73, 30], [75, 65], [78, 40], [81, 85], [83, 20], [86, 60], [88, 35], [90, 75],
    [92, 50], [94, 15], [96, 70], [98, 40],
  ];
  const LINES: [number, number, number, number][] = [
    [2, 30, 5, 70], [5, 70, 8, 45], [8, 45, 14, 80], [26, 40, 32, 25],
    [32, 25, 38, 50], [53, 20, 59, 45], [62, 70, 67, 55], [73, 30, 78, 40],
    [83, 20, 88, 35], [90, 75, 96, 70],
  ];
  return (
    <header className="sticky top-0 z-40 shadow-lg relative overflow-hidden" style={{ background: '#0c1a3a', height: '100px' }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {STARS.map(([x, y], i) => (
          <circle key={`s${i}`} cx={`${x}%`} cy={`${y}%`} r={0.8 + (i % 3) * 0.5} fill="white" opacity={0.12 + (i % 5) * 0.06} />
        ))}
        {LINES.map(([x1, y1, x2, y2], i) => (
          <line key={`l${i}`} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="white" strokeWidth="0.5" opacity="0.06" />
        ))}
      </svg>

      {/* Logo original centralizado com mask radial (fusão com o navy) */}
      <a href="#hero" className="absolute inset-0 flex items-center justify-center z-10" aria-label="WAC — início">
        <Image
          src="/logo-wac.jpg"
          alt="WAC Apoio Contábil"
          width={160}
          height={160}
          priority
          style={{
            mask: 'radial-gradient(circle at center, black 20%, transparent 65%)',
            WebkitMask: 'radial-gradient(circle at center, black 20%, transparent 65%)',
          }}
        />
      </a>

      <div className="relative z-20 max-w-6xl mx-auto h-full px-8 flex items-center justify-between pointer-events-none">
        {/* Links esquerda */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
          <a href="#pilares" className="text-slate-300 hover:text-white text-sm font-semibold transition-colors">Serviços</a>
          <a href="#luca" className="text-slate-300 hover:text-white text-sm font-semibold transition-colors">LUCA</a>
          <a href="#contato" className="text-slate-300 hover:text-white text-sm font-semibold transition-colors">Contato</a>
        </nav>

        {/* Placeholder pro centro (não empurra o logo) */}
        <div className="hidden md:block" />

        {/* CTA direita */}
        <div className="ml-auto pointer-events-auto">
          <a
            href="https://luca.wacapoio.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-5 py-2.5 rounded-lg shadow-md transition-transform hover:scale-105 inline-flex items-center gap-2 text-sm"
          >
            Acessar LUCA
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function IconWhatsapp() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
