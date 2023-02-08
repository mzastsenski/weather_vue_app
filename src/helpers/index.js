export function getShortCountry(country) {
  if (country === "Germany") return "DE";
  else if (country === "Belarus") return "BLR";
  else if (country === "Japan") return "JPN";
  else if (country === "Austria") return "AUT";
  else {
    const short = country.split(" ");
    if (short.length > 1) {
      return short
        .filter((str) => str[0] === str[0].toUpperCase())
        .map((e) => e.substring(0, 1))
        .join("");
    } else return short[0].substring(0, 3).toUpperCase();
  }
}

export function getDay(day) {
  switch (day) {
    case "Mon":
      return "Monday";
    case "Thu":
      return "Tuesday";
    case "Wed":
      return " Wednesday";
    case "Tue":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
    case "Sun":
      return "Sunday";
    default:
      return day;
  }
}
