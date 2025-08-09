let todos = [
    {
        id: 1,
        name: "Configurar repositório Git",
        description: "Inicializar um novo repositório Git e configurar as informações básicas do usuário",
        status: "todo"
    },
    {
        id: 2,
        name: "Criar primeiro commit",
        description: "Adicionar arquivos ao staging area e fazer o primeiro commit do projeto",
        status: "todo"
    },
    {
        id: 3,
        name: "Estudar comandos básicos",
        description: "Aprender os comandos git add, git commit, git status e git log",
        status: "doing"
    },
    {
        id: 4,
        name: "Configurar GitHub",
        description: "Criar conta no GitHub e conectar com o repositório local",
        status: "done"
    }
];

let nextId = 5;

function addNewTodo(name, description) {
    // if (!name || name.trim() === '') {
    //     return { success: false, message: 'Nome é obrigatório' };
    // }

    // const newTodo = {
    //     id: nextId++,
    //     name: name.trim(),
    //     description: (description || '').trim(),
    //     status: 'todo'
    // };

    // todos.push(newTodo);
    // return { success: true, todo: newTodo, totalTodos: todos.length };
    return { success: false, message: 'Funcionalidade não implementada' };
}

function deleteTodo(id) {
    // const initialLength = todos.length;
    // const todoToDelete = todos.find(t => t.id === id);
    
    // if (!todoToDelete) {
    //     return { success: false, message: 'To-Do não encontrado' };
    // }

    // todos = todos.filter(t => t.id !== id);
    
    // return { 
    //     success: true, 
    //     deletedTodo: todoToDelete, 
    //     remainingTodos: todos.length,
    //     wasDeleted: todos.length < initialLength
    // };
    return { success: false, message: 'Funcionalidade não implementada' };

}

function getAllTodos() {
    return [...todos]; 
}

function getTodoById(id) {
    return todos.find(t => t.id === id);
}

function resetTodos() {
    todos = [
        {
            id: 1,
            name: "Configurar repositório Git",
            description: "Inicializar um novo repositório Git e configurar as informações básicas do usuário",
            status: "todo"
        },
        {
            id: 2,
            name: "Criar primeiro commit",
            description: "Adicionar arquivos ao staging area e fazer o primeiro commit do projeto",
            status: "todo"
        },
        {
            id: 3,
            name: "Estudar comandos básicos",
            description: "Aprender os comandos git add, git commit, git status e git log",
            status: "doing"
        },
        {
            id: 4,
            name: "Configurar GitHub",
            description: "Criar conta no GitHub e conectar com o repositório local",
            status: "done"
        }
    ];
    nextId = 5;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addNewTodo,
        deleteTodo,
        getAllTodos,
        getTodoById,
        resetTodos,
        get todos() { return todos; },
        get nextId() { return nextId; }
    };
}

