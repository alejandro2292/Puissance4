//Initialisation des variables lignes et colonnes
const LIGNES: number = 6;
const COLONNES: number = 7;

// Création de la grille vide
let grille: string[][] = Array.from({ length: LIGNES }, () => Array(COLONNES).fill("."));

// Fonction pour afficher la grille
function afficherGrille(): void {
  console.clear();
  for (let ligne of grille) {
    console.log(ligne.join(" "));
  }
  console.log(Array.from({ length: COLONNES }, (_, i) => i + 1).join(" "));
}

// Fonction pour poser une pièce dans une colonne
function poserPiece(colonne: number, joueur: string): boolean {
  for (let ligne = LIGNES - 1; ligne >= 0; ligne--) {
    if (grille[ligne][colonne] === ".") {
      grille[ligne][colonne] = joueur;
      return true;
    }
  }
  return false;
}

// Simulation des coups (solution temporaire pour testé la grille)
let coups: number[] = [2, 3, 2, 1, 4, 2, 5]; 

// Changer de symbole pour les joueurs
let joueurs: string[] = ["X", "O"];
let tour = 0;

// Simulation du jeu
for (let coup of coups) {
  let joueur = joueurs[tour % 2];
  console.log(`Joueur ${joueur} joue dans la colonne ${coup + 1}`);
  if (!poserPiece(coup, joueur)) {
    console.log(`Colonne ${coup + 1} pleine !`);
  }
  afficherGrille();
  tour++;
}
