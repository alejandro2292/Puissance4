const LIGNES = 6;
const COLONNES = 7;
let grille: string[][] = Array.from({ length: LIGNES }, () => Array(COLONNES).fill("."));

let joueurs: string[] = ["X", "O"];
let tour = 0;

//Affichage de la grille
function afficherGrille(): void {
  console.log("\nGrille actuelle :");
  for (let ligne of grille) {
    console.log(ligne.join(" "));
  }
  console.log(Array.from({ length: COLONNES }, (_, i) => i + 1).join(" "));
  console.log("\n");
}

//Poser une pièce
function poserPiece(colonne: number, joueur: string): boolean {
  for (let ligne = LIGNES - 1; ligne >= 0; ligne--) {
    if (grille[ligne][colonne] === ".") {
      grille[ligne][colonne] = joueur;
      return true;
    }
  }
  return false;
}

//Vérification de victoire
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
  //Vertical
  for (let i = 0; i <= LIGNES - 4; i++) {
    for (let j = 0; j < COLONNES; j++) {
      if (grille[i][j] === joueur &&
          grille[i+1][j] === joueur &&
          grille[i+2][j] === joueur &&
          grille[i+3][j] === joueur) return true;
    }
  }
  //Diagonale descendante
  for (let i = 0; i <= LIGNES - 4; i++) {
    for (let j = 0; j <= COLONNES - 4; j++) {
      if (grille[i][j] === joueur &&
          grille[i+1][j+1] === joueur &&
          grille[i+2][j+2] === joueur &&
          grille[i+3][j+3] === joueur) return true;
    }
  }
  //Diagonale montante
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

//Boucle de jeu 
let partieTerminee = false;
while (!partieTerminee && tour < LIGNES * COLONNES) {
  let joueur = joueurs[tour % 2];
  
  let coup: number;
  do {
    coup = Math.floor(Math.random() * COLONNES);
  } while (!poserPiece(coup, joueur)); 

  console.log(`Joueur ${joueur} joue dans la colonne ${coup + 1}`);
  afficherGrille(); 

  if (verifierVictoire(joueur)) {
    console.log(`Joueur ${joueur} gagne !`);
    partieTerminee = true;
    break;
  }

  tour++;
}

if (!partieTerminee) {
  console.log("Partie terminée sans gagnant !");
}
