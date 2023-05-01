import pokemon from './pokemon.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};

export const getAllPokemon = async (req, res, next) => {
  try {
    res.json(pokemon)
  } catch (error) {
    next(error);
  }
};

export const getOnePokemon = async (req, res, next) => {
  try {
    let reqPokemon = pokemon.filter(e => e.id == req.params.id)
    res.json(reqPokemon)
  } catch (error) {
    next(error);
  }
};

export const getOnePokemonInfo = async (req, res, next) => {
  try {
    let reqPokemon = pokemon.filter(e => e.id == req.params.id)
    let info = reqPokemon[0][req.params.info]
    console.log(info)
    res.json(info)
  } catch (error) {
    next(error);
  }
};
