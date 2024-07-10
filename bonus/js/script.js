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
    COLUMN.classList.add("d-flex")
    COLUMN.innerHTML = `<div class="card mh-100 my-3">
    <div class="card-body d-flex flex-column">
    <h3 class="card-title">Nome: ${team[k].name}</h3>
    <h5 class="card-text">Ruolo: ${team[k].role}.</h5>
    </div>
    <img class="img-fluid card-img-bottom" src="../img/${team[k].img}" alt="team member photo">
    </div>` //milestone2 + bonus goal
    CONTAINER.append(COLUMN)
}


// function: div creation
function divGenerator() {
    const div = document.createElement('div') // div creation
    div.classList.add("col-12", "col-md-6", "col-lg-4") // bootstrap classes added to divs
    return div;
}