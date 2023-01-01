# Book-Record-Managment

notebook

This is an application called Book-record-management/API

## endpoints

## /Users
POST:Create a new user and we can pass the body(add)
GET: Get all list of user kind data

## /users/{id}
GET: Get a user by their ID
PUT: Update a server by ID (smillar to post)
DELETE: Delete a user by their ID(Check if the user still has an issued book & is there any time to be collected from the user )

## /users/subscription-details/{id} 
GET: Get user subscription details
1. Date of subscription
2. Vaild till ??
3. Fine if any ??

## /books
GET: Get all the books
POST:Add a new book

## /books/{id}
GET: Get a book by id
POST:Update a book by id

## /books/issued
GET: Get all issued books here

## /books/issued/withFine
GET: Get all issued books with fine

## Subscription Types
Basic plan(3 months),Standard plan(6 months),Premium plan(12 months)

If user has an issued book and the issued book is to be returned at 30-12-22,If user missed the date to return, then user gets a fine of Rs. 50/-

If user has an issued book and the issued book is to be returned at 30-12-22,If user missed the date to return, and the users subscription also got expired, then user need to pay a fine of 150/- (100+50)


mongodb+srv://Srihari:<password>@cluster0.4jwdktt.mongodb.net/?retryWrites=true&w=majority


