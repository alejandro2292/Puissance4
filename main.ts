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

// Vérification de victoire
function verifierVictoire(joueur: string): boolean {
  // Horizontal
  for (let i = 0; i < LIGNES; i++) {
    for (let j = 0; j <= COLONNES - 4; j++) {
      if (grille[i][j] === joueur &&
          grille[i][j+1] === joueur &&
          grille[i][j+2] === joueur &&
          grille[i][j+3] === joueur) return true;
    }
  }
  // Vertical
  for (let i = 0; i <= LIGNES - 4; i++) {
    for (let j = 0; j < COLONNES; j++) {
      if (grille[i][j] === joueur &&
          grille[i+1][j] === joueur &&
          grille[i+2][j] === joueur &&
          grille[i+3][j] === joueur) return true;
    }
  }
  // Diagonale descendante (\)
  for (let i = 0; i <= LIGNES - 4; i++) {
    for (let j = 0; j <= COLONNES - 4; j++) {
      if (grille[i][j] === joueur &&
          grille[i+1][j+1] === joueur &&
          grille[i+2][j+2] === joueur &&
          grille[i+3][j+3] === joueur) return true;
    }
  }
  // Diagonale montante (/)
  for (let i = 3; i < LIGNES; i++) {
    for (let j = 0; j <= COLONNES - 4; j++) {
      if (grille[i][j] === joueur &&
          grille[i-1][j+1] === joueur &&
          grille[i-2][j+2] === joueur &&
          grille[i-3][j+3] === joueur) return true;
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
