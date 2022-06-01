import React from 'react'
import { Link } from 'react-router-dom'

// import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Login</h2>
            <form action="/home">
                <p>
                    <label>CPF</label><br/>
                    <input type="text" name="cpf" required />
                </p>
                <p>
                    <label>Senha</label>
                    <Link to="/forget-password"><label className="right-label">Esqueceu sua senha?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>Novo por aqui? <Link to="/register">Crie uma nova conta</Link>.</p>
                <p><Link to="/">Voltar para página inicial</Link>.</p>
            </footer>
        </div>
    )
}
