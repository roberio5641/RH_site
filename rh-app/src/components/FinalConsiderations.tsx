import { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import type { FormData } from '../types/FormTypes';
import './FinalConsiderations.css';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
    lastAutoTable: {
      finalY: number;
    };
  }
}

interface Props {
  formData: Partial<FormData>;
}

const FinalConsiderations = ({ formData }: Props) => {
  const [comments, setComments] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComments(e.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text(`Resultado do Teste para ${formData.nome}`, 20, 20);

    // Convert DISC answers to a readable format
    const discAnswers = formData.disc?.map((answer, index) => 
      `Pergunta ${index + 1}: ${answer}`
    ).join('\n') || '';

    doc.autoTable({
      startY: 30,
      head: [['Campo', 'Resposta']],
      body: [
        ['Nome', formData.nome || ''],
        ['E-mail', formData.email || ''],
        ['Telefone', formData.telefone || ''],
        ['Data de Nascimento', formData.data_nascimento || ''],
        ['CPF', formData.cpf || ''],
        ['Endereço', formData.endereco || ''],
        ['Cidade', formData.cidade || ''],
        ['Estado', formData.estado || ''],
        ['Cargo Desejado', formData.cargo || ''],
        ['Experiência na área', formData.experiencia || ''],
        ['Resumo da Experiência', formData.resumo_experiencia || ''],
        ['Visão em 5 anos', formData.ac1 || ''],
        ['Interesse na empresa (0-10)', formData.ac2 || ''],
        ['Perfil DISC', discAnswers],
      ],
    });

    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 10,
      head: [['Comentários Finais']],
      body: [[comments]],
    });

    doc.save(`${formData.nome}_resultado_teste.pdf`);
  };

  return (
    <div className="form-section">
      <h2>Considerações Finais</h2>
      <form>
        <div className="input-group">
          <label>Comentários adicionais:</label>
          <input
            type="text"
            value={comments}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={generatePDF}>Enviar e Gerar PDF</button>
      </form>
    </div>
  );
};

export default FinalConsiderations; 