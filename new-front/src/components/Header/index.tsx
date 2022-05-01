import { Container } from "./styles";

interface IHeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: IHeaderProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        Exoneração de responsabilidade: Os dados apresentados aqui são
        aproximações dos valores reais. Nenhum dado apresentado aqui deve ser
        tomado como valor 100% correto. Podem haver leves variações. Todos os
        valores apresentados aqui consideram as conversões em BRL.
      </p>

      <button>Quero ser notificado!</button>
    </Container>
  );
};

export default Header;
