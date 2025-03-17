import React, {useState } from 'react'

export default function AuthForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div>
      <div>
        {!isLoggedIn ? (
          isRegistering ? (
            <>
              <h2>Тіркелу</h2>
              <input type="email" placeholder="Email немесе телефон"/>
              <input type="password" placeholder="Құпия сөз"/>
              <button onClick={() => setIsRegistering(false)}>Register</button>
            </>
          ) : (
            <>
              <h2>Жүйеге кіру қажет</h2>
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
              <button onClick={() => setIsRegistering(true)}>Register</button>
            </>
          )
        ) : (
          <>
            <h2>Бастапқы бетке қош келдіңіз</h2>
            <button onClick={() => setIsLoggedIn(false)}>Log out</button>
          </>
        )}
      </div>
    </div>
  )
}
