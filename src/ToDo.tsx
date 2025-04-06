import { useState, JSX } from "react";

interface TodoItem {
  task: string;
  done: boolean;
  index: number;
}

interface TodoApplicationProps {
  initialList: TodoItem[];
  children?: JSX.Element;
}

function markDone(list: TodoItem[], index: number) {
  return list.map((item, i) => (i === index ? { ...item, done: true } : item));
}

function TodoApplication({
  initialList,
  children,
}: TodoApplicationProps): JSX.Element {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone ? todos.filter((done) => !done) : todos;

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => setHideDone(false)}>Show all</button>
        <button onClick={() => setHideDone(true)}>Hide done</button>
      </div>
      {filteredTodos.map((todo: TodoItem, index: number) => (
        <p key={index}>
          {todo.done ? (
            <span style={{ textDecoration: "line-through" }}>{todo.task}</span>
          ) : (
            <>
              {todo.task}
              <button
                onClick={() =>
                  setTodos((prevState: TodoItem[]) =>
                    markDone(prevState, todo.index)
                  )
                }
              >
                x
              </button>
            </>
          )}
        </p>
      ))}
      {children}
    </>
  );
}

function ToDoApp() {
  const items: TodoItem[] = [
    { task: "Feed the plants", done: false, index: 0 },
    { task: "Water the dishes", done: false, index: 1 },
    { task: "Clean the cat", done: false, index: 2 },
  ];
  return (
    <TodoApplication initialList={items}>
      <p>Passed Children</p>
    </TodoApplication>
  );
}

export default ToDoApp;
