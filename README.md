## Marmeto Assignment

This project is a simple web application that allows users to select between different categories (Men, Women, Kids) and view corresponding product listings fetched from an API. The application is built using HTML, CSS, and JavaScript without any external libraries or frameworks.

### Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Open the `index.html` file in your web browser.

### Features

- **Category Selection**: Click on the tabs (Men, Women, Kids) to switch between different product categories.
- **Product Display**: Products are fetched from an external API based on the selected category and displayed dynamically on the page.
- **Responsive Design**: The web application is responsive and adapts to different screen sizes (mobile, tablet, desktop) using CSS media queries.

### Dependencies

This project does not have any external dependencies and runs entirely on vanilla HTML, CSS, and JavaScript.

### File Structure

- **index.html**: The main HTML file containing the structure of the web page.
- **style.css**: The stylesheet file containing the CSS styles for the application.
- **script.js**: The JavaScript file containing the logic for fetching data and updating the DOM based on user interactions.

### API Endpoint

The product data is fetched from the following API endpoint:

- [Product Data API](https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json)

### How It Works

1. The user can click on the tabs to select a specific product category (Men, Women, Kids).
2. When a tab is clicked, an API request is made to fetch the corresponding product data for that category.
3. The fetched product data is then dynamically displayed on the page, including product images, titles, vendors, prices, and discount information.



