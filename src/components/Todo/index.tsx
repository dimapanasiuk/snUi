import { Input, } from 'antd';
import { ADD_TODO } from '../../mutations';
import { useMutation } from '@apollo/client';

const { Search } = Input;

const CreateTodo = ({ todos }: any) => {
  // const onSearch = (value: any) => console.log(value);
  const [newTodo] = useMutation(ADD_TODO);

  const onSearch = () => {
    newTodo({
      variables: {
        input: {
          username: "tester", todos: [{ id: 1, title: "test1" }, { id: 1, title: "test2" }],
        }
      }
    }).then(({ data }: any) => {
      console.log('createUser', data);
    })
  }

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Add"
        size="large"
        onSearch={onSearch}
      />

      {todos.map((t: any) => <h1>{t}</h1>)}
    </>
  )
};

export default CreateTodo;
