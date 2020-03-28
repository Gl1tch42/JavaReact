const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new Incident', async () => {
        const res = await req(app)
            .post('/incidents')
            .set('Authorization', 'f3596e9b')
            .send({
                title: "caso teste JEST",
	            description: "detalhes do caso...",
	            value: 2000
            });
        expect(res.body).toHaveProperty('id');  
    });
});