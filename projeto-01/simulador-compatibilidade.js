//criando um objeto
const candidate = {
    name: "samuel moreira",
    skills: ["JavaScript"],
    
}
  
//criando a vaga de emprego, cargo e requisitos 
   const vacancy = {
    empresa: "stark industries",
    cargo: "front-end junior",
    requisitos: [ "JavaScript", "HTML", "CSS" ]
}
  
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

     return {
        matchedSkills: matchedSkills,
        missingSkills: missingSkills,
        compatibilityPercentage: compatibilityPercentage
    };
    
}
analyzeCompatibility(candidate1, vacancy);

const vacancies = [
    {
        empresa: "stark industries",
        cargo: "front-end junior",
        requisitos: ["JavaScript", "HTML", "CSS"]
        },

         {
        empresa: "Wayne Enterprises",
        cargo: "front-end junior",
        requisitos: ["JavaScript", "HTML"]
    },
];


const results = vacancies.map(vacancy => {
    const result = analyzeCompatibility(candidate1, vacancy);
    return{
        empresa: vacancy.empresa,
        ...result
    };
});
console.log("resultados", results);

const bestVacancy = results.reduce((best, current) => {
    return current.compatibilityPercentage > best.compatibilityPercentage ? current : best;
}, { compatibilityPercentage: 0 });

console.log("A melhor vaga é:", bestVacancy); 
console.log("com", bestVacancy.compatibilityPercentage.toFixed(2) + "% de compatibilidade.");

const wayneVacancy = results.find(vacancy => vacancy.empresa === "Wayne Enterprises");
console.log("Vaga na Wayne Enterprises:", wayneVacancy);

const hasAllSkills = vacancies[1].requisitos.every(
    requisito => candidate1.skills.includes(requisito)
);
console.log("O candidato possui todas as habilidades para a vaga da Wayne Enterprises?",
     hasAllSkills ? "sim" : "não");

function loadVacancies() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(vacancies);
                }, 2000);
            });
        }

async function starkSkillMatch() {
    console.log("Carregando vagas...");
    const loadedVacancies =  await loadVacancies();
    processVacancies(loadedVacancies, (vacancies) => {
        const analysisNumber = analysisCounter();
        console.log(`Análise de compatibilidade número: ${analysisNumber}`);
       console.log("Vagas carregadas com sucesso:", vacancies);
    });
}
const analysisCounter = createAnalysisCounter();
function processVacancies(vacancies, callback) {
    callback(vacancies);
}
starkSkillMatch(); 

function createAnalysisCounter() {
    let count = 0;
    return function() {
        count++;
        return count; 
    }
}

