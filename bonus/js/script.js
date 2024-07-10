let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
]

// for(let k in team) {
//     // every key-value printed on console
//     console.log(team[k])
// }

const CONTAINER = document.getElementById("team-members")

for (let k = 0; k < team.length; k++) {    
    // values printed on console
    console.log(`Nome: ${team[k].name}. Ruolo: ${team[k].role}. Foto: ${team[k].img}`)
    //milestone 2
    const COLUMN = divGenerator() // function calling
    COLUMN.innerHTML = `Nome: ${team[k].name}. Ruolo: ${team[k].role}. Foto: ${team[k].img}` //milestone2 goal
    COLUMN.classList.add("border") // border for debug
    CONTAINER.append(COLUMN)
}


// function: div creation
function divGenerator() {
    const div = document.createElement('div') // div creation
    div.classList.add("col-12", "col-md-6", "col-lg-4") // bootstrap classes added to divs
    return div;
}