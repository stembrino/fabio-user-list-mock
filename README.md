# fabio-user-list-mock

Framework: `React/React Hooks` with `Typescript`

### Preview app: https://stembrino.github.io/fabio-user-list-mock

## Run project

1. Go to project package.json
2. Run command to install all dependencies: `npm install`
3. Run project: `npm start`

## Project Architecture

| COMPONENTS        | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Layout            | Store layouts like sidebar, navbar or others specific layout to position in main content page.                                       |
| UI                | Store all components that there is no relation with others, like button or loading icon.                                             |
| UserListComponent | The table list component. The table list component has strict dependencies with User Model. This user model has the following types: |
| AlertError        | Alert error component managed by AlertProvider                                                                                       |
| config            | Some complex config props to inject in component                                                                                     |
| contoroller       | A layer to allow organize and reuse code to some kind of process like validation or adapter objects                                  |
| mock              | Store some mock. only use in develop mode.                                                                                           |

| SERVICE      | Description                                             |
| ------------ | ------------------------------------------------------- |
| interfaces   | Store the schema from some Data Ttransefer Object (DTO) |
| UserServices | Layer to assembly the DTO                               |

| STORE           | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| add-user-store  | Add user state management.                                                               |
| alert-store     | Alert warn state management. This component appear to inform user when some request fail |
| user-list-store | User list state management                                                               |

| TOOLS            | Description                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| adapterAPI       | Design pattern in order to make easier replace some process.                                                   |
| helper           | Reuse some process without component relation                                                                  |
| injectDependency | Layer to avois instantiate directely in component. This make the unit test and the controll instatiate easier. |

---

## TODO List

| TODO                      | DESCRIPTION                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Dockerfile/Docker Compose | Easy way to deploy or run                                                                                                   |
| Unit Tests                | Mainly in service or Controller layer                                                                                       |
| Refactoring               | Remove context from User list and passing the User list as props to UserList component to make this component more reusable |
| Documentation             | Describe the properties of each component                                                                                   |
