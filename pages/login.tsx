import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiUser } from 'react-icons/fi';
import { validateUsername } from '../lib/usernames';

const Login: NextPage = () => {
  const [cookies, setCookie] = useCookies(['username']);
  const [username, setUsername] = useState(cookies.username || '');
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  const submit = () => {
    if (username.toLowerCase().trim() === 'dany') {
      router.push('/danyuser');
    } else if (username.toLowerCase().trim() === 'isaac') {
      router.push('/isaacuser');
    } else if (username.toLowerCase().trim() === 'friedemann') {
      router.push('/friedemannuser');
    } else {
      const validated = validateUsername(username);
      if (validated) {
        setInvalid(false);
        setCookie('username', validated, { maxAge: 30 * 24 * 60 * 60 });
        router.push('/');
      } else {
        setInvalid(true);
      }
    }
  };

  return (
    <div className="container">
      <div className="columns m-3">
        <div className="column is-half is-offset-one-quarter">
          <nav className="panel">
            <p className="panel-heading">Who are you?</p>
            <div className="panel-block is-flex-direction-column is-align-items-flex-start">
              <p className="control has-icons-left">
                <input
                  className={`input ${invalid ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="First name only"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.code === 'Enter') {
                      submit();
                    }
                  }}
                  autoFocus
                />
                <span className="icon is-left">
                  <FiUser />
                </span>
              </p>
              {invalid && (
                <p className="help is-danger">I don&apos;t know you</p>
              )}
            </div>
            <div className="panel-block">
              <button
                className="button is-link is-outlined is-fullwidth"
                onSubmit={submit}
                onClick={submit}
              >
                Yeah, that is my name
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Login;
