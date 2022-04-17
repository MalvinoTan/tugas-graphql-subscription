const Todo = ({ id, title, checked, onClickItem, onEditItem, onDeleteItem }) => {
  return (
    <li className={checked ? 'done todo-item' : 'todo-item'} data-key={id}>
      <input onChange={onClickItem} id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>

      <span>id = {id} || {title}</span>

      <button onClick={onEditItem}>Edit</button>

      <button onClick={onDeleteItem} className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}

export default Todo;