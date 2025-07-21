import { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import DiscTestForm from './components/DiscTestForm';
import AttentionTestForm from './components/AttentionTestForm';
import FinalConsiderations from './components/FinalConsiderations';
import type { FormData } from './types/FormTypes';

import './App.css'

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleNext = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  return (
      <>
         <header>
            <img src="https://avancontabilidade.com.br/wp-content/uploads/2023/12/LOGO-BRANCA.svg" alt="Logo Avanço Contabilidade"/>
            <h2>Processo Seletivo</h2>
         </header>

        {step === 1 && <PersonalInfoForm onNext={handleNext} />}
        {step === 2 && <DiscTestForm onNext={handleNext} />}
        {step === 3 && <AttentionTestForm onNext={handleNext} />}
        {step === 4 && <FinalConsiderations formData={formData} />}

        <footer>
          <p>&copy; 2025 Avanço Contabilidade. Todos os direitos reservados.</p>
        </footer>
      </>
  )
}

export default App
