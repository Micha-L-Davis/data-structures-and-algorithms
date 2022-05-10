


module.exports = function businessTrip(connectionMap, itinerary) {
  let cost = 0;
  const planDestinations = connectionMap.getNodes()
    .filter(node => itinerary.includes(node.value));
  console.log('plan destinations ', planDestinations);

  while (planDestinations.length > 1) {
    const origin = planDestinations.shift();
    const destination = planDestinations[0];
    const connections = connectionMap.getNeighbors(origin);
    const directConnection = connections.filter(connectingFlight => connectingFlight.node.value === destination.value);

    if (directConnection[0]) {
      console.log('price ', directConnection[0].weight);
      cost += directConnection[0].weight;
    }
  }

  return cost ? cost : null;
};
