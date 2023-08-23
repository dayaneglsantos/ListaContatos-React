import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import validator from "validator";
import { BotaoCadastrar, BotaoVoltar, Campo, Form } from "./styles";
import { cadastrar } from "../../store/reducers/contato";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const validaEmail = () => {
    let formValido = false;
    const emailValido = validator.isEmail(email);
    if (email && !emailValido) {
      alert("E-mail inválido");
      return;
    } else if (!nome) {
      alert("Nome é obrigatório");
    } else if (telefone.length < 14) {
      alert("O telefone deve conter no mínimo 10 dígitos (incluindo DDD)");
    } else {
      formValido = true;
    }
    return formValido;
  };

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault();
    // if (telefone.length < 14) {
    //   alert("O telefone deve conter no mínimo 10 dígitos (incluindo DDD)");
    // } else if (email) {
    //   validaEmail();

    if (validaEmail()) {
      dispatch(cadastrar({ nome, email, telefone }));
      navigate("/");
    }
  };

  return (
    <>
      <Form>
        <Campo
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <Campo
          as={IMaskInput}
          type="text"
          placeholder="Telefone"
          mask="(00) 00000-0000"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelefone(e.target.value)
          }
        />
        <Campo
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <BotaoCadastrar type="submit" onClick={cadastrarContato}>
          Cadastrar
        </BotaoCadastrar>
      </Form>
      <BotaoVoltar onClick={() => navigate("/")}>
        Voltar para lista de contatos
      </BotaoVoltar>
    </>
  );
};

export default Formulario;
