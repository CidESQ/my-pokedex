//En este archivo dentro de esta carpeta solo vamos a escribir
// codigo para que la api se pueda conectar con nuestra app devolviendo datos

import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=5&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
