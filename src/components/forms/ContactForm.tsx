"use client";

import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validera formuläret
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Vänligen fyll i alla obligatoriska fält.'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Använd EmailJS för att skicka e-post
      if (formRef.current) {
        // Kommentera ut simuleringen för att faktiskt skicka e-post även i utvecklingsläge
        /*
        if (process.env.NODE_ENV === 'development') {
          console.log('Utvecklingsläge: Simulerar e-postutskick istället för att skicka riktigt');
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const mockResult = { status: 200, text: 'OK' };
          console.log('Simulerat svar:', mockResult);
          
          setStatus({
            submitted: true,
            success: true,
            message: 'Tack för ditt meddelande! (Simulerad framgång i utvecklingsläge)'
          });
          
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          setIsSubmitting(false);
          return mockResult;
        }
        */
        
        // Använd värden från .env-filen
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        
        if (!serviceId || !templateId || !publicKey) {
          throw new Error('EmailJS-konfiguration saknas. Kontrollera miljövariabler.');
        }
        
        console.log('Skickar e-post med EmailJS... Service:', serviceId, 'Template:', templateId);
        
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        console.log('EmailJS svar:', result);
        
        if (result.status === 200) {
          setStatus({
            submitted: true,
            success: true,
            message: 'Tack för ditt meddelande! Jag återkommer så snart som möjligt.'
          });
          
          // Rensa formuläret
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          throw new Error('Något gick fel vid sändning av meddelandet.');
        }
      } else {
        throw new Error('Formuläret kunde inte skickas.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Visa felet oavsett miljö eftersom vi nu skickar riktiga e-postmeddelanden även i utvecklingsläge
      setStatus({
        submitted: true,
        success: false,
        message: 'Det uppstod ett fel när meddelandet skulle skickas. Försök igen senare eller kontakta mig direkt via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="bg-white/50 dark:bg-black/50 p-6 rounded-lg shadow-sm h-full flex flex-col" onSubmit={handleSubmit}>
      <div className="space-y-5 flex-grow">
        {status.submitted && (
          <div className={`p-3 rounded ${status.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
            {status.message}
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Namn <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="from_name"
            className="input-field"
            placeholder="Ditt namn"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">E-post <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="from_email"
            className="input-field"
            placeholder="Din e-postadress"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 font-medium">Ämne</label>
          <input 
            type="text" 
            id="subject" 
            name="subject"
            className="input-field"
            placeholder="Ämne för ditt meddelande"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Meddelande <span className="text-red-500">*</span></label>
          <textarea 
            id="message" 
            name="message"
            rows={5} 
            className="input-field"
            placeholder="Ditt meddelande"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
        </button>
        
        <p className="text-xs text-black/60 dark:text-white/60 mt-2">
          <span className="text-red-500">*</span> Obligatoriska fält
        </p>
      </div>
    </form>
  );
}