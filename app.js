// importa o módulo express para criar um aplicativo web
import express from 'express'

// inicia o aplicativo express
const app = express();

// middleware para processar o corpo das requisições JSON
app.use(express.json());

// criação de um usuário e senha válidos para autenticação
const validUser = {
    username:'testuser', // usuário válido
    password:'testpass' // senha válida
};
// rota para o login, verifica as credenciais fornecidas
app.post('/login', (req, res) => {
    // extrai o nome e senha do corpo da requisição
    const { username, password } = req.body;

    // verifica se as credenciais fornecidas são iguais as credenciais válidas
    if (username === validUser.username && password === validUser.password) {
        // se as credencias forem válidas, retorna status 200 (OK)
        return res.status(200).json({ message: 'Login realizado com sucesso!' });
} else {
        // se as credenciais não forem válidas, retorna status 401 (não autorizado)
        return res.status(401).json({ message: 'Credenciais invalidas!' })
    }
});

// exporta o aplicativo para que possa ser usado em outros arquivos
export default app;