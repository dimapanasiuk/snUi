import { useState } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const CreateComponent = ({ onSubmitForm }: any) => {
  const [title, setTitle] = useState<String>('');
  const [text, setText] = useState<String>('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    onSubmitForm({ title, text })
  }

  return (
    <>
      <Input
        placeholder="Title of your task"
        allowClear
        size="large"
        onChange={(e: any) => setTitle(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TextArea
        rows={2}
        style={{ marginBottom: '20px' }}
        onChange={(e: any) => setText(e.target.value)}
      />
      <Button type="primary" onClick={onSubmit}>Create new todo</Button>
    </>
  )
};

export default CreateComponent;
