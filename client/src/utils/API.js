import axios from "axios";

export default {
  // Gets all articles
  getArticle: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArtcile: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};