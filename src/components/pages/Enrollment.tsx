
import React, { useState, useMemo } from 'react';

// --- HELPER COMPONENTS ---

const ProgressBar: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    const steps = ["Estudiante", "Representante", "Académico", "Confirmación"];

    return (
        <div className="mb-12">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isActive = currentStep >= stepNumber;
                    return (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className={`w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                                    <span className="text-xs xs:text-sm sm:text-base">
                                        {currentStep > stepNumber ? '✓' : stepNumber}
                                    </span>
                                </div>
                                <p className={`mt-1 xs:mt-2 text-xs xs:text-sm sm:text-sm font-semibold transition-all duration-300 ${isActive ? 'text-brand-blue' : 'text-gray-500'}`}>{step}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`w-2 xs:w-4 sm:w-8 h-0.5 xs:h-1 sm:h-1 transition-all duration-300 ${currentStep > stepNumber ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, value, onChange, error, type = 'text', required = false, placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
            {label} {required && <span className="text-brand-red">*</span>}
        </label>
        <input 
            type={type} 
            id={id} 
            name={name} 
            value={value}
            onChange={onChange} 
            placeholder={placeholder}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange transition ${error ? 'border-red-500' : 'border-gray-300'}`} 
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);


const Enrollment: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        studentFirstName: '',
        studentLastName: '',
        studentDob: '',
        studentGender: '',
        studentEmail: '',
        studentPhone: '',
        applyingGrade: '',
        medicalInfo: '',
        // Step 2
        guardianFirstName: '',
        guardianLastName: '',
        guardianId: '',
        relationship: '',
        guardianEmail: '',
        guardianPhone: '',
        guardianOccupation: '',
        address: '',
        // Step 3
        previousSchool: '',
        lastGrade: '',
        hasSpecialNeeds: 'No',
        specialNeedsDescription: '',
        howHeard: '',
        expectations: '',
        additionalComments: '',
        // Step 4
        acceptTerms: false,
        authorizeData: false,
        authorizeImages: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const validateStep = () => {
        const newErrors: { [key: string]: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9\s-()+]+$/;

        if (currentStep === 1) {
            if (!formData.studentFirstName) newErrors.studentFirstName = 'El primer nombre es obligatorio.';
            if (!formData.studentLastName) newErrors.studentLastName = 'El apellido es obligatorio.';
            if (!formData.studentDob) newErrors.studentDob = 'La fecha de nacimiento es obligatoria.';
            if (!formData.studentGender) newErrors.studentGender = 'El género es obligatorio.';
            if (!formData.applyingGrade) newErrors.applyingGrade = 'El grado es obligatorio.';
            if (formData.studentEmail && !emailRegex.test(formData.studentEmail)) newErrors.studentEmail = 'Formato de email inválido.';
            if (formData.studentPhone && !phoneRegex.test(formData.studentPhone)) newErrors.studentPhone = 'Formato de teléfono inválido.';
        } else if (currentStep === 2) {
            if (!formData.guardianFirstName) newErrors.guardianFirstName = 'El nombre es obligatorio.';
            if (!formData.guardianLastName) newErrors.guardianLastName = 'El apellido es obligatorio.';
            if (!formData.guardianId) newErrors.guardianId = 'La cédula es obligatoria.';
            if (!formData.relationship) newErrors.relationship = 'El parentesco es obligatorio.';
            if (!formData.guardianEmail) newErrors.guardianEmail = 'El email es obligatorio.';
            else if (!emailRegex.test(formData.guardianEmail)) newErrors.guardianEmail = 'Formato de email inválido.';
            if (!formData.guardianPhone) newErrors.guardianPhone = 'El teléfono es obligatorio.';
            else if (!phoneRegex.test(formData.guardianPhone)) newErrors.guardianPhone = 'Formato de teléfono inválido.';
            if (!formData.address) newErrors.address = 'La dirección es obligatoria.';
        } else if (currentStep === 3) {
            if (!formData.howHeard) newErrors.howHeard = 'Este campo es obligatorio.';
            if (!formData.expectations) newErrors.expectations = 'Este campo es obligatorio.';
            if (formData.hasSpecialNeeds === 'Si' && !formData.specialNeedsDescription) newErrors.specialNeedsDescription = 'Por favor, describa las necesidades.';
        } else if (currentStep === 4) {
            if (!formData.acceptTerms) newErrors.acceptTerms = 'Debe aceptar los términos y condiciones.';
            if (!formData.authorizeData) newErrors.authorizeData = 'Debe autorizar el tratamiento de datos.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep()) {
            console.log("Formulario enviado:", formData);
            setSubmitted(true);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1: return (
                <div key={1} className="animate-fade-in-up space-y-6">
                    <h3 className="text-2xl font-bold text-brand-blue mb-4">Paso 1: Datos del Estudiante</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField id="studentFirstName" name="studentFirstName" label="Primer Nombre" value={formData.studentFirstName} onChange={handleInputChange} error={errors.studentFirstName} required />
                        <InputField id="studentLastName" name="studentLastName" label="Apellido" value={formData.studentLastName} onChange={handleInputChange} error={errors.studentLastName} required />
                        <InputField id="studentDob" name="studentDob" label="Fecha de Nacimiento" type="date" value={formData.studentDob} onChange={handleInputChange} error={errors.studentDob} required />
                        <div>
                             <label htmlFor="studentGender" className="block text-gray-700 font-semibold mb-2">Género <span className="text-brand-red">*</span></label>
                             <select id="studentGender" name="studentGender" value={formData.studentGender} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.studentGender ? 'border-red-500' : 'border-gray-300'}`}>
                                 <option value="">Seleccione...</option>
                                 <option value="Masculino">Masculino</option>
                                 <option value="Femenino">Femenino</option>
                                 <option value="Otro">Otro</option>
                             </select>
                             {errors.studentGender && <p className="text-red-500 text-sm mt-1">{errors.studentGender}</p>}
                        </div>
                        <div>
                            <label htmlFor="applyingGrade" className="block text-gray-700 font-semibold mb-2">Grado al que Aplica <span className="text-brand-red">*</span></label>
                            <select id="applyingGrade" name="applyingGrade" value={formData.applyingGrade} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.applyingGrade ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Seleccione...</option>
                                {["Maternal", "Pre-Kínder", "Kínder", "1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado", "6to Grado"].map(g => <option key={g} value={g}>{g}</option>)}
                            </select>
                            {errors.applyingGrade && <p className="text-red-500 text-sm mt-1">{errors.applyingGrade}</p>}
                        </div>
                        <InputField id="studentEmail" name="studentEmail" label="Email (opcional)" type="email" value={formData.studentEmail} onChange={handleInputChange} error={errors.studentEmail} />
                        <InputField id="studentPhone" name="studentPhone" label="Teléfono Celular (opcional)" type="tel" value={formData.studentPhone} onChange={handleInputChange} error={errors.studentPhone} />
                    </div>
                    <div>
                         <label htmlFor="medicalInfo" className="block text-gray-700 font-semibold mb-2">Información Médica Relevante</label>
                         <textarea id="medicalInfo" name="medicalInfo" rows={3} value={formData.medicalInfo} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange"></textarea>
                    </div>
                </div>
            );
            case 2: return (
                <div key={2} className="animate-fade-in-up space-y-6">
                    <h3 className="text-2xl font-bold text-brand-blue mb-4">Paso 2: Datos del Representante</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField id="guardianFirstName" name="guardianFirstName" label="Nombre del Representante" value={formData.guardianFirstName} onChange={handleInputChange} error={errors.guardianFirstName} required />
                        <InputField id="guardianLastName" name="guardianLastName" label="Apellido del Representante" value={formData.guardianLastName} onChange={handleInputChange} error={errors.guardianLastName} required />
                        <InputField id="guardianId" name="guardianId" label="Cédula del Representante" value={formData.guardianId} onChange={handleInputChange} error={errors.guardianId} required />
                        <div>
                            <label htmlFor="relationship" className="block text-gray-700 font-semibold mb-2">Parentesco <span className="text-brand-red">*</span></label>
                            <select id="relationship" name="relationship" value={formData.relationship} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.relationship ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Seleccione...</option>
                                {["Padre", "Madre", "Tutor", "Abuelo/a", "Otro"].map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                            {errors.relationship && <p className="text-red-500 text-sm mt-1">{errors.relationship}</p>}
                        </div>
                        <InputField id="guardianEmail" name="guardianEmail" label="Email del Representante" type="email" value={formData.guardianEmail} onChange={handleInputChange} error={errors.guardianEmail} required />
                        <InputField id="guardianPhone" name="guardianPhone" label="Teléfono del Representante" type="tel" value={formData.guardianPhone} onChange={handleInputChange} error={errors.guardianPhone} required />
                        <InputField id="guardianOccupation" name="guardianOccupation" label="Ocupación (opcional)" value={formData.guardianOccupation} onChange={handleInputChange} />
                     </div>
                      <div>
                         <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Dirección de Residencia <span className="text-brand-red">*</span></label>
                         <textarea id="address" name="address" rows={3} value={formData.address} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.address ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                         {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                </div>
            );
            case 3: return (
                 <div key={3} className="animate-fade-in-up space-y-6">
                    <h3 className="text-2xl font-bold text-brand-blue mb-4">Paso 3: Información Académica</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField id="previousSchool" name="previousSchool" label="Escuela Anterior (opcional)" value={formData.previousSchool} onChange={handleInputChange} />
                        <InputField id="lastGrade" name="lastGrade" label="Último Grado Cursado (opcional)" value={formData.lastGrade} onChange={handleInputChange} />
                    </div>
                     <div>
                        <label className="block text-gray-700 font-semibold mb-2">¿Necesidades Educativas Especiales?</label>
                        <div className="flex items-center space-x-4">
                            <label><input type="radio" name="hasSpecialNeeds" value="No" checked={formData.hasSpecialNeeds === 'No'} onChange={handleInputChange} className="mr-2 text-brand-blue focus:ring-brand-orange" />No</label>
                            <label><input type="radio" name="hasSpecialNeeds" value="Si" checked={formData.hasSpecialNeeds === 'Si'} onChange={handleInputChange} className="mr-2 text-brand-blue focus:ring-brand-orange" />Sí</label>
                        </div>
                    </div>
                    {formData.hasSpecialNeeds === 'Si' && (
                        <div className="animate-fade-in">
                            <label htmlFor="specialNeedsDescription" className="block text-gray-700 font-semibold mb-2">Descripción de Necesidades Especiales <span className="text-brand-red">*</span></label>
                            <textarea id="specialNeedsDescription" name="specialNeedsDescription" rows={3} value={formData.specialNeedsDescription} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.specialNeedsDescription ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                             {errors.specialNeedsDescription && <p className="text-red-500 text-sm mt-1">{errors.specialNeedsDescription}</p>}
                        </div>
                    )}
                    <div>
                        <label htmlFor="howHeard" className="block text-gray-700 font-semibold mb-2">¿Cómo se enteró de nuestra institución? <span className="text-brand-red">*</span></label>
                        <select id="howHeard" name="howHeard" value={formData.howHeard} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.howHeard ? 'border-red-500' : 'border-gray-300'}`}>
                            <option value="">Seleccione...</option>
                            <option value="Recomendación">Recomendación</option>
                            <option value="Redes Sociales">Redes Sociales</option>
                            <option value="Búsqueda en Internet">Búsqueda en Internet</option>
                            <option value="Publicidad">Publicidad</option>
                            <option value="Otro">Otro</option>
                        </select>
                        {errors.howHeard && <p className="text-red-500 text-sm mt-1">{errors.howHeard}</p>}
                    </div>
                     <div>
                         <label htmlFor="expectations" className="block text-gray-700 font-semibold mb-2">¿Qué espera del Centro Educativo? <span className="text-brand-red">*</span></label>
                         <textarea id="expectations" name="expectations" rows={3} value={formData.expectations} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-brand-orange focus:border-brand-orange ${errors.expectations ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                         {errors.expectations && <p className="text-red-500 text-sm mt-1">{errors.expectations}</p>}
                    </div>
                     <div>
                         <label htmlFor="additionalComments" className="block text-gray-700 font-semibold mb-2">Comentarios Adicionales (opcional)</label>
                         <textarea id="additionalComments" name="additionalComments" rows={3} value={formData.additionalComments} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-orange focus:border-brand-orange"></textarea>
                    </div>
                 </div>
            );
            case 4: 
                const summarySections = [
                    { title: 'Datos del Estudiante', data: { 'Nombre Completo': `${formData.studentFirstName} ${formData.studentLastName}`, 'Fecha de Nacimiento': formData.studentDob, 'Género': formData.studentGender, 'Grado': formData.applyingGrade, 'Email': formData.studentEmail || 'N/A', 'Teléfono': formData.studentPhone || 'N/A', 'Info Médica': formData.medicalInfo || 'N/A' } },
                    { title: 'Datos del Representante', data: { 'Nombre Completo': `${formData.guardianFirstName} ${formData.guardianLastName}`, 'Cédula': formData.guardianId, 'Parentesco': formData.relationship, 'Email': formData.guardianEmail, 'Teléfono': formData.guardianPhone, 'Dirección': formData.address } },
                    { title: 'Información Académica', data: { 'Necesidades Especiales': formData.hasSpecialNeeds, 'Descripción': formData.hasSpecialNeeds === 'Si' ? formData.specialNeedsDescription : 'N/A', 'Cómo nos conoció': formData.howHeard, 'Expectativas': formData.expectations } }
                ];
                return (
                 <div key={4} className="animate-fade-in-up space-y-6">
                    <h3 className="text-2xl font-bold text-brand-blue mb-4">Paso 4: Confirmación</h3>
                    <p className="text-gray-600">Por favor, revisa que toda la información sea correcta antes de enviar.</p>
                    <div className="space-y-6 bg-gray-50 p-6 rounded-lg border">
                        {summarySections.map(section => (
                             <div key={section.title}>
                                 <h4 className="text-lg font-semibold text-brand-blue border-b pb-2 mb-3">{section.title}</h4>
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    {Object.entries(section.data).map(([key, value]) =>(
                                        <div key={key}><strong className="text-gray-700">{key}:</strong> <span className="text-gray-600">{value}</span></div>
                                    ))}
                                 </div>
                             </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <label className="flex items-center">
                            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleCheckboxChange} className="h-5 w-5 text-brand-blue focus:ring-brand-orange border-gray-300 rounded" />
                            <span className="ml-3 text-gray-700">Acepto los términos y condiciones. <span className="text-brand-red">*</span></span>
                        </label>
                        {errors.acceptTerms && <p className="text-red-500 text-sm -mt-2 ml-8">{errors.acceptTerms}</p>}
                        <label className="flex items-center">
                            <input type="checkbox" name="authorizeData" checked={formData.authorizeData} onChange={handleCheckboxChange} className="h-5 w-5 text-brand-blue focus:ring-brand-orange border-gray-300 rounded" />
                            <span className="ml-3 text-gray-700">Autorizo el tratamiento de datos personales. <span className="text-brand-red">*</span></span>
                        </label>
                         {errors.authorizeData && <p className="text-red-500 text-sm -mt-2 ml-8">{errors.authorizeData}</p>}
                        <label className="flex items-center">
                            <input type="checkbox" name="authorizeImages" checked={formData.authorizeImages} onChange={handleCheckboxChange} className="h-5 w-5 text-brand-blue focus:ring-brand-orange border-gray-300 rounded" />
                            <span className="ml-3 text-gray-700">Autorizo el uso de imágenes para fines institucionales (opcional).</span>
                        </label>
                    </div>
                 </div>
            );
            default: return null;
        }
    };

    if (submitted) {
        return (
            <div className="bg-white py-20 animate-fade-in">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                     <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">¡Inscripción Enviada!</h2>
                    <p className="text-gray-600 text-lg">
                        Gracias por tu interés en Estrella Rodriguez. Hemos recibido tu información y nos pondremos en contacto contigo a la brevedad para confirmar los detalles y los próximos pasos.
                    </p>
                </div>
            </div>
        );
    }

    return (
         <div className="bg-gray-50 py-12 md:py-20 animate-fade-in">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Formulario de Inscripción</h2>
                        <p className="text-gray-600 mt-2">Completa el formulario para iniciar el proceso. ¡Estamos emocionados de conocerte!</p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <ProgressBar currentStep={currentStep} />
                        <form onSubmit={handleSubmit} noValidate>
                            {renderStep()}

                            <div className="mt-10 flex justify-between">
                                {currentStep > 1 && (
                                    <button type="button" onClick={handlePrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition-all duration-300">
                                        Anterior
                                    </button>
                                )}
                                <div className="flex-grow"></div>
                                {currentStep < 4 && (
                                    <button type="button" onClick={handleNext} className="bg-brand-orange hover:bg-brand-red text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                                        Siguiente
                                    </button>
                                )}
                                {currentStep === 4 && (
                                    <button type="submit" className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Enviar Inscripción
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrollment;