
import './App.css'
import AppRoutes from './routes/AppRoutes.jsx'
import ToastProvider from './components/common/Toast/ToastProvider.jsx'

function App() {
  return (
    <>
      <ToastProvider />
      <AppRoutes />
    </>
  )
}

export default App
