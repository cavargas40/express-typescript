import request from 'supertest';
import app from '../src/app';
import { OK } from 'http-status';

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/')
      .expect(OK);
  });

  it('should check body of the request', async done => {
    const response = await request(app).get('/');

    expect(response.status).toBe(OK);
    expect(response.body.message).toBe('Hello World!');
    
    done();
  });

  it('should check if azu is kireida', async done => {
    const azu = 'kireida';

    expect('kireida').toBe(azu);
    
    done();
  });
});
