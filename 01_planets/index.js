const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  const { koi_insol, koi_disposition, koi_prad } = planet;
  return (
    koi_disposition === "CONFIRMED" &&
    koi_insol < 1.11 &&
    koi_insol > 0.36 &&
    koi_prad < 1.6
  );
};

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) habitablePlanets.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(`${habitablePlanets.length} habitable planets`);
  });
