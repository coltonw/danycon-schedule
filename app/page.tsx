'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { validateUsername } from '../lib/usernames';

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const validated = validateUsername(username || '');
    if (validated) {
      push(`/schedule/${validated}`);
    } else {
      push('/login');
    }
  }, [push]);
  return <div />;
};

export default Home;
