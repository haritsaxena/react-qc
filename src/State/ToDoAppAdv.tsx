import { JSX, useState } from "react";

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

interface FilterButtonProps {
  current: boolean;
  flag: boolean;
  setFilter: (value: boolean) => void;
  children: JSX.Element | string;
}
function FilterButton({ current, flag, setFilter, children } : FilterButtonProps) : JSX.Element {
  const style = {
    border: "1px solid dimgray",
    background: current === flag ? "dimgray" : "transparent",
    color: current === flag ? "white" : "dimgray",
    padding: "4px 10px",
  };
  return (
    <button style={style} onClick={() => setFilter(flag)}>
      {children}
    </button>
  );
}

interface TaskProps {
  task: string;
  done: boolean;
  onDone: ()=> void;
}

function Task({ task, done, onDone }: TaskProps) {
  const paragraphStyle = {
    color: done ? "gray" : "black",
    borderLeft: "2px solid",
  };
  const buttonStyle = {
    border: "none",
    background: "transparent",
    display: "inline",
    color: "inherit",
  };
  return (
    <p style={paragraphStyle}>
      <button style={buttonStyle} onClick={done ? undefined : ()=> onDone()}>
        {done ? "✓ " : "◯ "}
      </button>
      {task}
    </p>
  );
}

function TodoApplication({ initialList } : TodoApplicationProps): JSX.Element {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone ? todos.filter(({ done }) => !done) : todos;
  return (
    <main>
      <div style={{ display: "flex" }}>
        <FilterButton current={hideDone} flag={false} setFilter={setHideDone}>
          Show all
        </FilterButton>
        <FilterButton current={hideDone} flag={true} setFilter={setHideDone}>
          Hide done
        </FilterButton>
      </div>
      {filteredTodos.map((todo, index) => (
        <Task
          //key={todo.index}
          task={todo.task}
          done={todo.done}
          onDone={() => setTodos((value) => markDone(value, todo.index))}
          //onDone={setTodos}
        />
      ))}
    </main>
  );
}
function ToDoAppAdv() {
  const items = [
    { task: "Feed the plants", done: false, index: 0 },
    { task: "Water the dishes", done: false, index: 1 },
    { task: "Clean the cat", done: false, index: 2 },
  ];
  return <TodoApplication initialList={items} />;
}
export default ToDoAppAdv;