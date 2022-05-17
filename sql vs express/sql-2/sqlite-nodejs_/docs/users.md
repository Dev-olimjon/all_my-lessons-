# USERS
**`POST`**/register

**Request:**
```json
{
  "name": "Olimjon",
  "age": "13",
  "username":"makhmudov",
  "password":"max2000"
}
```


**Response:**
```json
{
  "message":"Register succseful!",
  "user":{
    "id":"0",
    "name":"Olimjon",
    "age":"13",
    "username":"makhmudov"
  }
}
```

**`POST`**/login
```json
{
  "username":"olimjonmahmudov26156@gmail.com",
  "password":"max2000"
}
```
**RESPONSE 200**

```JSON
{
  "message":"succsefull"
}
```

**RESPONSE 404**

```JSON
{
  "message":"401"
}
```

**RESPONSE 401**

![alt](https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg)


# END


