export function convertDateString(dateString) {
  // Split the input date string into day, month, and year
  var dateParts = dateString.split("/");
  var day = parseInt(dateParts[1]);
  var month = parseInt(dateParts[0]);
  var year = parseInt(dateParts[2]);

  // Create a new Date object
  var dateObj = new Date(year, month - 1, day);

  // Define an array of weekday names in French
  var weekdayNames = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  // Define an array of month names in French
  var monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  // Get the weekday index (0-6) of the date
  var weekdayIndex = dateObj.getDay();

  // Get the formatted weekday name
  var formattedWeekday = weekdayNames[weekdayIndex];

  // Get the formatted month name
  var formattedMonth = monthNames[month - 1];

  // Create the final formatted date string
  var formattedDateString = formattedWeekday + " " + day + " " + formattedMonth;

  return formattedDateString;
}
