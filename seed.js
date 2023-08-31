use zoo;
db.dropDatabase();
db.animals.insertMany([
  {
    name: "Penguin",
    age: 120,
    colors: ["white", "black"]
  },
  {
    name: "Pidgeon",
    state: "dirty",
    weight: 120
  },
])

db.animals.findOne({
  name: "Penguin"
})

db.animals.updateOne({
  name: "Penguin"}, 
  {$set: {age: 121}}
)

db.animals.deleteOne({
  name: "Pidgeon"
})