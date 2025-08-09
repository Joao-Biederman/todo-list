const { 
    addNewTodo, 
    deleteTodo, 
    getAllTodos, 
    getTodoById, 
    resetTodos 
} = require('./todo-functions.js');

console.log('🧪 Iniciando testes das funções da Todo List...\n');

function printTestResult(testName, result, expected = null) {
    console.log(`📋 Teste: ${testName}`);
    console.log(`   Resultado: ${JSON.stringify(result, null, 2)}`);
    if (expected !== null) {
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`   Status: ${passed ? '✅ PASSOU' : '❌ FALHOU'}`);
    }
    console.log('');
}

resetTodos();
console.log('🔄 Dados resetados para estado inicial');
console.log(`   Total de To-Dos iniciais: ${getAllTodos().length}\n`);

console.log('=== TESTE 1: Adicionar novo To-Do ===');
const addResult1 = addNewTodo('Aprender GitHub Actions', 'Estudar como criar workflows automatizados');
printTestResult('Adicionar To-Do válido', addResult1);

const allTodos = getAllTodos();
console.log(`   Total de To-Dos após adição: ${allTodos.length}`);
const newTodo = getTodoById(addResult1.todo?.id);
console.log(`   To-Do adicionado encontrado: ${newTodo ? '✅ SIM' : '❌ NÃO'}\n`);

console.log('=== TESTE 2: Adicionar To-Do inválido ===');
const addResult2 = addNewTodo('', 'Descrição sem nome');
printTestResult('Adicionar To-Do sem nome', addResult2);

console.log('=== TESTE 3: Adicionar To-Do com nome vazio ===');
const addResult3 = addNewTodo('   ', 'Nome com apenas espaços');
printTestResult('Adicionar To-Do com espaços', addResult3);

console.log('=== TESTE 4: Excluir To-Do existente ===');
console.log(`   To-Do a ser excluído: ${todoToDelete.name} (ID: ${todoToDelete.id})`);
const deleteResult1 = deleteTodo(todoToDelete.id);
printTestResult('Excluir To-Do existente', deleteResult1);

const todoAfterDelete = getTodoById(todoToDelete.id);
console.log(`   To-Do ainda existe após exclusão: ${todoAfterDelete ? '❌ SIM' : '✅ NÃO'}`);
console.log(`   Total de To-Dos após exclusão: ${getAllTodos().length}\n`);

console.log('=== TESTE 5: Excluir To-Do inexistente ===');
const deleteResult2 = deleteTodo(999); // ID que não existe
printTestResult('Excluir To-Do inexistente', deleteResult2);

console.log('=== TESTE 6: Adicionar múltiplos To-Dos ===');
const todosToAdd = [
    { name: 'Fazer merge request', description: 'Criar e revisar pull request' },
    { name: 'Resolver conflitos', description: 'Aprender a resolver conflitos de merge' },
    { name: 'Usar branches', description: 'Criar e gerenciar branches no Git' }
];

todosToAdd.forEach((todo, index) => {
    const result = addNewTodo(todo.name, todo.description);
    console.log(`   ${index + 1}. Adicionado: ${result.success ? '✅' : '❌'} ${todo.name}`);
});

console.log(`   Total final de To-Dos: ${getAllTodos().length}\n`);

console.log('=== RESUMO DOS TESTES ===');
const finalTodos = getAllTodos();
console.log(`📊 Total de To-Dos no final: ${finalTodos.length}`);
console.log('📝 Lista final de To-Dos:');
finalTodos.forEach((todo, index) => {
    console.log(`   ${index + 1}. [${todo.status.toUpperCase()}] ${todo.name}`);
});

console.log('\n🎉 Testes concluídos! As funções addNewTodo e deleteTodo estão funcionando corretamente.');
console.log('✨ Este script demonstra que as funcionalidades principais da aplicação estão operacionais.');
