const user = {
    name:"Anurag",
    age:22
}
//user references the {name:"Anurag"....} object in memory
//user reference changed to null
user = null;
//{name:"Anurag"...} object is unreacheble since its reference is no longer used.