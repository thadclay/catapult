import requestor from './helpers/requestor';

const baseUrl = 'https://dictionary.iachieved.it/dictionary';

export async function createDictionary() {
  const url = baseUrl;
  try {
    const result = await requestor(url, 'post', null);
    return result;
  } catch (err) {
    return err;
  }
}

export async function createModifyPair(dictionaryId, pairId, value) {
  const url = `${baseUrl}/${dictionaryId}/keys/${pairId}`;
  const opts = { value };
  try {
    const result = await requestor(url, 'post', opts);
    return result;
  } catch (err) {
    return err;
  }
}

export async function getAllKeys(dictionaryId) {
  const url = `${baseUrl}/${dictionaryId}/keys`;
  try {
    const result = await requestor(url, 'get', null);
    return result;
  } catch (err) {
    return err;
  }
}

export async function getValue(dictionaryId, key) {
  const url = `${baseUrl}/${dictionaryId}/keys/${key}`;
  try {
    const result = await requestor(url, 'get', null);
    return result;
  } catch (err) {
    return err;
  }
}

export async function deletePair(dictionaryId, pairId) {
  const url = `${baseUrl}/${dictionaryId}/keys/${pairId}`;
  try {
    const result = await requestor(url, 'delete', null);
    return result;
  } catch (err) {
    return err;
  }
}

export async function deleteDictionary(dictionaryId) {
  const url = `${baseUrl}/${dictionaryId}`;
  try {
    const result = await requestor(url, 'delete', null);
    return result;
  } catch (err) {
    return err;
  }
}
