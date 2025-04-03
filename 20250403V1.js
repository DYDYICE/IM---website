function toggleActivities() {
  const popup = document.getElementById("activitiesPopup");
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
