import { useState } from 'react';

export default function Add({ onAddFilme }) {
  const [form, setForm] = useState({
    titulo: '',
    genero: '',
    ano: '',
    diretor: '',
    nota: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFilme(form);
  };

  return (
    <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Cadastrar Filme</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">1. Título do Filme</label>
          <input type="text" name="titulo" value={form.titulo} onChange={handleChange} placeholder="Ex: Interstellar" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">2. Gênero</label>
          <input type="text" name="genero" value={form.genero} onChange={handleChange} placeholder="Ex: Ficção Científica" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">3. Ano</label>
            <input type="number" name="ano" value={form.ano} onChange={handleChange} placeholder="Ex: 2014" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">5. Nota (0-10)</label>
            <input type="number" min="0" max="10" name="nota" value={form.nota} onChange={handleChange} placeholder="Ex: 10" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">4. Diretor</label>
          <input type="text" name="diretor" value={form.diretor} onChange={handleChange} placeholder="Ex: Christopher Nolan" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-98 mt-2 cursor-pointer">
          Salvar no Local Storage
        </button>
      </form>
    </div>
  );
}