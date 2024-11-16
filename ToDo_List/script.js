const data_reference = document.getElementById('current_date'); // prendo la cella dove andrò a scrivere la data corrente
data_reference.textContent = new Date().toLocaleDateString(); // scrivo il valore della data nell'html

const add_button_ref = document.getElementById('Aggiungi'); // prendo la reference del bottone
const list_task = document.getElementById('lista_task');
let task_count = 0; // contatore per il numero di task
let task_da_completare_count = 0; // contatore per il numero di task da completare

add_button_ref.addEventListener('click', () => {
    const taskInput = document.getElementById('task'); // prendo il valore dell'input dell'utente

    if (taskInput.value === '') { // controllo se l'input è vuoto
        alert('Scrivi qualcosa!');
    } else {
        const new_task = document.createElement('li'); // creo un elemento della lista
        new_task.textContent = taskInput.value; // valore dell'elemento della lista, uguale all'input
        list_task.appendChild(new_task); // scrivo il tutto nell'html 
        taskInput.value = '';

        task_count++; // incremento il contatore per il numero di task
        const task_da_completare_ref = document.getElementById('task_da_completare');
        task_da_completare_ref.textContent = task_count;

        const delete_button = document.createElement('button'); // creo il bottone elimina
        delete_button.textContent = 'Elimina'; // testp del bottone
        delete_button.className = 'delete_btn'; // classe per il CSS del bottone elemina
        new_task.appendChild(delete_button); // aggiungo il bottone di eliminazione al li

        function remove_task() { // funzione per rimuvoere le task
            new_task.remove(); // rimuovo il li da lista
            task_count--; // decremento il contatore per il numero di task
            task_da_completare_ref.textContent = task_count; // aggiorno il numero di task da completare in html
        };

        delete_button.addEventListener('click', () => { // evento per il click del bottone
            remove_task(); // richiamo direttamente la funzione
        });

        const completed_tasks = document.createElement('button'); // Creo il bottone per il "check" se la task è completata
        completed_tasks.textContent = 'Completata';
        completed_tasks.className = 'completed_btn'; // classe per il CSS del bottone completata
        new_task.appendChild(completed_tasks);

        completed_tasks.addEventListener('click', () => { // evento per il click del bottone
            remove_task();
            const task_completate_ref = document.getElementById('task_completate');
            task_da_completare_count++;
            task_completate_ref.textContent = task_da_completare_count; // aggiorno il numero di task completate in html
        });
    }    
});