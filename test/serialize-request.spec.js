import ReqJSON from 'req-json';
import serializeRequest from '..';

it('serialize request', async () => {
  const reqJSON = new ReqJSON();
  const resource = reqJSON.resource('/api/item/:id');

  reqJSON.use(async (ctx) => {
    ctx.response = serializeRequest(ctx);
    return false;
  });

  const res1 = await resource.get();
  const res2 = await resource.get({
    id: 1,
  });
  const res3 = await resource.get({
    id: 1,
  }, {
    headers: {
      'X-Header': 'a',
    },
  });
  expect(res1).toEqual(expect.any(String));
  expect(res2).toEqual(expect.any(String));
  expect(res3).toEqual(expect.any(String));
  expect(res1).not.toBe(res2);
  expect(res1).not.toBe(res3);
  expect(res2).not.toBe(res3);
});
