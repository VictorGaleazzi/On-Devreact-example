import React from 'react'
import { Link } from 'react-router-dom'

// import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Cadastro</h2>
            <form action="/home">
                <div className='left_form'>
                    <p>
                        <label>Nome:</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Sobrenome:</label><br/>
                        <input type="text" name="last_name" required />
                    </p>
                    <p>
                        <label>Data de Nascimento:</label><br/>
                        <input type='date' name="born_date" required />
                    </p>
                    <p>
                        <label>CPF:</label><br/>
                        <input type="text" name="cpf" required />
                    </p>
                    <p>
                        <label>Gênero:</label><br/>
                        <input type="text" name="gender" required />
                    </p>
                    <p>
                        <label>Telefone/Celular:</label><br/>
                        <input type="tel" name="phone_number" required />
                    </p>
                    <p>
                        <label>Rua:</label><br/>
                        <input type="text" name="street" required />
                    </p>  
                </div>
                <div className='right_form'>
                    <p>
                        <label>Bairro:</label><br/>
                        <input type="text" name="neighborhood" required />
                    </p>
                    <p>
                        <label>Nº:</label><br/>
                        <input type="number" name="number" required />
                    </p> 
                    <p>
                        <label>CEP:</label><br/>
                        <input type="text" name="cep" required />
                    </p> 
                    <p>
                        <label>Nome da Mãe:</label><br/>
                        <input type="text" name="street" required />
                    </p>
                    <p>
                        <label>Nome do Pai:</label><br/>
                        <input type="text" name="street" required />
                    </p>    
                    <p>
                        <label>Seu melhor email:</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <label>Defina uma senha:</label><br/>
                        <input type="password" name="password" required />
                    </p>
                    <p>
                        <label>Confirme a senha:</label><br/>
                        <input type="password" name="confirm_password" required />
                    </p>             
                </div>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Eu concordo com todos os <a href="https://google.com" target="_blank" rel="noopener noreferrer">termos de serviço</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Cadastrar</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Voltar para página incial</Link>.</p>
            </footer>
        </div>
    )

}
