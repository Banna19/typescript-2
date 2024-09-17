import React, { Component } from 'react';

// Étape 2 : Définir les types pour l'état
interface CounterState {
  count: number;
}

// Étape 3 : Convertir la classe
class Counter extends Component<{}, CounterState> {
  // Définir l'état initial
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode render pour afficher le composant
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onclick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Étape 5 : Exporter le composant par défaut
export default Counter;
