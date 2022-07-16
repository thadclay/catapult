import { 
  createDictionary,
  deleteDictionary,
  createModifyPair,
  getValue
} from '../dictionaryApi';

describe('dictionaryapi create', () => {
  test('create dictionary', async () => {
    const result = await createDictionary();
    expect(result.status).toBe(201);
    expect(result.data).toHaveProperty('id');
    expect(typeof result.data.id).toBe('string');
  })
})

describe('dictionaryapi delete', () => {
  let dictionary = null;
  beforeAll(async () => {
    const result = await createDictionary();
    dictionary = result.data;
  })

  test('delete dictionary', async () => {
    const result = await deleteDictionary(dictionary.id);
    expect(result.status).toBe(200);
  })

  test('dictionary does not exist', async () => {
    const result = await deleteDictionary();
    expect(result.status).toBe(404);
    expect(result.statusText).toBe('Not Found');
  })
})

describe('dictionaryapi create or modify pair', () => {
  let dictionary = null;
  beforeAll(async () => {
    const result = await createDictionary();
    dictionary = result.data;
  })

  test('create a new pair', async () => {
    const result = await createModifyPair(dictionary.id, 'thad', 1234);
    expect(result.status).toBe(201);
  })

  test('modify existing pair', async () => {
    await createModifyPair(dictionary.id, 'modifyMe', 9999);
    const createdPairResult = await getValue(dictionary.id, 'modifyMe');
    expect(createdPairResult.status).toBe(200);
    expect(createdPairResult.data.value).toBe(9999);
    const updatePairResult =
      await createModifyPair(dictionary.id, 'modifyMe', 4321);
    expect(updatePairResult.status).toBe(201);
    const modifiedPairResult = await getValue(dictionary.id, 'modifyMe');
    expect(modifiedPairResult.status).toBe(200);
    expect(modifiedPairResult.data.value).toBe(4321);
  })
})

describe('Invalid authorization header', () => {
  beforeAll(() => {
    process.env.AUTHTOKEN = 'invalid_token';
  })

  test('create dictionary', async () => {
    const result = await createDictionary();
    expect(result.status).toBe(401);
  })

  test('delete dictionary', async () => {
    const result = await deleteDictionary('123456');
    expect(result.status).toBe(401);
  })

  test('create/modify pair', async () => {
    const result = await createModifyPair('123456', 'thad', 4444);
    expect(result.status).toBe(401);
  })
})
