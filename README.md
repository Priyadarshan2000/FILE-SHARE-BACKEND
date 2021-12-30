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
- **VSCODE**
- **MongoDB Atlas**
- **POSTMAN**

```bash
live server Extension (only for Vs code)
```

Click on the **Click Here** to see the **File Share** Demo on YouTube.

| Name of Script | YouTube Link |  Developer | Tools Used 
| --- | --- | --- | --- 
|**File Share**| [Click Here]()| [Priyadarshan Ghosh](https://github.com/Priyadarshan2000)| **Node Js, Express Js, Mongo DB [Backend] HTML, CSS, Vanilla JavaScript [Frontend],SMTP SERVER,Heroku Server,sendinblue,Github[For Deploy]**

## 🚀 Code Snippet [Backend]
![image](https://user-images.githubusercontent.com/62868878/147675761-780b7f4d-aef4-4738-9a0c-db93291f0153.png)
## 🚀 Code Snippet [Frontend]
![image](https://user-images.githubusercontent.com/62868878/147675965-de72a18b-a230-4e34-9721-da6a2bd66bdf.png)

# 🚀 FILE SHARE UI

## 🚀 Home Screen
![image](https://user-images.githubusercontent.com/62868878/147728151-d84fafb1-9006-4ac6-bad9-d9073bb30328.png)
## 🚀 Drag Files For Upload
![image](https://user-images.githubusercontent.com/62868878/147728320-42e7965f-4186-4530-b1dd-f1b20d5c08db.png)
## 🚀 Uploading Progress Bar
![image](https://user-images.githubusercontent.com/62868878/147728480-3e0d8bb8-750c-407c-b423-2570fde0fc19.png)
## 🚀 Download link copy to clipboard
![Screenshot (167)](https://user-images.githubusercontent.com/62868878/147728657-b4f07d4a-2b21-4403-93bc-0856beda5935.png)

## 🚀 File Send via Email Enter Your email &  Receiver's email
![image](https://user-images.githubusercontent.com/62868878/147729529-da6724b4-9091-4a91-bce1-09eaad29d62c.png)
## 🚀 Email Sent
![Screenshot (171)](https://user-images.githubusercontent.com/62868878/147729791-9371eb90-b52b-4359-847b-f7509e1271d9.png)

## 🚀 Email With Download File Link
![image](https://user-images.githubusercontent.com/62868878/147729906-5a784595-4fa1-4802-ab11-30829b1a258e.png)

## 🚀 File Download Screen
![image](https://user-images.githubusercontent.com/62868878/147730120-08b6fc06-fc1a-430d-b008-62cbc2bcc8c9.png)
## 🚀 File Downloading...
![image](https://user-images.githubusercontent.com/62868878/147730215-cefdf66e-478a-4f4b-a146-e8f90ce84526.png)



