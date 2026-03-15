import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { revenueData, categoryData, orders, products } from '../data'

function StatCard({ label, value, change, up, icon, delay }) {
  return (
    <div className={`stat-card fade-in d${delay}`}>
      <div className="stat-icon-wrap">{icon}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <span className={`stat-change ${up ? 'up' : 'down'}`}>
        {up ? '↑' : '↓'} {change}
      </span>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', boxShadow: 'var(--shadow-md)' }}>
      <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>฿{payload[0].value.toLocaleString()}</div>
    </div>
  )
}

function OrderBadge({ status }) {
  const map = { delivered: 'badge-green', shipped: 'badge-blue', processing: 'badge-amber', cancelled: 'badge-red' }
  const label = { delivered: 'ส่งแล้ว', shipped: 'กำลังส่ง', processing: 'กำลังดำเนินการ', cancelled: 'ยกเลิก' }
  return <span className={`badge ${map[status]}`} style={{ fontSize: 10, marginTop: 2 }}>{label[status]}</span>
}

export default function Dashboard() {
  const recentOrders = orders.slice(0, 5)
  const topProducts  = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5)

  return (
    <div className="content">
      <div className="fade-in" style={{ marginBottom: 20 }}>
        <div className="page-title">สวัสดีตอนเช้า 👋</div>
        <div className="page-sub">นี่คือภาพรวมร้านค้าของคุณวันนี้</div>
      </div>

      <div className="stat-grid">
        <StatCard label="รายได้รวม"        value="฿3.33M"  change="12.4% จากเดือนที่แล้ว" up icon="💰" delay={1} />
        <StatCard label="คำสั่งซื้อทั้งหมด" value="4,821"  change="8.1% จากเดือนที่แล้ว"  up icon="📦" delay={2} />
        <StatCard label="ลูกค้า"           value="1,284"   change="5.3% จากเดือนที่แล้ว"  up icon="👥" delay={3} />
        <StatCard label="มูลค่าเฉลี่ย/ออเดอร์" value="฿6,900" change="2.1% จากเดือนที่แล้ว" up={false} icon="🛒" delay={4} />
      </div>

      <div className="grid-2" style={{ marginBottom: 16 }}>
        <div className="card card-pad fade-in d1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>รายได้</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>ม.ค. – ธ.ค. 2567</div>
            </div>
            <span className="badge badge-green">↑ 12.4%</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#2D5BE3" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#2D5BE3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: 'var(--text-3)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-3)' }} axisLine={false} tickLine={false} tickFormatter={v => `฿${v/1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#2D5BE3" strokeWidth={2} fill="url(#colorRev)" dot={false} activeDot={{ r: 4, fill: '#2D5BE3' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card card-pad fade-in d2">
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>ยอดขายตามหมวดหมู่</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>สัดส่วนรายได้ปี 2567</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <PieChart width={130} height={130}>
              <Pie data={categoryData} cx={60} cy={60} innerRadius={36} outerRadius={60} dataKey="value" paddingAngle={3}>
                {categoryData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
            </PieChart>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {categoryData.map((c) => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{c.name}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card fade-in d3">
          <div style={{ padding: '14px 18px 12px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>คำสั่งซื้อล่าสุด</div>
            <span style={{ fontSize: 12, color: 'var(--accent)', cursor: 'pointer' }}>ดูทั้งหมด →</span>
          </div>
          <div className="table-wrap">
            <table>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <div className="avatar">{o.avatar}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 500 }}>{o.customer}</div>
                          <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{o.id}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>฿{o.total.toLocaleString()}</div>
                      <OrderBadge status={o.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card fade-in d4">
          <div style={{ padding: '14px 18px 12px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>สินค้าขายดี</div>
            <span style={{ fontSize: 12, color: 'var(--accent)', cursor: 'pointer' }}>ดูทั้งหมด →</span>
          </div>
          <div style={{ padding: '6px 0' }}>
            {topProducts.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 18px' }}>
                <div style={{ fontSize: 12, color: 'var(--text-3)', width: 16 }}>#{i + 1}</div>
                <div className="prod-img">{p.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)' }}>ขายแล้ว {p.sold} ชิ้น</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>฿{p.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
