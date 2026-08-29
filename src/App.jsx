import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Requisição REST API (Camada de Dados)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((res) => res.json())
      .then(async (data) => {
        const detailedData = await Promise.all(
          data.results.map((p) => fetch(p.url).then((res) => res.json()))
        );
        setPokemonList(detailedData);
        setSelectedPokemon(detailedData[0]);
        setLoading(false);
      })
      .catch((err) => console.error('Erro ao consumir API REST:', err));
  }, []);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1>REST API Explorer - Arquitetura Distribuída</h1>
        <p className="subtitle">React Frontend + External Public REST API</p>
      </header>

      <main className="main-content">
        <section className="search-section">
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </section>

        {loading ? (
          <div className="loading">Carregando dados da API REST...</div>
        ) : (
          <div className="dashboard-grid">
            {/* Lista de Recursos Consumidos da API */}
            <div className="list-card">
              <h3>Recursos REST (PokeAPI)</h3>
              <div className="items-list">
                {filteredPokemon.map((p) => (
                  <button
                    key={p.id}
                    className={`item-btn ${selectedPokemon?.id === p.id ? 'active' : ''}`}
                    onClick={() => setSelectedPokemon(p)}
                  >
                    #{p.id} - {p.name.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Detalhes do Recurso Selecionado */}
            {selectedPokemon && (
              <div className="detail-card">
                <h3>Detalhes da Requisição GET</h3>
                <div className="pokemon-profile">
                  <img
                    src={selectedPokemon.sprites.front_default}
                    alt={selectedPokemon.name}
                    className="pokemon-img"
                  />
                  <h2>{selectedPokemon.name.toUpperCase()}</h2>
                  <div className="badge-container">
                    {selectedPokemon.types.map((t) => (
                      <span key={t.type.name} className="badge">
                        {t.type.name}
                      </span>
                    ))}
                  </div>
                  <div className="stats">
                    <p><strong>Altura:</strong> {selectedPokemon.height / 10} m</p>
                    <p><strong>Peso:</strong> {selectedPokemon.weight / 10} kg</p>
                    <p><strong>Experiência Base:</strong> {selectedPokemon.base_experience} exp</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;