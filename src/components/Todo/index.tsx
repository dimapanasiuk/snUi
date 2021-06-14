import { Input, } from 'antd';

const { Search } = Input;

const CreateTodo = ( ) => {
  const onSearch = (value: any) => console.log(value);
  
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    )
};

export default CreateTodo;
