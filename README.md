# 🎬 Movie Search App  

A simple React-based movie search application that fetches movie data from the OMDB API. Users can **type a movie name** and **press Enter** or **click on the search icon** to fetch and display movie details.  

## 🚀 Features  
- Search for movies by title  
- Displays movie posters, titles, and release years  
- Uses the OMDB API for fetching movie data  
- Optimized with `useEffect` for API calls  
- Keeps fetched results even when the search input is cleared  
- Shows loading and error messages  

## 🛠️ Tech Stack  
- **React.js** (Frontend Framework)  
- **OMDB API** (Movie Data Source)  
- **CSS** (Styling)  

## 🔧 Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/jollyp-peo/movie-search-app.git
   cd movie-search-app

   Website URL:        https://jolly-brioche-b5cf6d.netlify.app

2.   **Install dependencies**

    ```bash
    npm install
3.  **Create a .env file in the root directory and add your OMDB API key:**

    VITE_OMDB_API_KEY=your_api_key_here
    
4.  **Run the application**

    npm run dev
5. **🎥 Usage**
   1. Enter a movie name in the search bar.
   2. Press Enter to fetch movie results.
   3. The app displays matching movies with posters, titles, and release years.
   4. If no movie is found, an error message is shown.
   5. Movies stay visible even if you clear the input.

6. **📂 Project Structure**

/movie-search-app
│── /src
│   ├── /components
│   │   ├── SearchBar.js
│   │   ├── MovieCard.js
│   ├── /styles
│   │   ├── style.css
│   ├── App.js
│   ├── api.js
│   ├── main.jsx
│── .env
│── README.md
│── package.json


**🔗 API Reference**
This app uses the OMDB API.
OMDB API Documentation

Example API Call:
http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movie_name


**🤝 Contributing**
Contributions are welcome! Feel free to submit issues or pull requests.


**📜 License**
This project is licensed under the MIT License.
