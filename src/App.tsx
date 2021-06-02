import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      < Layout />
    </>
  )
}

export default App;
