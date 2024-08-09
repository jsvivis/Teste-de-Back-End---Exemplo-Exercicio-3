// importa modulo supertest para fazer requisições http
import request from 'supertest'
//importa função 'expect' do chai para asserções
import { expect} from 'chai'
//importa aplicativo 'app.js'
import app from '../app.js'

//descrição
describe ('Teste de autenticação de usuario', () => {
        // teste para verificar se o login funciona com credenciais validas
    it ('deve aceitar credenciais válidas', async () => {
        // envia requisição para rota de login com credenciais validas
    const res = await request(app)
   .post('/login')
   .send({ username: 'testuser', password: 'testpass' });
    //  asserções 1 - espera que seja retornado status 200 e o body
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Login realizado com sucesso!');
    });

    // teste para verificar se o login funciona com credenciais invalidas
    it ('deve aceitar credenciais inválidas', async () => {
        // envia requisição para rota de login com credenciais invalidas
    const res = await request(app)
        .post('/login')
        .send({ username: 'wronguser', password: 'wrongpass' });
    //  asserções 2 - espera que seja retornado status 401 e a mensagem do body
    expect(res.status).to.equal(401);
    expect(res.body.message).to.equal('Credenciais invalidas!');
    });
})