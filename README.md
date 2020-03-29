# Spendesk

## [Gokce Bulbul](https://github.com/moonston) @moonstone  Spendesk Coding Test 

## TODO : All transfers

## Installation Docker
```./console.sh docker install```

 - It creates 2 docker container and run migration for DB
 
    -- for more console command pls run  ./console.sh 

## API

- You can import Postman collection (/tools/postman) for some API Requests


- wallet-save : Create a new wallet
    
    ```/wallet/save```
    
  Body Params: 
    ``` 
           "currency": "USD",
           "isMaster": true,
           "companyId": "1",
           "currentBalance": 123
    ```
  
- wallet-list : List wallets for company
    
    ```/wallet/list/1```
 
 
- card-save : Create a new card
 
    ```/card/save```
     
    Body Params: 
            "walletId": "1",
            "currency": "12",
            "isMaster": true,
            "companyId": "1",
            "currentBalance": 123,
            "cardNumber": "1111222233334444",
            "expirationDate" : "2030-03-28",
            "cvv": "060",
            "userId": 1

- card-list : List cards for user
 
    ```/card/list/1```
     
- card-load : Card load from wallet
 
    ```/card/load/1```
     
    Body Params: 
            "amount": "60",
            "userId": 1
- card-unload : Card unload from wallet
 
    ```/card/unload/1```
     
    Body Params: 
            "amount": "60",
            "userId": 1
     
- card-block : Block the card for user

    ```/card/block/1```
    
- card-unblock : UnBlock the card for user

    ```/card/unblock/1```