# bearer-auth

## LAB - 07

## **Deployment Test**
## **Author: Farah AlWahaibi**

[PR LINK](https://github.com/farahalwahaibi/bearer-auth/pull/1)

[Heroku APP](https://bearer-auth-2021.herokuapp.com/)

[Report Test](https://github.com/farahalwahaibi/bearer-auth/actions)

## **Setup**
* .env requirements
  * **PORT** - 3000
  * **MONGOOSE_URI**
  * **SECRET** - used to create jwt


## **Running the app**
* **npm start**
* **Endpoints:**
   * **https://bearer-auth-2021.herokuapp.com/** home route (/)
   * **https://bearer-auth-2021.herokuapp.com/signup** for signup (/signup)
   * **https://bearer-auth-2021.herokuapp.com/signin** for signin (/signin)
   * **https://bearer-auth-2021.herokuapp.com/users** for get users (/users)
   

## **Tests**
* **404** on a bad route
* **404** on a bad method
* The correct status codes and returned data for each REST route
  * Create a record using POST
  * Read a list of records using GET
  * Read a record using GET
  * Update a record using PUT
  * Destroy a record using DELETE

***

## **UML Diagram**


![uml-diagram](Capture.JPG)


***Thank you!!***
