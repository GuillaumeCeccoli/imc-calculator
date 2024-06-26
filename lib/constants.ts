import { CardInfosProps } from "@/types/types";

export const CardInfosUser: CardInfosProps[] = [
  {
    id: "height",
    title: "Taille",
    description: "En centimètres",
    placeholder: "Entrez votre taille",
    error: "Veuillez entrer une taille valide",
  },
  {
    id: "weight",
    title: "Poids",
    description: "En kilogrammes",
    placeholder: "Entrez votre poids",
    error: "Veuillez entrer un poids valide",
  },
/*   {
    id: "date",
    title: "Date",
    description: "Date du calcul",
    placeholder: "Date du calcul",
    error: "Veuillez entrer une date valide",
  } */
];

export const UserDate: CardInfosProps =
  {
    id: "date",
    title: "Date",
    description: "Date du calcul",
    placeholder: "Date du calcul",
    error: "Veuillez entrer une date valide",
  }
