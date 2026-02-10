async function fetchPokemonData(selectedCardNumber) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${selectedCardNumber}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
}

async function processData({ cardNumber, apiFn, setCacheData }) {
  try {
    const data = await apiFn(cardNumber);

    const results = await Promise.allSettled(
      data.results.map(async (r) => {
        const res = await fetch(r.url);
        if (!res.ok) throw new Error(res.status);
        return res.json();
      }),
    );

    const validPokemon = results
      .filter((r) => r.status === "fulfilled")
      .map((r) => {
        const p = r.value;
        return {
          name: p.name,
          image: p.sprites.front_default,
          selected: false,
          id: p.id,
        };
      });

    setCacheData(validPokemon);
    console.log("Processed Pokémon data:", validPokemon);
  } catch (err) {
    console.error("Error fetching Pokémon data:", err);
  }
}

export { fetchPokemonData, processData };
