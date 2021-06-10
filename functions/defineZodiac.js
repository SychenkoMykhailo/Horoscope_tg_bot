export default function defineZodiac(birthday, zodiacs) {
  const date = new Date(birthday);
  const year = date.getFullYear();
  const value = date.getTime();

  return zodiacs.find((zodiac) => {
    const { name, from, to } = zodiac;
    const start = new Date(`${from}, ${year}`);
    let end = new Date(`${to}, ${year}`);
    if (name === "capricorn") {
      end = new Date(`${to}, ${year + 1}`);
    }
    if (value >= start.getTime() && value <= end.getTime()) {
      return zodiac;
    }
  });
}
