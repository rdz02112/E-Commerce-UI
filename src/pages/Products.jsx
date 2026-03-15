import { useState } from 'react'
import { products } from '../data'

const statusMap = {
  active: { label: 'มีสินค้า',   cls: 'badge-green' },
  low:    { label: 'ใกล้หมด',    cls: 'badge-amber'  },
  out:    { label: 'สินค้าหมด', cls: 'badge-red'    },
}

export default function Products() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.includes(search)
    const matchFilter = filter === 'all' || p.status === filter
    return matchSearch && matchFilter
  })

  const filterLabels = { all: 'ทั้งหมด', active: 'มีสินค้า', low: 'ใกล้หมด', out: 'หมด' }

  return (
    <div className="content">
      <div className="fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
        <div>
          <div className="page-title">สินค้า</div>
          <div className="page-sub">ทั้งหมด {products.length} รายการ</div>
        </div>
        <button className="btn btn-primary">+ เพิ่มสินค้า</button>
      </div>

      <div className="card card-pad fade-in d1" style={{ marginBottom: 14, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
        <div className="search-wrap" style={{ width: 260 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input placeholder="ค้นหาสินค้า…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {Object.entries(filterLabels).map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key)}
              className={`btn ${filter === key ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: 12 }}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-3)' }}>{filtered.length} รายการ</div>
      </div>

      <div className="card fade-in d2">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>หมวดหมู่</th>
                <th>ราคา</th>
                <th>คงเหลือ</th>
                <th>ขายแล้ว</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="prod-img">{p.emoji}</div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{p.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-gray">{p.category}</span></td>
                  <td style={{ fontWeight: 600 }}>฿{p.price.toLocaleString()}</td>
                  <td>
                    <span style={{ color: p.stock === 0 ? 'var(--red)' : p.stock < 10 ? 'var(--amber)' : 'var(--text-1)', fontWeight: 500 }}>
                      {p.stock}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-2)' }}>{p.sold}</td>
                  <td><span className={`badge ${statusMap[p.status].cls}`}>{statusMap[p.status].label}</span></td>
                  <td><button className="btn btn-outline" style={{ padding: '5px 10px', fontSize: 12 }}>แก้ไข</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
