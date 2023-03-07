# Mentalyc web app

This project is a responsive file upload interface with a progress bar for tracking the processing state of the current file. It consists of three components - the main container, the upload component (button + modal), and the progress component.

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository to your local machine
2. Install the necessary dependencies by running `npm install` or `yarn install`
3. Start the development server by running `npm start` or `yarn start`

This will start the application on your local machine.

## Test

`yarn test` to launch the test runner in the interactive watch mode.

## Usage

To use the application, follow these steps:

1. Click on the main "Upload" button to open the modal window
2. Select a note type from the drop-down menu and add a name to enable the "upload" button
3. Click on the "finish upload" button to initiate the file upload process (we will skip the actual file upload process for simplicity)
4. After the file has been uploaded, the modal window will close, and the user will be presented with a table of all processing files, along with a progress bar representing the processing state of each task
5. Each processing task can be canceled by clicking on the delete button
6. Each progress bar will update with a fake timer, and when a bar reaches 100%, it will disappear from the list

## Libraries and Technologies Used

This project uses the following libraries and technologies:

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Sass: A CSS preprocessor that adds features such as variables, mixins, and nesting to CSS
- Bootstrap: A CSS framework for building responsive and mobile-first websites

## Deployment

This project can be deployed using any hosting provider that supports static site hosting. To deploy the project, follow these steps:

1. Build the project by running `npm run build` or `yarn build`
2. Upload the contents of the `build` folder to your hosting provider
