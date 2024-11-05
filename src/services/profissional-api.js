import http from "../config/http";
/**
 * Carrega todos os clientes do banco.
 */
async function getAll() {
  const clientes = await http.get("/clientes");
  return clientes.data;
}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do cliente na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/clientes/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}
/**
 * Faz a remoção do arquivo na api.
 * @param {cliente} cliente - objeto do cliente (...deve ser definido na interface)
 */

/**
 * Faz o cadastro na api.
 * @param {cliente} cliente - objeto do cliente (...deve ser definido na interface)
 */
async function create(cliente) {
  try {
    await http.post(`/clientes/`, cliente);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(form) {
  // poderiam usar o axios
  try {
    await http.patch(`/clientes/${form.id}`, form);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do cliente
 * @param {id} id - string
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`/clientes/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  remove,
  create,
  update,
  getById,
};
