# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create({ name: 'Star Wars' }, { name: 'Lord of the Rings' })
#   Character.create(name: 'Luke', movie: movies.first)
Character.create(
    name: "Malganis",
    klass: "Paladin",
    race: "Half-Orc"
)

Character.create(
    name: "Illidan",
    klass: "Thief",
    race: "Half-Demon"
)

Character.create(
    name: "Ragnoros",
    klass: "Mage",
    race: "Halfling"
)