import React, { useState } from 'react'

export default function TaskEditing() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
                height: '100vh',
                display: 'flex',
                justifyComtent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <p>{isDark ? 'Қараңғы режим' : 'Жарық режим'}</p>
            <button onClick={() => setIsDark(!isDark)}>
                {isDark ? 'Жарық режимге ауысу' : 'Қараңғы режимге ауысу'}
            </button>
        </div>
    )
}
