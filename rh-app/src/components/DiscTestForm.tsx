import { useState } from 'react';
import type { FormData } from '../types/FormTypes';
import './DiscTestForm.css';

interface Props {
  onNext: (data: Partial<FormData>) => void;
}

const perguntasDISC = [
  "Você se considera mais:",
  "Você costuma:",
  "Quando enfrenta um problema, você prefere:",
  "Você é mais motivado por:",
  "Em um ambiente de equipe, você tende a:",
  "Quando está sob pressão, você:",
  "Qual característica melhor descreve você?",
  "Você se sente mais confortável quando:",
  "O que mais te incomoda?",
  "Qual dessas qualidades é sua maior força?",
  "Como você reage a mudanças?",
  "Como você gosta de trabalhar?",
  "Como você lida com regras?",
  "Como você lida com conflitos?",
  "O que mais te motiva no trabalho?"
];

const opcoesDISC = ["Dominante", "Influente", "Estável", "Conforme"];

const DiscTestForm = ({ onNext }: Props) => {
  const [respostas, setRespostas] = useState<string[]>(Array(15).fill(""));

  const handleChange = (index: number, value: string) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  const handleSubmit = () => {
    onNext({ disc: respostas });
  };

  return (
    <div className="form-section">
      <h2>Perfil DISC</h2>
      <form>
        {perguntasDISC.map((pergunta, index) => (
          <div className="radio-group" key={index}>
            <label>{`${index + 1}. ${pergunta}`}</label><br />
            {opcoesDISC.map((opcao) => (
              <span key={opcao}>
                <input
                  type="radio"
                  name={`disc${index + 1}`}
                  value={opcao}
                  checked={respostas[index] === opcao}
                  onChange={() => handleChange(index, opcao)}
                />
                <label>{opcao}</label>
              </span>
            ))}
          </div>
        ))}

        <button type="button" onClick={handleSubmit}>Avançar</button>
      </form>
    </div>
  );
};

export default DiscTestForm;
