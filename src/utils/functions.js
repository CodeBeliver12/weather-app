export const getTempratureFromKelvinToCelsius = (temp) => {
    let tempInCelsius = (temp * 1) - 273.15
    return tempInCelsius.toFixed(0) + '\u00b0c';
}