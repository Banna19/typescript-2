import React from 'react';

// Étape 2 : Définir les types pour les props
interface SalutationProps {
  nom: string;
}

// Étape 3 : Convertir le composant fonctionnel
const Salutation: React.FC<SalutationProps> = ({ nom }) => {
  return <div>Bonjour, {nom} !</div>;
};

// Étape 4 : Exporter le composant par défaut
export default Salutation;
