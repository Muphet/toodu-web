## Toodu Web

Toodu Web is the frontend for [Toodu API](https://github.com/bhnywl/toodu-api).

It is a Progressive Web App for collaborative task management, built in React using [create-react-app](https://github.com/facebook/create-react-app).

A live demo can be found [here](https://toodu.surge.sh). You can log in as the demo account:

* `demo@example.com`
* `demonstration`

Note. The API is hosted on a free Heroku dyno so can be slow to spin up.

### Features

* Manage projects & tasks with other members of your team
* Real time updates via websockets
* PWA - install to the home screen of your Android phone
* Application state persisted across page refreshes
* Service worker caching to increase start up speed on return visits
* Read-only offline mode so you can still see your tasks when you don't have an internet connection

### Feature Todos

* User mentions in comments
* Pagination is needed
* Loaders while API data is fetched where relevant
