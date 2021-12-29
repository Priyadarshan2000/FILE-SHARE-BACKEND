# 🚀 FILE SHARE BACKEND
I Developed a **FILE SHARE** Application using **Node Js, Express Js, Mongo DB Backend And Frontend I use HTML, CSS, Vanilla JavaScript**. I also use  **SMTP SERVER**. in this Application. In this application, we transfer any type of File (**JPEG or JPG, PNG, SVG, DOCX, PDF, XLS** etc) Via **Email or Link Sharing**.it with a link so that other people can download it. I will also use nodemailer to send emails using free **SMTP** from our **Node Server**. I will deploy it on the **Heroku Server**. I will also schedule a script on the server so we could delete **24 hours** old files from the storage. In this application, we send  Max **2.5GB** of file.


### How did it work?
**FILE SHARE Application has a full Stack Project. backend portion works main In this project, I will build APIs for a File-sharing app using Node Js, Express Js and Mongo DB. I will upload a file in Node Js. For that, I will use a package called Multer. I will also use nodemailer to send emails using free SMTP from our node server. Finally, we will deploy this project on the live server. I will deploy it on the Heroku server. I will also schedule a script on the server so we could delete 24 hours old files from the storage.**

## 🚀 Functionalities:
- This **FILE SHARE** Application we transfer any type of File (**JPEG or JPG, PNG, SVG, DOCX, PDF, XLS** etc) Via **Email or Link Sharing**.it with a link so that other people can download it.
-  This **FILE SHARE** Application we send  Max **2.5GB** of file.
-   This **FILE SHARE** Application on the server, so we could delete **24 hours** old files from the storage.
- This **FILE SHARE** Application Link Expires in **24 hours**.

## 🚀 Setup instructions
- After Download or clone run, `npm install` OR `yarn install` to install all the dependencies.
- Rename `.env.example` into `.env` an put all credentials.
- Create a **Cluster in MongoDB**  copy the connection string And put it into the  **ATLAS_URI**  in the `.env`  File
![image](https://user-images.githubusercontent.com/62868878/147670055-33458cdc-72fa-4b3b-a505-846fa8bc6f26.png)
- Goto **[sendinblue](https://www.sendinblue.com/)** website goto **SMTP & API** and Copy the **SMTP Server,Port,Login,Master password** and put it into the  **SMTP_HOST,SMTP_PORT,MAIL_USER,MAIL_PASSWORD** accordingly   in the `.env`  File.
![image](https://user-images.githubusercontent.com/62868878/147671357-6e15b5d9-126c-423a-8662-22c206582c02.png)

## 🚀 Heroku Deployment

- Create a new app in the **[Heroku](https://dashboard.heroku.com/apps)** Connect to the Github Select the Project Choose a branch to deploy and Deploy Branch it take **2-5 min**.
- After Deployment is done Goto **Settings->Config Vars->Reveal Config Vars** add `.env` Variable **into the Config Vars**
![heroku ss (1) (1)](https://user-images.githubusercontent.com/62868878/147672484-91901b99-788c-4667-9687-c5feeb609bd4.png)

- Goto **Resources** and add **Heroku Scheduler** to run the scheduler script on the server so we could delete 24 hours old files from the storage

## Deployment Test

- After Deployment Goto **Postman Application**  **POST** method and  send the data 
![image](https://user-images.githubusercontent.com/62868878/147673339-2b5e5f7a-cd0d-4aa5-9776-02001a729021.png)

## 🚀 Requirements:
-  Any Browser (Google Chrome,Microsoft Edge,Safari,Brave etc.)
-**VSCODE**
- **MongoDB Atlas**
- **POSTMAN**

```bash
live server Extension (only for Vs code)
```
