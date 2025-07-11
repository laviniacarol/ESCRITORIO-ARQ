import { useState, useEffect } from 'react';
import './ContactForm.css';

// COMPONENTS
import Button from '../Button/Button';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setFormSubmitLoading(true);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            access_key: '98582a2b-6f3d-45f3-9037-8d4ea83a7f2f'
          })
        });

        if (response.ok) {
          setFormSubmitted(true);
        } else {
          alert('Erro ao enviar!');
        }
      } catch (e) {
        alert(`Erro: ${e}`);
      } finally {
        setFormSubmitLoading(false);
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='contact-form d-flex fd-column al-center'>
      <h2>We love meeting new people and helping them.</h2>
      <form onSubmit={handleSubmit}>
        <div className='d-flex form-group'>
          <input
            className='form-input'
            type='text'
            id='name'
            name='name'
            placeholder='Name *'
            onChange={handleChange}
          />

          <input
            className='form-input'
            type='email'
            id='email'
            name='email'
            placeholder='Email *'
            onChange={handleChange}
          />
        </div>

        <div className='d-flex form-group'>
          <textarea
            className='form-input'
            id='message'
            name='message'
            placeholder='Mensagem'
            onChange={handleChange}
            rows='4'
          ></textarea>
        </div>

        <div className='d-flex form-group al-center jc-end'>
         {formSubmitted && <p className='text-primary'>Enviado com sucesso!</p>}
          <Button type='submit' buttonStyle='secondary' disabled={!isFormValid || formSubmitLoading}>
           Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
