# fabio-user-list-mock

Framework: React with Typescript

Chalange objectives.
● Show a list of users. (1)
● This list must only show the basic information about each user
(id, avatar, username, email, city, hasCompany)
● Basic functionalities:
● Show more user details when selected.(2)
● Action to remove user from the list.
● Action to edit and save any user detail.
● The selected line should highlight itself in the following primary  
color: #d0433c
● The hover line should highlight itself in the following primary color:
#e59f9b
● On the text columns, format all strings to bold and uppercase
● The table header must be fixed or sticky
● Bonus:
● Write a short documentation.

## Run project

1. Go to package.json level: `cd user-list-mock`
2. Run command to install all dependencies: `npm install`
3. Run project: `npm start`

## Architecture project

| FOLDER            | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Layout            | Store layouts like sidebar, navbar or others specific layout to position in main content page.                                       |
| UI                | store all components that there is no relation with others, like button or loading icon.                                             |
| UserListComponent | The table list component. The table list component has strict dependencies with User Model. This user model has the following types: |

### service

### store

### tools

## Backlog TODO

| TODO                       | DESCRIPTION                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Dosckerfile/Docker Compose | Easy way to deploy or run                                                                                                   |
| Unit Tests                 | Mainly in service or Controller layer                                                                                       |
| Refactoring                | Remove context from User list and passing the User list as props to UserList component to make this component more reusable |
