'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');
const request = supertest(server.app);



describe('testing',()=>{

    it('test the food table', async () => {
        const response = await request.get('/food');
        expect(response.status).toEqual(200);
    });

    it('test the clothes table ', async () => {
        const response = await request.get('/clothes');
        expect(response.status).toEqual(200);
    });


    it('404 on a bad route',async()=>{

        const response = await request.get('/notvalid');
        expect(response.status).toEqual(404);

    })

    it('404 on a bad method', async()=>{
        const response = await request.post('/notvalid');
        expect(response.status).toEqual(404);

    })
    //it('500 if no id in the query string', async()=>{
      //  const response = await request.get(`/clothes?${id=" "}`);
      //  expect(response.status).toEqual(500);

   // })

  //  it('200 if the id is in the query string', async()=>{
     //   const response = await request.get(`/clothes?${id=1}`);
      //  expect(response.status).toEqual(200);

    });

