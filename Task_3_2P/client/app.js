document.getElementById("search-btn").addEventListener("click", () => {
  const location = document.getElementById("search-location").value;
  if (location) {
    fetch(`http://localhost:3000/api/stations?location=${location}`)
      .then((response) => response.json())
      .then((data) => {
        const stationsList = document.getElementById("stations-list");
        stationsList.innerHTML = '';  // Clear previous results
        data.stations.forEach((station) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${station.name} - ${station.address}`;
          stationsList.appendChild(listItem);
        });
      })
      .catch((err) => console.error("Error fetching stations:", err));
  } else {
    M.toast({ html: "Please enter a location!" });
  }
});
