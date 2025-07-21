import { useState } from 'react';
import type { FormData } from '../types/FormTypes';
import './AttentionTestForm.css'

interface Props {
  onNext: (data: Partial<FormData>) => void;
}

const AttentionTestForm = ({ onNext }: Props) => {
  const [form, setForm] = useState({
    ac1: '',
    ac2: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onNext(form);
  };

  return (
    <div className="form-section">
      <h2>Teste de Atenção Concentrada</h2>
      <form>
        <div className="input-group">
          <label>1. Como você se vê em 5 anos?</label>
          <input
            type="text"
            name="ac1"
            value={form.ac1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>2. Em uma escala de 0 a 10, quanto você gostaria de trabalhar na Avanço Contabilidade?</label>
          <input
            type="number"
            name="ac2"
            min="0"
            max="10"
            value={form.ac2}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={handleSubmit}>Concluir</button>
      </form>
    </div>
  );
};

export default AttentionTestForm;