class Localhost {
  static key = "shs-strand-finder-";

  // path
  static prodPath = "https://shsstrandfinder-com.onrender.com/api/V1.0.0/";
  static devPath = "http://localhost:3000/shs-strand-finder/api/V1.0.0/";

  // image path
  static imgProdPath = "https:\\\\shsstrandfinder-com.onrender.com\\";
  static imgDevPath = "http:\\\\localhost:3000\\";

  static mainPath() {
    return process.env.NODE_ENV == "development"
      ? Localhost.devPath
      : Localhost.prodPath;
  }

  static path() {
    return process.env.NODE_ENV == "development"
      ? Localhost.imgDevPath
      : Localhost.imgProdPath;
  }

  static session(name, value) {
    localStorage.setItem(Localhost.key + name, value);
  }

  static sessionKey(name) {
    return localStorage.getItem(Localhost.key + name);
  }

  static deleteSession(name) {
    localStorage.removeItem(Localhost.key + name);
  }

  static has(name) {
    return localStorage.getItem(Localhost.key + name) !== null;
  }
}

export default Localhost;
