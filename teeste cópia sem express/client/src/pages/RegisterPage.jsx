import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Cadastro</h1>
                <form className='max-w-md mx-auto'>
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder='seu@email.com' />
                    <input type="password" placeholder='Senha' />
                    <button className='primary'>Cadastre-se</button>
                    <div className='text-center py-2 tetx-gray-500'>
                        Já tem uma conta? <Link className='underline text-black' to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}