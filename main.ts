//Initialisation des variables lignes et colonnes
const LIGNES: number = 6;
const COLONNES: number = 7;

// Création de la grille vide
let grille: string[][] = Array.from({ length: LIGNES }, () => Array(COLONNES).fill("."));

// Fonction pour afficher la grille
function afficherGrille(): void {
  console.clear(); // On vide le terminal pour avoir un rendu plus agréable
  for (let ligne of grille) {
    console.log(ligne.join(" "));
  }
  // Affiche les numéros de colonnes en bas 
  // Il nous seront utiles plus tard pour permettre à l'user de choisir la colonne ou il souhaite déposer sa pièce
  console.log(Array.from({ length: COLONNES }, (_, i) => i + 1).join(" "));
}

// Test affichage
afficherGrille();
