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
  * **SECRET**


## **Running the app**
* **npm start**
* **Endpoints:**
   * **/food** or **/clothes** will return a json list of all current data 
   * **/food/:id** or **/clothes/:id** will return specific data for specific id
   * **POST** requests to **/food** or **/clothes** will create new data 
   * **PUT** requests to **/food/:id** or **/clothes/:id** will update current data depends on it's provided id
   * **DELETE** requests to **/food/:id** or **/clothes/:id** will delete specific data depends on it's provided id


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
