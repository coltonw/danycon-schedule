'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  }, []);
  return <div />;
};

export default Home;
