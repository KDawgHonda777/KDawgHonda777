/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !muscle $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-muscle.js);)
 */
function randomCar() {
  var cars = [
    "Yosemite",
    "Pisswasser Dominator",
    "Sabre Turbo Custom",
    "Clique",
    "Drift Yosemite",
    "Dominator GTX",
    "Blade",
    "Dukes",
    "Gauntlet HellDawg",
    "Ruiner",
    "Duke O'Death",
    "Sabre Turbo",
    "Gauntlet Classic Custom",
    "Hermes",
    "Redwood Gauntlet",
    "Slamvan Custom",
    "Tampa",
    "Phoenix",
    "Hustler",
    "Buccaneer Custom",
    "Gauntlet Classic",
    "Vigero",
    "Ellie",
    "Nightshade",
    "Picador",
    "Lost Slamvan",
    "Voodoo Custom",
    "Rat-Truck",
    "Slamvan"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
