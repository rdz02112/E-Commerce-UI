import { useState } from 'react'
import Sidebar   from './components/Sidebar'
import Topbar    from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Products  from './pages/Products'
import Orders    from './pages/Orders'
import Customers from './pages/Customers'

export default function App() {
  const [page, setPage]           = useState('dashboard')
  const [sidebarOpen, setSidebar] = useState(false)

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <Dashboard />
      case 'products':  return <Products />
      case 'orders':    return <Orders />
      case 'customers': return <Customers />
      default:          return <Dashboard />
    }
  }

  return (
    <div className="layout">
      <Sidebar
        page={page}
        navigate={setPage}
        open={sidebarOpen}
        onClose={() => setSidebar(false)}
      />
      <div className="main">
        <Topbar page={page} onMenuClick={() => setSidebar(true)} />
        {renderPage()}
      </div>
    </div>
  )
}
