//criando um objeto
const candidate = {
    name: "samuel moreira",
    skills: ["JavaScript"],
    
}
   console.log(candidate);

//criando a vaga de emprego, cargo e requisitos 
   const vacancy = {
    empresa: "stark industries",
    cargo: "front-end junior",
    requisitos: [ "JavaScript", "HTML", "CSS" ]
}
   console.log(vacancy);

   class Person {
    constructor(name) {
        this.name = name;
    }
}

//Classe que herda Person
class Candidate extends Person {
    constructor(name, skills) {
        super(name);
        this.skills = skills;
    
    }
}


//Criando um objeto através da classe
const candidate1 = new Candidate(
    "Samuel Moreira",
    ["JavaScript"],
);

console.log(candidate1);

function analyzeCompatibility(candidate, vacancy) {

    const missingSkills = vacancy.requisitos.filter(
        requisito => !candidate.skills.includes(requisito)
    );

    const matchedSkills = vacancy.requisitos.filter(
        requisito => candidate.skills.includes(requisito)
    );

    const totalRequirements = vacancy.requisitos.length;

    const matchedCount = matchedSkills.length;

    const compatibilityPercentage = (matchedCount / totalRequirements) * 100;

    console.log("Habilidades faltantes:", missingSkills);
    console.log("Habilidades encontradas:", matchedSkills);
    console.log("Porcentagem de compatibilidade:", compatibilityPercentage.toFixed(2) + "%");
}
analyzeCompatibility(candidate1, vacancy);