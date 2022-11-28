import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login'
import EscalaAberta from './EscalaAberta'
import PrincipalTela from './PrincipalTela'
import './index.css'

import BlocoEscala from './BlocoEscala'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Login/>
<PrincipalTela/>
<PrincipalTela/>
<EscalaAberta />
  </React.StrictMode>
)
