# Welcome to "Breeds App"

This app will provide all what you need about dog breeds.

## How does it work?

Once you enter the app, you will see a landing page and a button that redirects you to home page. <br/>
From there you will be able to search dog breeds by name using the search bar, sort by name, weight and/or filter by temperament, creation (API, DB). <br/>
Once you make your choices, 8 different dog breeds will be display in card format per page and if you are interested you can click their image to learn more details about it. <br/>
You can also add them to favorites, in case a breed caughts your attention.<br/>
If you are not happy with your search you can always reset the app using the button located in the same sidebar as the sorts and filters.<br/>
Another feature is the creation of a breed through a form that must be completed with a name, temperamnt, life span, weight, height and image(from browser).<br/>

### Tips

To make this app work locally, you have to have run the script `npm start` in both folders (API and CLIENT).<br/>
Before that you will have to create an .env document in `API` folder and set the next environment variables:<br/>
DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, PORT, DB_NAME and DB_DIALECT=postgres<br/><br/>
Also, you have to do the same thing but in `CLIENT` folder with the following environment variable:<br/>
REACT_APP_API=http://localhost:3001

### Technologies

This app was coded with `JavaScript` and developed with:

- [Dogs API](https://thedogapi.com/)
- [Express](https://expressjs.com)
- [Sequelize](https://sequelize.org)
- [Postgres](https://www.postgresql.org)
- [React JS](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Styled-components](https://styled-components.com)

_made by sanavalos_
