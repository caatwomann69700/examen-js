class ThemeSwitcher {
    constructor() {
      // récupère des éléments
      this.body = document.body;
      this.lightThemeBtn = document.getElementById("lightThemeBtn");
      this.darkThemeBtn = document.getElementById("darkThemeBtn");
  
      // récupère le thème dans localStorage
      this.loadTheme();
  
      //ajouter des écouteurs d'événements sur les boutons
      this.lightThemeBtn.addEventListener("click", () => this.setTheme("light"));
      this.darkThemeBtn.addEventListener("click", () => this.setTheme("dark"));
    }
  
    // fonction qui applique le thème
    setTheme(theme) {
      if (theme === "dark") {
        this.body.classList.add("dark");
      } else {
        this.body.classList.remove("dark");
      }
  
      // Sauvegarder le thème dans le localStorage
      localStorage.setItem("theme", theme);
    }
  
    // Méthode pour charger le thème à partir du localStorage
    loadTheme() {
      let savedTheme = localStorage.getItem("theme");
  
      // Appliquer le thème trouvé dans le localStorage, ou par défaut clair
      if (savedTheme === "dark") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    }
  }
  
  // Instancie la classe après le chargement du DOM
  document.addEventListener("DOMContentLoaded", () => {
    new ThemeSwitcher();
  });