// PRIMEIRA ETAPA: CLOSURE

function Contator() {
    let total = 0;
    return function (valor) {
        total++;
        return total;
    };
}
const Contador = Contator();

// SEGUNDA ETAPA: Criar base das classes


class vaga {
    constructor(cargo, empresa, requisitos, salario) {
        this.cargo = cargo;
        this.empresa = empresa;
        this.requisitos = requisitos;
        this.salario = salario;
       
    }
resumo() {
    return `Cargo: ${this.cargo} \nEmpresa: ${this.empresa} \nRequisitos: ${this.requisitos} \nSalário: ${this.salario}`;
}
requisitos() {
    return this.requisitos.length;
}

}

// TERCEIRA ETAPA: HERANÇA
class Vagafrontend extends vaga {
    constructor(cargo, empresa, requisitos, salario, nivel, diferencial) {
        super(cargo, empresa, requisitos, salario);
        this.nivel = nivel;
        this.diferencial = diferencial;
    }
}



// QUARTA ETAPA: CANDIDATOS

const candidato = {
    nome: "Nome",
    vaga: ["Front-end júnior", "Front-end Pleno", "Front-end Sênior", "Front-end Especialista"],
    habilidades: ["html", "css", "javascript", "git", "lógica de programação"],
    mesesExperiencias: 6,
};

// QUINTA ETAPA: VAGAS
const vagas = [
    new Vagafrontend("Front-end júnior", "Vaga A", ["html", "css", "javascript"], 5000, "Júnior", "Experiência em desenvolvimento web"),
    new Vagafrontend("Front-end Pleno", "Vaga B", ["html", "css", "javascript", "git"], 8000, "Pleno", "Conhecimento em frameworks"),
    new Vagafrontend("Front-end Sênior", "Vaga C", ["html", "css", "javascript", "git", "lógica de programação"], 12000, "Sênior", "Liderança técnica"),
    new Vagafrontend("Front-end Especialista", "Vaga D", ["html", "css", "javascript", "git", "lógica de programação", "frameworks"], 15000, "Especialista", "Experiência em projetos complexos")
];
console.log(vagas);

// SEXTA ETAPA: SIMULAR NO SERVIDOR (PROMISE)
function verificarVagasnoServidor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            vagas.length > 0 ? resolve(vagas) : reject("Nenhuma vaga disponível no momento.");
        }, 2000);
    });
}


verificarVagasnoServidor()

// SÉTIMA ETAPA: CLASSICAR E FILTAR VAGAS
function classificarVagas(candidato, vaga) {
    const vagaRequisitos = vaga.requisitos.every((r) => typeof r=== "string");
    if (!vagaRequisitos) return 0;

    const atendeRequisitos = vaga.requisitos.filter((req) => 
        candidato.habilidades.includes(req));
    return Math.round((atendeRequisitos.length / vaga.requisitos.length) * 100);
}

    function filtrarVagas(percentual) {
        if (percentual >= 70) return "Alta compatibilidade";
        else if (percentual >= 50) return "Média compatibilidade";
        else return "Baixa compatibilidade";
    }




    
    
    
    