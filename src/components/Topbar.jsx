const pageTitles = {
  dashboard: 'ภาพรวม',
  orders:    'คำสั่งซื้อ',
  products:  'สินค้า',
  customers: 'ลูกค้า',
}

export default function Topbar({ page, onMenuClick }) {
  return (
    <div className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button className="hamburger" onClick={onMenuClick} aria-label="เมนู">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <div>
          <span style={{ fontSize: 13, color: 'var(--text-3)' }}>E-COMMERCE /&nbsp;</span>
          <span style={{ fontSize: 13, fontWeight: 500 }}>{pageTitles[page]}</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="search-wrap hide-mobile">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input placeholder="ค้นหา…" />
        </div>
        <button className="btn btn-outline" style={{ padding: '7px 10px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
