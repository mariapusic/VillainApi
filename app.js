const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const villains = {allVillains: [{name: "Tri Pack", city: "Chicago",punchLine: "So long mothersucker"},
{name:"Fire Lord", city:"Hell", punchLine:" It's getting hot in here, so take of all your clothes"},
{name:"Mr Freeze",city:"Gothem",punchLine:"Freeze, I'm Freeze"},
{name:"Dr. Evil",city:"Gothem", punchLine:"I'm not gonna hurt you, I promise. MOHAHAHA!!!"}]}

const firstNames = ["Tony", "Pablo", "Joel", "Jay", "Omar"]
const lastNames = ["Skottlossning", "Sneöga", "Panna", "Torpeden", "Kofot"]
const cities = ["Marbella", "Colombia", "Gårdsten", "Biskopsgården","Hammarkullen"]

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/villains", (req,res) => {
    res.send(villains)
})

app.get("/newentry", (req,res) => {
    newEntry()
    res.send("newentry")
})
function newEntry(){
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const fullName = randomFirstName + " " + randomLastName
    villains.allVillains.push({name: fullName, city: randomCity})
    return villains
}
app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
    console.log(villains)
})
