## Frontend

# Quote Generator Frontend
![Quote Generator](/public/project-image.png)

The Quote Generator Frontend is a React-based web application that allows users to generate, manage, and explore random quotes. It communicates with the backend API to perform CRUD operations on quotes.

## Features

- **Random Quote Generation**: Users can click a button to fetch and display a random quote from a curated collection of quotes.

- **Create New Quote**: Users can add a new quote to the collection by providing the quote text and author name.

- **Update Quote**: Users can edit and update existing quotes in the collection with new quote text.

- **Delete Quote**: Users can delete unwanted quotes from the collection.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/quote-generator.git
   ```

2. Navigate to the frontend directory:

   ```
   cd quote-generator/frontend
   ```

3. Install frontend dependencies:

   ```
   npm install
   ```

### Starting the Application

1. Start the frontend development server:

   ```
   npm start
   ```

   The frontend development server will start on `http://localhost:3000`, and the application will automatically open in your default web browser.

## Components

The frontend consists of the following main components:

- `QuoteDisplay`: Displays the random quote fetched from the backend API.
- `Button`: Renders a button for various actions, such as fetching a random quote, creating a new quote, updating a quote, and deleting a quote.

## API Integration

The frontend communicates with the backend API to perform CRUD operations on quotes. The API endpoints are defined in the backend and can be found in the `app.rb` file.

## Styling

The frontend is styled using CSS and the `App.css` file. You can customize the styles to match your desired look and feel.

## Deployment

To deploy the application to a production environment, you can use a static site hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

If you would like to contribute to the development of this project, feel free to submit a pull request.

## Issues

If you encounter any issues or bugs, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

