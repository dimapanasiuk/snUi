import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { size } from 'lodash';
import { ADD_TODO } from '../../mutations';
import CreateComponent from './components/Create';

const CreateTodo = ({ userData }: any) => {

  const [newTodo] = useMutation(ADD_TODO);
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    setTodos(userData?.todos);
  }, [userData]);

  const onSearch = (data: any) => {
    const { title, text } = data; //TODO: add text to mutation
    const { username, todos } = userData;

    const a = todos.map((todo: any) => ({ id: todo?.id, title: todo?.title }))

    newTodo({
      variables: {
        input: {
          username, todos: [...a, { id: Date.now(), title }],
        }
      }
    }).then(({ data }: any) => {
      setTodos(data?.addNewTodo?.todos)
    })
  }

  return (
    <>
      <CreateComponent onSubmitForm={onSearch} />
      {size(todos) && todos.map((item: any) => <h1>{item?.title}</h1>)}
    </>
  );
};

export default CreateTodo;
