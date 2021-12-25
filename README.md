# File Transfer App API

##### Rest api using Node, Express, Mongo.

## Installation

##### After download or clone run npm install OR yarn install to install all the dependancies. Also rename example.env to .env and put all creadentials.

## This API is deployed in Heroku.  
#### API ---> https://file-transfer-ap.herokuapp.com

## To upload a file
### Request
#### POST /api/files   
### Body
#### filename and the file to be uploaded 

## To get data and download link of a particular file
### Request
#### GET /files/uuid

##  To download a particular file
### Request
#### GET /files/download/uuid

## To send mail with download link of a particular file to someone
### Request
#### POST /api/files/send
### Body
#### uuid, emailTo, emailFrom

