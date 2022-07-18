import axios from 'axios';
import {
  createDictionary
} from '../index';

jest.mock('axios');

test('create dictionary', async () => {
  const result = await createDictionary();
  expect(result.status).toBe(201);
})

/*
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
*/