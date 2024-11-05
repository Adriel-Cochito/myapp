import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/cliente/actions";
import { useNavigate } from "react-router-dom";

function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cliente = useSelector((state) => state.cliente.detalhe);

  const changeField = (field, value) => dispatch(editForm(field, value));

  const submitForm = () => dispatch(saveForm(isEdit)).then(() => navigate("/"));

  return (
    <div className="cadastro mt-10">
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              onChange={(e) => changeField("nome", e.target.value)}
              placeholder="Digite aqui o Nome"
              value={cliente?.nome || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nascimento"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nascimento
            </label>
            <input
              type="text"
              id="nascimento"
              onChange={(e) => changeField("nascimento", e.target.value)}
              placeholder="Digite sua nascimento"
              value={cliente?.nascimento || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Telefone
            </label>
            <input
              type="telefone"
              id="telefone"
              onChange={(e) => changeField("telefone", e.target.value)}
              placeholder="Digite seu telefone"
              value={cliente?.telefone || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => changeField("email", e.target.value)}
              placeholder="Digite seu email"
              value={cliente?.email || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Endereço:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={cliente?.endereco || ""}
            onChange={(e) => changeField("endereco", e.target.value)}
            placeholder="Digite aqui o Endereço"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={submitForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;

// <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Nome submetido:", nome);
// }
