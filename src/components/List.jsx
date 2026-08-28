export default function List({ filmes }) {
  if (!filmes || filmes.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-3xl mt-8">
        <p className="text-slate-400 text-lg font-medium">Nenhum filme cadastrado no Local Storage.</p>
        <p className="text-slate-600 text-sm mt-1">Clique no botão acima para adicionar o primeiro.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filmes.map((filme, index) => (
        <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white leading-tight">{filme.titulo}</h3>
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                ★ {filme.nota}/10
              </span>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <p><span className="text-slate-500 font-medium">Gênero:</span> {filme.genero}</p>
              <p><span className="text-slate-500 font-medium">Ano:</span> {filme.ano}</p>
              <p><span className="text-slate-500 font-medium">Diretor:</span> {filme.diretor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}