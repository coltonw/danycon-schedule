'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { validateUsername } from '../../lib/usernames';

const ScheduleRedirect = () => {
  const { push, replace } = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const validated = validateUsername(username || '');
    if (validated) {
      replace(`/schedule/${validated}`);
    } else {
      push('/login');
    }
  }, [push, replace]);
  return <div />;
};

export default ScheduleRedirect;
