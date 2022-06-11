# fabio-user-list-mock

Created to mock a list of users following some specifications.

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

| TODO                       | DESCRIPTION                           |
| -------------------------- | ------------------------------------- |
| Dosckerfile/Docker Compose | Easy way to deploy or run             |
| Unit Tests                 | Mainly in service or Controller layer |
