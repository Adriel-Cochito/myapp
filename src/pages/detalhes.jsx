import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorCliente from "../components/error";
import { getDetalhesCliente } from "../store/slices/cliente/actions";
import { useDispatch, useSelector } from "react-redux";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.cliente.detalhe);

  useEffect(() => {
    dispatch(getDetalhesCliente(id));
  }, [dispatch, id]);

  if (!cliente) {
    return <ErrorCliente />;
  } else {
    return <Form isEdit />;
  }
}

export default Detalhes;
