## Technologies Used

node >= 16.16.0.  
I've use ES6 modules in my nodejs code. It makes context switching between frontend code and server side code easier for me.

## Dependicies
axios for http requests    
jest for running tests  

## How To Run
You have to set an environment variable with the auth key like below.   
```AUTHTOKEN='some_auth_key_here_please' npm test```

## Observations   
dictionaryapi create  
  ✓ create dictionary - Working as expected.  
  
dictionaryapi delete  
  ✕ delete dictionary - Failing. The documentation states that it should return a 200 status code but it is returning a 204 status code.  
  ✓ dictionary does not exist - Working as expected.  
  
dictionaryapi create or modify pair  
  ✕ create a new pair - Failing. The documentation states this api should return a 201 status code but it is returning a 200 status code.  
  ✕ modify existing pair - Failing. The documentation states this api should return a 201 status code but it is returning a 200 status code. 
  
Unauthorized tests  
  ✓ create dictionary - Working as expected. Returns status code 401. 
  ✓ delete dictionary - Working as expected. Returns status code 401. 
  ✓ create/modify pair - Working as expected. Returns status code 401. 

I also noticed that none of the delete methods delete data although the responses returned are stating that the delete was successful. I queried those dictionaries/keys again with the Get all Keys and Get a Value api's and the deleted dictionary or value that I requested to be deleted still was returned.
