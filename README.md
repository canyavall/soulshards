This project is only to check how to work with react-redux-firebase plugin and to check different tools and structures for data tables and forms.

Actually, only the tab resources is working and we can created delete and edit resources

To run it:
 - Create a firebase account  with the table resources inside
 - create the file fbConfig.js with this configurations:
 ```
  export const fbConfig = {
     apiKey: "******************************",
     authDomain: "******************************",
     databaseURL: "******************************",
     projectId: "******************************",
     storageBucket: "f******************************",
     messagingSenderId: "******************************"
 }
 ```

Remember that in firebase you need to allow all users to use your fabase database, in the future I'll create the authentication process and start using it.