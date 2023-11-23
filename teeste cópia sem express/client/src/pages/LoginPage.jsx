import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Login</h1>
                <form className='max-w-md mx-auto'>
                    <input type="email" placeholder='seu@email.com' />
                    <input type="password" placeholder='senha' />
                    <button className='primary'>Login</button>
                    <div className='text-center py-2 tetx-gray-500'>
                        Ainda não tem uma conta? <Link className='underline text-black' to={'/register'}>Cadastre-se aqui!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}