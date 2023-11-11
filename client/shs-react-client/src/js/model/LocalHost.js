class Localhost {
  static key = "shs-strand-finder-";

  static path() {
    return "http:\\\\localhost:3000\\";
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
