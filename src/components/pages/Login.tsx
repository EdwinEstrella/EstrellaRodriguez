
import React, { useState } from 'react';
import type { Page } from '../../types';
import WarpShaderHero from '../ui/wrap-shader';

interface LoginProps {
    setCurrentPage?: (page: Page) => void;
}

const Login: React.FC<LoginProps> = ({ setCurrentPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Bypass: If password is "1234", allow access
        if (password === '1234') {
            if (setCurrentPage) {
                setCurrentPage('Dashboard');
            }
            return;
        }

        // For demo purposes, show error for any other password
        setError('Credenciales incorrectas. Usa "1234" como contraseña para acceder al dashboard.');
    };

    return (
        <WarpShaderHero onBack={() => setCurrentPage?.('Inicio')}>
            <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
                <div>
                    <h2 className="text-center text-3xl font-bold text-white mb-2">
                        Acceso al Portal
                    </h2>
                    <p className="text-center text-white/80 text-sm">
                        Ingresa a tu cuenta para ver el progreso.
                    </p>
                    <p className="text-center text-white/70 text-xs mt-2">
                        Usa contraseña "1234" para acceder al dashboard
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/20 border border-red-400/30 text-red-100 px-4 py-3 rounded-md text-sm backdrop-blur-sm">
                            {error}
                        </div>
                    )}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Usuario</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-white/30 placeholder-white/50 text-white bg-white/10 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent sm:text-sm transition-all"
                                placeholder="Usuario o Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-white/30 placeholder-white/50 text-white bg-white/10 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent sm:text-sm transition-all"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-400 focus:ring-purple-300 border-white/30 rounded bg-white/10"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                                Recordarme
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-white/80 hover:text-white transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 backdrop-blur-sm"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </WarpShaderHero>
    );
};

export default Login;
