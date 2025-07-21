import { useState } from 'react';
import type { FormData } from '../types/FormTypes';
import './PersonalInfoForm.css'

interface Props {
    onNext: (data: Partial<FormData>) => void;  
}


const PersonalInfoForm = ({ onNext }: Props) => {
    const [form, setForm] = useState(
        {
            nome: '',
            email: '',
            telefone: '',
            data_nascimento: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            cargo: '',
            experiencia: '',
            resumo_experiencia: ''
        });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
        ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        };

    const handleRadioChange = (value: string) => {
        setForm(prev => ({ ...prev, experiencia: value }));
    };

    const handleSubmit = () => {
        onNext(form);
    }


    return(
        <div className="form-section">
            <h2>Informações Pessoais</h2>
            <form>
                <div className='input-group'>
                <label htmlFor="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="data_nascimento">Data de Nascimento:</label>
                <input type="date" name="data_nascimento" value={form.data_nascimento} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" name="cpf" value={form.cpf} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="endereco">Endereço Completo:</label>
                <input type="text" name="endereco" value={form.endereco} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" name="cidade" value={form.cidade} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="estado">Estado:</label>
                <input type="text" name="estado" value={form.estado} onChange={handleChange} required />
                </div>

                <div className="input-group">
                <label htmlFor="cargo">Cargo Desejado:</label>
                <select name="cargo" value={form.cargo} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="regulatorio">Regulatório</option>
                    <option value="marketing">Marketing</option>
                    <option value="contabil">Contábil</option>
                </select>
                </div>

                <div className="input-group radio-group">
                <label>Possui experiência na área?</label><br />
                <input
                    type="radio"
                    id="experiencia_sim"
                    name="experiencia"
                    value="Sim"
                    checked={form.experiencia === 'Sim'}
                    onChange={() => handleRadioChange('Sim')}
                />
                <label htmlFor="experiencia_sim">Sim</label>

                <input
                    type="radio"
                    id="experiencia_nao"
                    name="experiencia"
                    value="Não"
                    checked={form.experiencia === 'Não'}
                    onChange={() => handleRadioChange('Não')}
                />
                <label htmlFor="experiencia_nao">Não</label>
                </div>

                <div className="input-group">
                <label htmlFor="resumo_experiencia">Se sim, descreva brevemente sua experiência:</label>
                <textarea
                    name="resumo_experiencia"
                    value={form.resumo_experiencia}
                    onChange={handleChange}
                />
                </div>

                <button type="button" onClick={handleSubmit}>Avançar para o Teste DISC</button>
            </form>
        </div>
    )

}

export default PersonalInfoForm;