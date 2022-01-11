'use strict';

const server = require('../app.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing my HTTP server', () => {

  it('Should be able to response to a POST to /message', async () => {
    let response  = await request.post('/message?text=testText&author=testAuthor');

    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('testText');
    expect(response.body[0].author).toEqual('testAuthor');


  });
});