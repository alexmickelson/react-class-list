const TodoList = ({ todoList }) => {

    return (
        <ul class="list-group">
            {todoList.map(i => <li className="list-group-item" key={i.key}>{i.name}</li>)}
        </ul>
    )
} 

export default TodoList;