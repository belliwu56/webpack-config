import "./scss/index.scss";
// import "./styles/index.css";

const elvenShieldRecipe = {
    leatherStrip: 2,
    ironIngot: 1,
    refinedMoonStone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonStone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGauntletsRecipe)
