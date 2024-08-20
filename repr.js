// Save data to sessionStorage
sessionStorage.setItem('dataStored', data.xhr.response);

// Get saved data from sessionStorage
var data = sessionStorage.getItem('dataStored');

// Remove saved data from sessionStorage
sessionStorage.removeItem('dataStored');

// Check for Web Storage support
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage support
} else {
  // No Web Storage support
}
