import { useState } from 'react'
import { orders } from '../data'

const statusMap = {
  delivered:  { label: 'ส่งแล้ว',           cls: 'badge-green' },
  shipped:    { label: 'กำลังส่ง',           cls: 'badge-blue'  },
  processing: { label: 'กำลังดำเนินการ',    cls: 'badge-amber' },
  cancelled:  { label: 'ยกเลิก',            cls: 'badge-red'   },
}

export default function Orders() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = orders.filter(o => {
    const matchSearch = o.customer.includes(search) || o.id.includes(search)
    const matchFilter = filter === 'all' || o.status === filter
    return matchSearch && matchFilter
  })

  const counts = {
    all:        orders.length,
    delivered:  orders.filter(o => o.status === 'delivered').length,
    shipped:    orders.filter(o => o.status === 'shipped').length,
    processing: orders.filter(o => o.status === 'processing').length,
    cancelled:  orders.filter(o => o.status === 'cancelled').length,
  }

  const filterLabels = { all: 'ทั้งหมด', delivered: 'ส่งแล้ว', shipped: 'กำลังส่ง', processing: 'กำลังดำเนินการ', cancelled: 'ยกเลิก' }

  return (
    <div className="content">
      <div className="fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
        <div>
          <div className="page-title">คำสั่งซื้อ</div>
          <div className="page-sub">ทั้งหมด {orders.length} รายการ</div>
        </div>
        <button className="btn btn-outline hide-mobile">ส่งออก CSV</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }} className="fade-in d1">
        {Object.entries(counts).map(([key, count]) => (
          <button key={key} onClick={() => setFilter(key)} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '8px 14px',
            background: filter === key ? 'var(--accent)' : 'var(--surface)',
            border: `1px solid ${filter === key ? 'var(--accent)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'all 0.15s',
          }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: filter === key ? '#fff' : 'var(--text-1)' }}>
              {filterLabels[key]}
            </span>
            <span style={{
              fontSize: 11, fontWeight: 600, padding: '1px 7px', borderRadius: 99,
              background: filter === key ? 'rgba(255,255,255,0.2)' : 'var(--bg)',
              color: filter === key ? '#fff' : 'var(--text-2)',
            }}>{count}</span>
          </button>
        ))}
      </div>

      <div className="card card-pad fade-in d2" style={{ marginBottom: 14 }}>
        <div className="search-wrap" style={{ width: 300 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input placeholder="ค้นหาจากชื่อลูกค้าหรือเลขออเดอร์…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="card fade-in d3">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ออเดอร์</th>
                <th>ลูกค้า</th>
                <th>วันที่</th>
                <th>รายการ</th>
                <th>ยอดรวม</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id}>
                  <td><span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--accent)' }}>{o.id}</span></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <div className="avatar">{o.avatar}</div>
                      <span style={{ fontWeight: 500 }}>{o.customer}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-2)', fontSize: 12 }}>{o.date}</td>
                  <td style={{ color: 'var(--text-2)' }}>{o.items} รายการ</td>
                  <td style={{ fontWeight: 600 }}>฿{o.total.toLocaleString()}</td>
                  <td><span className={`badge ${statusMap[o.status].cls}`}>{statusMap[o.status].label}</span></td>
                  <td><button className="btn btn-outline" style={{ padding: '5px 10px', fontSize: 12 }}>ดู</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
