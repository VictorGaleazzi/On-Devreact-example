import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Recupere sua senha</h2>
            <h5>Digite seu email para enviarmos a nova senha</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Endereço de email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar email de recuperação</button>
                </p>
            </form>
            <footer>
                <p>Novo por aqui? <Link to="/register">Crie uma nova conta</Link>.</p>
                <p><Link to="/">Voltar para página inicial</Link>.</p>
            </footer>
        </div>
    )
}
