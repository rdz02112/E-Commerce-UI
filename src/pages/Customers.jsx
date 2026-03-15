import { useState } from 'react'
import { customers } from '../data'

const statusMap = {
  vip:    { label: 'VIP',      cls: 'badge-blue'  },
  active: { label: 'ปกติ',     cls: 'badge-green' },
  new:    { label: 'ใหม่',     cls: 'badge-gray'  },
}

export default function Customers() {
  const [search, setSearch] = useState('')
  const [sort, setSort]     = useState('spent')

  const filtered = customers
    .filter(c => c.name.includes(search) || c.email.includes(search))
    .sort((a, b) => sort === 'spent' ? b.spent - a.spent : b.orders - a.orders)

  const totalSpend = customers.reduce((s, c) => s + c.spent, 0)
  const vipCount   = customers.filter(c => c.status === 'vip').length
  const newCount   = customers.filter(c => c.status === 'new').length

  return (
    <div className="content">
      <div className="fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
        <div>
          <div className="page-title">ลูกค้า</div>
          <div className="page-sub">{customers.length} บัญชีที่ลงทะเบียน</div>
        </div>
        <button className="btn btn-outline hide-mobile">ส่งออก</button>
      </div>

      <div className="grid-3 fade-in d1" style={{ marginBottom: 16 }}>
        <div className="stat-card">
          <div className="stat-label">ลูกค้าทั้งหมด</div>
          <div className="stat-value" style={{ fontSize: 26 }}>{customers.length}</div>
          <span className="stat-change up">↑ 5.3% เดือนนี้</span>
        </div>
        <div className="stat-card">
          <div className="stat-label">สมาชิก VIP</div>
          <div className="stat-value" style={{ fontSize: 26 }}>{vipCount}</div>
          <span className="badge badge-blue" style={{ marginTop: 6 }}>{((vipCount / customers.length) * 100).toFixed(0)}% ของทั้งหมด</span>
        </div>
        <div className="stat-card">
          <div className="stat-label">ยอดซื้อรวม</div>
          <div className="stat-value" style={{ fontSize: 26 }}>฿{(totalSpend / 1000000).toFixed(2)}M</div>
          <span className="badge badge-gray" style={{ marginTop: 6 }}>ใหม่ {newCount} คน</span>
        </div>
      </div>

      <div className="card card-pad fade-in d2" style={{ marginBottom: 14, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
        <div className="search-wrap" style={{ width: 280 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input placeholder="ค้นหาชื่อหรืออีเมล…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>เรียงตาม:</span>
          {[['spent', 'ยอดซื้อสูงสุด'], ['orders', 'ออเดอร์มากสุด']].map(([key, label]) => (
            <button key={key} onClick={() => setSort(key)}
              className={`btn ${sort === key ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '5px 12px', fontSize: 12 }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="card fade-in d3">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ลูกค้า</th>
                <th>จังหวัด</th>
                <th>ออเดอร์</th>
                <th>ยอดซื้อรวม</th>
                <th>สมัครเมื่อ</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <div className="avatar">{c.avatar}</div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{c.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontSize: 13 }}>{c.country}</td>
                  <td style={{ fontWeight: 500 }}>{c.orders}</td>
                  <td style={{ fontWeight: 600 }}>฿{c.spent.toLocaleString()}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-2)' }}>{c.joined}</td>
                  <td><span className={`badge ${statusMap[c.status].cls}`}>{statusMap[c.status].label}</span></td>
                  <td><button className="btn btn-outline" style={{ padding: '5px 10px', fontSize: 12 }}>โปรไฟล์</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
