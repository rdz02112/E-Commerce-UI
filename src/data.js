// ── Revenue chart data ──────────────────────────────────────────
export const revenueData = [
  { month: 'ม.ค.', revenue: 32400, orders: 210 },
  { month: 'ก.พ.', revenue: 28900, orders: 188 },
  { month: 'มี.ค.', revenue: 41200, orders: 265 },
  { month: 'เม.ย.', revenue: 38700, orders: 241 },
  { month: 'พ.ค.', revenue: 52100, orders: 318 },
  { month: 'มิ.ย.', revenue: 47800, orders: 294 },
  { month: 'ก.ค.', revenue: 61500, orders: 387 },
  { month: 'ส.ค.', revenue: 58200, orders: 356 },
  { month: 'ก.ย.', revenue: 67400, orders: 412 },
  { month: 'ต.ค.', revenue: 72100, orders: 445 },
  { month: 'พ.ย.', revenue: 89300, orders: 541 },
  { month: 'ธ.ค.', revenue: 94700, orders: 582 },
]

// ── Category data ────────────────────────────────────────────────
export const categoryData = [
  { name: 'อิเล็กทรอนิกส์', value: 38, color: '#2D5BE3' },
  { name: 'เสื้อผ้า',        value: 27, color: '#18A058' },
  { name: 'บ้านและสวน',      value: 18, color: '#D97706' },
  { name: 'หนังสือ',         value: 10, color: '#7C3AED' },
  { name: 'อื่นๆ',           value: 7,  color: '#D94F3D' },
]

// ── Products ────────────────────────────────────────────────────
export const products = [
  { id: 'P001', emoji: '💻', name: 'MacBook Pro 14 นิ้ว',      category: 'อิเล็กทรอนิกส์', price: 69900, stock: 24,  sold: 142, status: 'active' },
  { id: 'P002', emoji: '🎧', name: 'AirPods Pro',              category: 'อิเล็กทรอนิกส์', price: 8990,  stock: 87,  sold: 398, status: 'active' },
  { id: 'P003', emoji: '👟', name: 'รองเท้าวิ่ง X1',           category: 'เสื้อผ้า',        price: 4590,  stock: 0,   sold: 211, status: 'out'    },
  { id: 'P004', emoji: '🪴', name: 'มอนสเตอร่า เดลิซิโอซ่า', category: 'บ้านและสวน',      price: 1590,  stock: 34,  sold: 76,  status: 'active' },
  { id: 'P005', emoji: '📷', name: 'Sony Alpha A7 IV',         category: 'อิเล็กทรอนิกส์', price: 98000, stock: 8,   sold: 29,  status: 'low'    },
  { id: 'P006', emoji: '🧥', name: 'เสื้อโค้ตผ้าวูล',          category: 'เสื้อผ้า',        price: 12500, stock: 15,  sold: 64,  status: 'active' },
  { id: 'P007', emoji: '📚', name: 'หนังสือ Design Systems',   category: 'หนังสือ',         price: 2100,  stock: 120, sold: 183, status: 'active' },
  { id: 'P008', emoji: '🖥️', name: 'LG UltraWide 34 นิ้ว',    category: 'อิเล็กทรอนิกส์', price: 31500, stock: 3,   sold: 47,  status: 'low'    },
  { id: 'P009', emoji: '🎒', name: 'กระเป๋าหนังเป้',           category: 'เสื้อผ้า',        price: 6800,  stock: 41,  sold: 92,  status: 'active' },
  { id: 'P010', emoji: '💡', name: 'ไฟ LED สมาร์ท',            category: 'บ้านและสวน',      price: 1390,  stock: 200, sold: 517, status: 'active' },
]

// ── Orders ──────────────────────────────────────────────────────
export const orders = [
  { id: '#ORD-4821', customer: 'สุพิชา เลิศวงศ์',    avatar: 'สพ', date: '14 ธ.ค. 2567', items: 3, total: 83160, status: 'delivered'  },
  { id: '#ORD-4820', customer: 'ณัฐพล จันทร์สว่าง',  avatar: 'ณพ', date: '14 ธ.ค. 2567', items: 1, total: 8990,  status: 'shipped'    },
  { id: '#ORD-4819', customer: 'ปรียา ศรีสมบัติ',    avatar: 'ปร', date: '13 ธ.ค. 2567', items: 5, total: 21490, status: 'processing' },
  { id: '#ORD-4818', customer: 'วิชัย มีสุข',        avatar: 'วช', date: '13 ธ.ค. 2567', items: 2, total: 34580, status: 'delivered'  },
  { id: '#ORD-4817', customer: 'อัยการ ทองดี',       avatar: 'อย', date: '12 ธ.ค. 2567', items: 1, total: 4590,  status: 'cancelled'  },
  { id: '#ORD-4816', customer: 'ลลิตา พรหมเสน',      avatar: 'ลล', date: '12 ธ.ค. 2567', items: 4, total: 113640, status: 'delivered' },
  { id: '#ORD-4815', customer: 'ธนาธร สุขสวัสดิ์',   avatar: 'ธน', date: '11 ธ.ค. 2567', items: 2, total: 14290, status: 'shipped'    },
  { id: '#ORD-4814', customer: 'เอมอร วงษ์ทอง',      avatar: 'อม', date: '11 ธ.ค. 2567', items: 1, total: 2100,  status: 'delivered'  },
  { id: '#ORD-4813', customer: 'ไชยวัฒน์ แก้วใส',    avatar: 'ชว', date: '10 ธ.ค. 2567', items: 6, total: 65590, status: 'processing' },
  { id: '#ORD-4812', customer: 'ฟาติมา หะซัน',       avatar: 'ฟต', date: '10 ธ.ค. 2567', items: 3, total: 19870, status: 'delivered'  },
  { id: '#ORD-4811', customer: 'นภดล วิลาวัลย์',     avatar: 'นภ', date: '09 ธ.ค. 2567', items: 2, total: 78890, status: 'shipped'    },
  { id: '#ORD-4810', customer: 'อิสราภรณ์ ดาวเรือง',  avatar: 'อส', date: '09 ธ.ค. 2567', items: 1, total: 6800,  status: 'delivered'  },
]

// ── Customers ───────────────────────────────────────────────────
export const customers = [
  { id: 'C001', name: 'สุพิชา เลิศวงศ์',    avatar: 'สพ', email: 'supicha@example.com',   country: '🇹🇭 กรุงเทพฯ',   orders: 14, spent: 294700, joined: 'ม.ค. 2566', status: 'vip'    },
  { id: 'C002', name: 'ณัฐพล จันทร์สว่าง',  avatar: 'ณพ', email: 'nuttapon@example.com',  country: '🇹🇭 เชียงใหม่',   orders: 8,  spent: 112350, joined: 'มี.ค. 2566', status: 'active' },
  { id: 'C003', name: 'ปรียา ศรีสมบัติ',    avatar: 'ปร', email: 'priya@example.com',      country: '🇹🇭 ภูเก็ต',      orders: 22, spent: 414900, joined: 'พ.ย. 2565', status: 'vip'    },
  { id: 'C004', name: 'วิชัย มีสุข',        avatar: 'วช', email: 'wichai@example.com',     country: '🇹🇭 ขอนแก่น',    orders: 5,  spent: 57050,  joined: 'มิ.ย. 2566', status: 'active' },
  { id: 'C005', name: 'อัยการ ทองดี',       avatar: 'อย', email: 'aiyakarn@example.com',   country: '🇹🇭 กรุงเทพฯ',   orders: 1,  spent: 4590,   joined: 'ธ.ค. 2567', status: 'new'    },
  { id: 'C006', name: 'ลลิตา พรหมเสน',      avatar: 'ลล', email: 'lalita@example.com',     country: '🇹🇭 กรุงเทพฯ',   orders: 31, spent: 680750, joined: 'ส.ค. 2565', status: 'vip'    },
  { id: 'C007', name: 'ธนาธร สุขสวัสดิ์',   avatar: 'ธน', email: 'thanathorn@example.com', country: '🇹🇭 นครราชสีมา', orders: 7,  spent: 143500, joined: 'เม.ย. 2566', status: 'active' },
  { id: 'C008', name: 'เอมอร วงษ์ทอง',      avatar: 'อม', email: 'aimorn@example.com',     country: '🇹🇭 เชียงราย',   orders: 9,  spent: 100450, joined: 'ก.พ. 2566', status: 'active' },
  { id: 'C009', name: 'ไชยวัฒน์ แก้วใส',    avatar: 'ชว', email: 'chaiwat@example.com',    country: '🇹🇭 สงขลา',      orders: 18, spent: 322000, joined: 'ก.ย. 2565', status: 'vip'    },
  { id: 'C010', name: 'ฟาติมา หะซัน',       avatar: 'ฟต', email: 'fatima@example.com',     country: '🇹🇭 ยะลา',       orders: 6,  spent: 73500,  joined: 'ก.ค. 2566', status: 'active' },
  { id: 'C011', name: 'นภดล วิลาวัลย์',     avatar: 'นภ', email: 'noppadon@example.com',   country: '🇹🇭 กรุงเทพฯ',   orders: 11, spent: 221900, joined: 'ม.ค. 2566', status: 'active' },
  { id: 'C012', name: 'อิสราภรณ์ ดาวเรือง', avatar: 'อส', email: 'isaraporn@example.com',  country: '🇹🇭 ลำปาง',      orders: 3,  spent: 28700,  joined: 'ต.ค. 2567', status: 'new'    },
]
