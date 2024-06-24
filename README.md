# CRUD Project

A simple CRUD (Create, Read, Update, Delete) application using local storage, React.js, Bootstrap, and custom CSS.

## Features

- Create new items
- Read and display items
- Update existing items
- Delete items
- Persistent storage using local storage

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces
- **Bootstrap**: A CSS framework for responsive design
- **CSS**: Custom styles for additional design
- **Local Storage**: For storing data locally in the browser

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone  https://github.com/Mydeepan/CRUD-project.git
    ```

2. Navigate to the project directory:
    ```sh
    cd crud-project
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm start
    ```

5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Usage

1. **Create**: Use the form to add a new item. It will be displayed in the list below.
2. **Read**: View the list of items stored in local storage.
3. **Update**: Click the "Edit" button to modify an item and save changes.
4. **Delete**: Click the "Delete" button to remove an item.

## Project Structure

- `src`
  - `components`
    - `ItemForm.js`: Form component for creating and updating items
    - `ItemList.js`: Component for displaying the list of items
  - `App.js`: Main application component
  - `index.js`: Entry point of the React application
  - `styles.css`: Custom CSS styles

## Custom CSS

Additional styles are included in `styles.css` to enhance the appearance beyond Bootstrap's defaults.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

