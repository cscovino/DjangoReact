# Bands App

This is an app that let you save some information of your favorites music bands. Specifictly you can save the name, url of an image and a bio.

## Getting Started

To run and test the app first you need a copy of the project. For this you have to run this command in the command-line

```
 git clone https://cscovino@bitbucket.org/cscovino/djangoreact.git
```

This assumes that you have installed [git](https://git-scm.com/).

### Prerequisites

It is needed to have installed [Python 3.6.4](https://www.python.org/downloads/) and [Yarn](https://yarnpkg.com/lang/en/docs/install/).
Or other package manager.

### Installing

Once you have cloned the repository you need to install some packages.

#### Frontend folder

Within the frontend folder you have to run these commands to install some packages that are necessary to run the app.

```
 yarn add create-react-app
 yarn add axios
 yarn add babel-plugin-transform-decorators-legacy
 yarn add react-bootstrap
 yarn add react-redux
 yarn add react-router-dom
 yarn add redux
 yarn add react-logger
 yarn add redux-promise-middleware
 yarn add redux-thunk
```

This assumes you are using yarn as your package manager.

#### Project Folder (djangoreact folder)

Whithin the project folder you have to install django and django REST framework.
To install them you have to run these commands.

```
 pip install django
 pip install djangorestframework
```

## Run on localhost

Once you have installed all, to run the app you need to open two consoles, one to run the django app and the other to run the react app.

### Django

Within the project folder run this command.

```
 python manage.py runserver
```

### React

Within the frontend folder run this command.

```
 yarn start
```

This open the app in the browser automatically.

## Built With
* [Django](https://www.djangoproject.com/) - The web framework for the backend.
* [React](https://reactjs.org/) - The js library for buld the user interface.
* [Redux](https://redux.js.org/docs/introduction/) - A js state management library. 
