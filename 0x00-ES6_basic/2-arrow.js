#!/usr/bin/node

export default function getNeighborhoodsList() {
  this.sanFransicoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFransicoNeighborhoods.push(newNeighborhood);
    return this.sanFransicoNeighborhoods;
  };
}
