// Criar lista de tarefas

const tasks = [
    { descricao: "Passear com o cachorro", prioridade: 1, status: "Concluida"},
    { descricao: "Comprar ingredientes para o almoço", prioridade: 1, status: "Concluida"},
    { descricao: "Fazer o almoço", prioridade: 1, status: "Pendente"},
    { descricao: "Ir para academia", prioridade: 2, status: "Pendente"},
    { descricao: "Estudar DNC", prioridade: 1, status: "Concluida"},
    { descricao: "Ir para o boxe", prioridade: 3, status: "Pendente"},

]

// Adicionar nova tarefa

tasks.push({ descricao: "Meditar", prioridade: 2, status: "Pendente" });
console.log(tasks);

// Remover tarefas concluídas

const pandingTasks = tasks.filter ((task) => task.status === "Pendente");
console.log(pandingTasks);

// Marcar tarefas como concluídas

const doneTasks = tasks.map((task) => ({...task, status: "Concluida"}))
console.log(doneTasks);

// Ordenar tarefas por prioridades

const sortedTaks = tasks.sort((prevTask, currentTask) => prevTask.prioridade - currentTask.prioridade);
console.log(sortedTaks);

// Contar tarefas pendentes 

const pandingTasksQtd = tasks.reduce((prev, next) => {
    if (next.status === "Pendente") return prev + 1;
    return prev
}, 0);

console.log(pandingTasksQtd);

// Encontrar uma tarefa específica

const selectTask = tasks.find((task) => task.descricao === "Meditar");
console.log(selectTask);

// Verificar se todas as tarefas estão concluídas

const isEveryTaskDone = tasks.every((task) => task.status === "Concluida")
console.log(isEveryTaskDone);
