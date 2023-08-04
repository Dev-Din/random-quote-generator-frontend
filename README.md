# Quote Generator Frontend

This is the frontend for the Quote Generator application, which is built using React to provide a user interface for generating and managing quotes.

## Prerequisites

Before running the frontend, make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Getting Started

Follow the steps below to set up and run the frontend:

1. Clone the repository to your local machine.

2. Navigate to the frontend directory:

   ```
   cd quote_generator_frontend
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

   The development server will start running on `http://localhost:3000`. The application will automatically open in your default web browser.

## Components

The frontend consists of the following main components:

- `QuoteDisplay`: Displays the random quote fetched from the backend API.
- `Button`: Renders a button for various actions, such as fetching a random quote, creating a new quote, updating a quote, and deleting a quote.

## API Integration

The frontend communicates with the backend API to perform CRUD operations on quotes. The API endpoints are defined in the backend and can be found in the `app.rb` file.

## Styling

The frontend is styled using CSS and the `App.css` file. You can customize the styles to match your desired look and feel.

## Deployment

To deploy the frontend to a production environment, you can use a static site hosting service like Netlify or Vercel. Simply build the production version of the app and deploy the generated build files.

```
npm run build
```

## Contributing

If you would like to contribute to the development of this project, feel free to submit a pull request.

## Issues

If you encounter any issues or bugs, please open an issue on the GitHub repository.

---