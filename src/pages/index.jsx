import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllClientes } from "../store/slices/cliente/actions";

function Initial() {
  const dispatch = useDispatch();

  //ciclo de vida do componente
  useEffect(() => {
    dispatch(getAllClientes());
  }, []);

  return <Table />;
}

export default Initial;
