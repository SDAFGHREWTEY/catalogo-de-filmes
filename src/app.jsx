import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const salvos = localStorage.getItem('catalogo_filmes');
    if (salvos) {
      setFilmes(JSON.parse(salvos));
    }
  }, []);

  const handleAddFilme = (novoFilme) => {
    const atualizados = [...filmes, novoFilme];
    setFilmes(atualizados);
    localStorage.setItem('catalogo_filmes', JSON.stringify(atualizados));
    setShowAdd(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header onToggle={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      <main className="max-w-5xl mx-auto px-6 py-6">
        {showAdd ? <Add onAddFilme={handleAddFilme} /> : <List filmes={filmes} />}
      </main>
    </div>
  );
}