<h1 align="center">Naemazon</h1>

N/B - APP IS STILL IN DEVELOPMENT

This is a JavaScript  full-stack e-commerce application. 
It is made of 3 parts, 
* The E-commerce Web App, where users interacts with the store & make payments.
* The Backend to handle all routings and controllers, orders and database.
* The Admin panel which handles user data, product data, add/creates products, reads and write sales metric,  compare revenue over thee last month, review incoming orders. 

The payment integration that will be used is stripe checkout.

Below is a way to fire up the app on local machine.

## .ENV

MONGO_URL = mongodb+srv://naeabah:Hsa17tyu@cluster0.4kugj.mongodb.net/shop?retryWrites=true&w=majority


PASS_SEC = 1234


JWT_SEC = 1234

## Links

- [Live](<Homepage url> "Live View")


## Screenshots


<img width="1440" alt="img1" src="https://user-images.githubusercontent.com/54932481/165635564-5d87ca36-d90f-4e85-9903-a94ce4f05f79.png">

<img width="1440" alt="img2" src="https://user-images.githubusercontent.com/54932481/165635612-93b12c09-6cfd-476c-b4de-ec97e065e8af.png">


## Available Commands

In the project directory, you can run:

### `"npm run dev": "concurrently "nodemon server"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You also need to run the server file as well to completely run the app. The page will reload if you make edits.
You will also see any lint errors in the console.

For running the server and app together I am using concurrently this helps a lot in the MERN application as it runs both the server (client and server) concurrently. So you can work on them both together.

### `npm start"`,

The admin is built using `create-react-app`. Change directory to admin and run separately. Follow the steps on the terminal when asked to run the app on another port. You will also see any lint errors in the console.

### `"npm run build": "react-scripts build"`,

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app will be ready to deploy!

## Built With

- JavaScript
- Node
- NPM
- Styled Components
- React

## Future Updates

- [ ] Customer Analytics
- [ ] Messaging System
- [ ] Cost Widget
- [ ] Sales Widget

## Author

**Nehemiah Abah**

- [Profile](https://github.com/nehyabah "Nehemiah Abah")
- [Email](mailto:nehyabah@gmail.com "Hi!")
- [Website](https://nehemiah.abah.vercel.app "Welcome")


Contributions, issues, and feature requests are welcome!
