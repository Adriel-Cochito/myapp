import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-clientes";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCliente } from "../store/slices/cliente/actions";

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientes, loading } = useSelector((state) => state.cliente);

  const removeCliente = (cliente) => dispatch(deleteCliente(cliente));

  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            {columns.clientes.map((column, i) => (
              <th key={i} scope="col" className="px-2 py-3">
                {column}
              </th>
            ))}
            <th className="px-1 py-3">Editar</th>
            <th className="px-1 py-3">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={columns.clientes.length + 2} className="text-center py-4">
                Carregando...
              </td>
            </tr>
          )}

          {!loading &&
            clientes?.map((item, i) => (
              <tr
                key={i}
                className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-2 py-4">{item.id}</td>
                <td className="px-2 py-4">{item.nome}</td>
                <td className="px-2 py-4">{item.nascimento}</td>
                <td className="px-2 py-4">{item.telefone}</td>
                <td className="px-2 py-4">{item.endereco}</td>
                <td className="px-2 py-4">{item.email}</td>
                <td className="py-4 text-center justify-center">
                  <button
                    onClick={() => navigate(`/detalhes/${item.id}`)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="py-4 text-center justify-center">
                  <button
                    onClick={() => removeCliente(item)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
