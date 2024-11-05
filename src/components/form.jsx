import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/cliente/actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cliente = useSelector((state) => state.cliente.detalhe);

  // Estados para controlar a desabilitação do botão e os erros de validação
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const changeField = (field, value) => {
    dispatch(editForm(field, value));
  };

  // Verificar se todos os campos obrigatórios estão preenchidos e definir erros
  useEffect(() => {
    const isFormValid = cliente?.nome && cliente?.nascimento && cliente?.telefone && cliente?.email;
    setIsButtonDisabled(!isFormValid);
  }, [cliente]);

  const validateForm = () => {
    const newErrors = {};
    if (!cliente?.nome) newErrors.nome = "Nome é obrigatório.";
    if (!cliente?.nascimento) newErrors.nascimento = "Data de nascimento é obrigatória.";
    if (!cliente?.telefone) newErrors.telefone = "Telefone é obrigatório.";
    if (!cliente?.email) newErrors.email = "Email é obrigatório.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = () => {
    if (validateForm()) {
      dispatch(saveForm(isEdit)).then(() => navigate("/"));
    }
  };

  return (
    <div className="cadastro mt-10">
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              onChange={(e) => changeField("nome", e.target.value)}
              placeholder="Digite aqui o Nome"
              value={cliente?.nome || ""}
              className={`bg-gray-50 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label htmlFor="nascimento" className="block mb-2 text-sm font-medium text-gray-900">
              Nascimento
            </label>
            <input
              type="date"
              id="nascimento"
              onChange={(e) => changeField("nascimento", e.target.value)}
              placeholder="Digite sua data de nascimento"
              value={cliente?.nascimento || ""}
              className={`bg-gray-50 border ${errors.nascimento ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {errors.nascimento && <p className="text-red-500 text-xs mt-1">{errors.nascimento}</p>}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-900">
              Telefone
            </label>
            <input
              type="number"
              id="telefone"
              onChange={(e) => changeField("telefone", e.target.value)}
              placeholder="Digite seu telefone"
              value={cliente?.telefone || ""}
              className={`bg-gray-50 border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => changeField("email", e.target.value)}
              placeholder="Digite seu email"
              value={cliente?.email || ""}
              className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Endereço:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={cliente?.endereco || ""}
            onChange={(e) => changeField("endereco", e.target.value)}
            placeholder="Digite aqui o Endereço"
          ></textarea>
        </div>

        {isButtonDisabled && (
          <p className="text-red-600 mb-4">
            Por favor, preencha todos os campos obrigatórios antes de salvar.
          </p>
        )}

        <button
          type="submit"
          onClick={submitForm}
          className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
            isButtonDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          }`}
          disabled={isButtonDisabled}
        >
          Salvar
        </button>

      </div>
    </div>
  );
}

export default Form;
