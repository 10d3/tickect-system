export function formatDateFrench(dateString) {
  // Parse the date string in ISO 8601 format (YYYY-MM-DD)
  const date = new Date(dateString);

  // Get month index (0-indexed)
  const month = date.getMonth(); // January is 0, December is 11

  // Month names in French (an array)
  const frenchMonths = [
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

  // Format the date as "day mois year" (French uses "mois" instead of "month")
  const formattedDate = `${date.getDate()} ${frenchMonths[month]}`;

  return formattedDate;
}
