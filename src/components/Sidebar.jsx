const navItems = [
  {
    section: 'เมนูหลัก',
    items: [
      { id: 'dashboard', label: 'ภาพรวม',    icon: '▣' },
      { id: 'orders',    label: 'คำสั่งซื้อ', icon: '◫', badge: 12 },
      { id: 'products',  label: 'สินค้า',     icon: '◧' },
      { id: 'customers', label: 'ลูกค้า',     icon: '◎' },
    ],
  },
]

export default function Sidebar({ page, navigate, open, onClose }) {
  return (
    <>
      <div className={`sidebar-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <div>
            <div className="logo-mark">Dashboard</div>
            <div className="logo-sub">E-Commerce</div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {navItems.map((group) => (
          <div key={group.section} className="nav-section">
            <div className="nav-section-label">{group.section}</div>
            {group.items.map((item) => (
              <button
                key={item.id}
                className={`nav-item${page === item.id ? ' active' : ''}`}
                onClick={() => { navigate(item.id); onClose(); }}
              >
                <span style={{ fontSize: 15 }}>{item.icon}</span>
                {item.label}
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </button>
            ))}
          </div>
        ))}

        <div style={{ marginTop: 'auto', padding: '14px 12px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8 }}>
            <div className="avatar" style={{ background: '#F0EEE8', color: '#6B6860' }}>A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>ผู้ดูแลระบบ</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>admin@example.co</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
