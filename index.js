// Code your solution here

function findMatching(drivers, string){
    const names = drivers.filter(name => name.toUpperCase() === string.toUpperCase())
    return names
}

function fuzzyMatch(drivers, string){
    const names = drivers.filter(name => name.indexOf(string) === string.indexOf(string))
    return names
}

function matchName(drivers, string){
    return drivers.filter(driverName => driverName.name === string)
}