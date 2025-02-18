# NewsHub

## Overview
NewsHub is a web application that allows users to fetch and display the latest news articles based on their selected country, category, and search query. The application uses the GNews API to retrieve news articles and provides a user-friendly interface to browse through the news.

## Features
- **Country Selection**: Users can select a country from a dropdown list to get news specific to that region.
- **Category Filtering**: Users can filter news by categories such as General, World, Business, Technology, Sports, and Health.
- **Search Functionality**: Users can search for specific news articles by entering a query.
- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used
- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript
- **Backend**: Python (Flask)
- **API**: GNews API

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/NewsHub.git
   cd NewsHub
   ```

2. **Set Up a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**:
   ```bash
   python backend.py
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://127.0.0.1:5000/`.

## Usage
1. **Select a Country**: Choose a country from the dropdown menu to get news specific to that region.
2. **Select a Category**: Choose a category to filter the news articles.
3. **Search for News**: Enter a search query in the input field to find specific news articles.
4. **Get News**: Click the "Get News" button to fetch and display the news articles.

## File Structure
- `backend.py`: The Flask backend that handles API requests and serves the frontend.
- `countries.csv`: A CSV file containing country codes and names.
- `index.html`: The main HTML file for the frontend.
- `script.js`: JavaScript file for handling frontend logic and API calls.
- `styles.css`: CSS file for styling the application.

## API Key
The application uses the GNews API, which requires an API key. You can obtain your own API key from [GNews](https://gnews.io/) and replace the `GNEWS_API_KEY` in `backend.py`.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [GNews API](https://gnews.io/) for providing the news data.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Flask](https://flask.palletsprojects.com/) for the web framework.

---

Enjoy using NewsHub to stay updated with the latest news from around the world!
