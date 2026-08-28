export default function Header({ onToggle, showAdd }) {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎬</span>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Catálogo de Filmes
          </h1>
        </div>
        <button 
          onClick={onToggle}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
        >
          {showAdd ? '← Voltar para Lista' : '+ Cadastrar Filme'}
        </button>
      </div>
    </header>
  );
}