import clienteApi from "../../../services/cliente-api";
import { setClientes, setDetalhes, setLoading } from "./reducer";
import Swal from "sweetalert2";

export const getAllClientes = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await clienteApi.getAll();
    dispatch(setClientes(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));
};
export const getDetalhesCliente = (id) => async (dispatch) => {
  try {
    const result = await clienteApi.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};
export const editForm = (field, value) => async (dispatch, getState) => {
  const cliente = getState().cliente.detalhe;

  dispatch(
    setDetalhes({
      ...cliente,
      [field]: value,
    }),
  );
};
export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const cliente = getState().cliente.detalhe;
      const action = editForm ? clienteApi.update : clienteApi.create;
      await action(cliente);
      dispatch(getAllClientes());

      Swal.fire({
        title: "Sucesso !",
        text: `O cliente ${editForm ? "editado" : "cadastrado"} com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: "OPS !",
        text: `Aconteceu um erro ao cadastrar o cliente`,
        icon: "error",
      });
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );
    }
  };

export const deleteCliente = (cliente) => async (dispatch) => {
  Swal.fire({
    title: `Deseja excluir o cliente ${cliente.nome}`,
    text: "Após a exclusão essa tarefa não poderá ser desfeita.",
    icon: "info",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#cccc",
    confirmButtonText: "Confirmar Exclusão",
    confirmButtonColor: "green",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await clienteApi.remove(cliente.id);
        Swal.fire({
          title: "Sucesso !",
          text: `cliente ${cliente.nome} excluído com sucesso`,
          icon: "success",
        });
        dispatch(getAllClientes()); // carrega novamente a lista;
      } catch (error) {
        // Existe 2 possibilidades de tratamento de error
        // 1 - Retornar diretamente da API (caso incomun)
        // 2 - Fazer o tratamento diretamento no frontend (comum)

        console.log(error.message);
        Swal.fire({
          title: "Ops !!!",
          text: error.message || `Aconteceu um erro ao tentar deletar`,
          icon: "error",
        });
      }
    }
  });
};
