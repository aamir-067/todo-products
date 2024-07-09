import { useSelector } from 'react-redux';
import { addTodo, changeTodoStatus, Todo } from '../features/todos.reducer';
import { store, Store } from '../store/store';
import { useState } from 'react';

const Todos = () => {

    const allTodo: Array<Todo> = useSelector((state: Store) => state.todos.allTodo)
    const [todoText, setTodoText] = useState("");
    // get the date.
    const months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date: Date = new Date(Date.now());
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();


    // to count the total completed and incomplete Todo
    let incompleteTodoCount: number = 0, completedTodoCount: number = 0;
    allTodo?.forEach((todo: Todo) => todo.completed ? completedTodoCount++ : incompleteTodoCount++);



    const registerTodo = (e: React.FormEvent<HTMLFormElement> | undefined = undefined) => {
        e?.preventDefault();
        if (todoText && todoText.trim()) {

            const newTodo: Todo = {
                text: todoText.trim(),
                completed: false
            };

            console.log(newTodo);

            try {
                store.dispatch(addTodo({ todo: newTodo }));
                setTodoText("");
            } catch (error) {
                console.error('Failed to add todo:', error);
            }
        }
    };


    const toggleTodoComplete = (index: number) => {
        store.dispatch(changeTodoStatus({ index }))
    }


    return (
        <div className='w-full'>
            <div className='max-w-lg bg-gray-50 mx-auto p-3'>
                <h1 className='font-bold mt-6 text-[#0e0e11] text-3xl'>{months[month]} {day}, {year}</h1>
                <p className='text-sm text-[#575757] my-3 font-semibold'>{incompleteTodoCount} incomplete, {completedTodoCount} completed</p>
                <hr className='border-[#f1f1f1] border-[1.5px]' />


                {/* input field */}
                {/* <div className='h-16 flex rounded-lg border-gray-200 border-2 mt-4 overflow-hidden'> */}
                <form className='h-16 flex rounded-lg border-gray-200 border-2 mt-4 overflow-hidden' onSubmit={(e) => registerTodo(e)}>
                    <input value={todoText} onChange={(e) => setTodoText(e.target.value)} type="text" placeholder='Add a todo' className='h-full px-2 text-sm text-[$575757] bg-transparent outline-none w-9/12' />
                    <button onClick={() => registerTodo(undefined)} className='bg-transparent font-semibold text-xl w-3/12'>Add</button>
                </form>
                {/* </div> */}

                {/* incomplete todo */}
                <div className='mb-10 mt-16'>
                    <h2 className='text-lg mb-4 text-[#575757] font-bold'>Incomplete</h2>
                    <ul className='flex flex-col gap-y-4'>
                        {
                            allTodo.map((todo: Todo, index: number) => {

                                if (!todo.completed) {
                                    return (<li key={index} className='flex gap-x-[10px] justify-start items-center'>
                                        <input type="checkbox" onChange={() => toggleTodoComplete(index)} className="size-5 border-4 rounded border-gray-50" />
                                        <p className='text-lg capitalize font-medium text-[#575757]'>{todo.text}</p>
                                    </li>)
                                }

                            })
                        }
                    </ul>
                </div>

                {/* completed todo */}
                <div className='mb-10 mt-10'>
                    <h2 className='text-lg mb-4 text-[#575757] font-bold'>Completed</h2>
                    <ul className='flex flex-col gap-y-4'>
                        {
                            allTodo.map((todo: Todo, index: number) => {

                                if (todo.completed) {
                                    return (<li key={index} className='flex gap-x-[10px] justify-start items-center'>
                                        <input type="checkbox" checked onChange={() => toggleTodoComplete(index)} className="size-5 checked:marker:text-gray-300 border-4 rounded border-gray-300" />
                                        <p className='text-lg capitalize font-medium text-[#b9b9be]'>{todo.text}</p>
                                    </li>)
                                }

                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todos