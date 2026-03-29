import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'nx-one',
    name: 'NX-One 家庭服务机器人',
    desc: '全屋智能管家，语音交互 · 自主导航 · 情感陪伴',
    price: '¥ 29,800',
    tag: '热销',
    tagColor: 'bg-primary/10 text-primary',
    img: '/images/generated-1770710499171.png',
    href: '/products/nx-one',
    featured: true,
  },
  {
    id: 'nx-edu',
    name: 'NX-Edu 教育机器人',
    desc: 'AI 编程启蒙 · 互动式教学',
    price: '¥ 12,800',
    tag: '教育',
    tagColor: 'bg-emerald-500/10 text-emerald-600',
    img: '/images/generated-1770713276274.png',
    href: '/products/nx-edu',
  },
  {
    id: 'nx-pro',
    name: 'NX-Pro 工业协作机器人',
    desc: '精密操控 · 人机协作 · 7轴联动',
    price: '¥ 168,000',
    tag: '工业',
    tagColor: 'bg-primary/20 text-blue-400',
    img: '/images/generated-1770710521042.png',
    href: '/products/nx-pro',
    dark: true,
  },
  { name: 'NX-Buddy 陪伴机器人', price: '¥ 6,800', img: '/images/generated-1770713411720.png' },
  { name: 'NX-Med 医疗辅助机器人', price: '¥ 89,000', img: '/images/generated-1770713439146.png' },
  { name: 'NX-Guard 安防巡逻机器人', price: '¥ 45,000', img: '/images/generated-1770713456127.png' },
]

export default function Products() {
  return (
    <section className="py-[100px] px-[360px] bg-white">
      <div className="flex justify-between items-end mb-[60px]">
        <div>
          <p className="font-outfit text-[13px] font-semibold text-primary tracking-[4px] mb-3">PRODUCTS</p>
          <h2 className="font-outfit text-[48px] font-extrabold text-dark tracking-[-1px]">在售机器人</h2>
        </div>
        <div className="flex items-center gap-2 py-3 cursor-pointer group">
          <span className="font-inter text-[15px] font-medium text-primary">查看全部</span>
          <ArrowRight className="w-[18px] h-[18px] text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="flex gap-6 h-[640px] mb-6">
        <Link
          to="/products/nx-one"
          className="flex-1 flex flex-col rounded-[20px] overflow-hidden bg-surface"
        >
          <div className="flex-1 min-h-0">
            <img
              src={products[0].img}
              alt={products[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-8 bg-surface">
            <span className="inline-flex px-3.5 py-1.5 rounded-xl bg-primary/10 font-inter text-xs font-semibold text-primary w-fit">
              {products[0].tag}
            </span>
            <h3 className="font-outfit text-2xl font-bold text-dark">{products[0].name}</h3>
            <p className="font-inter text-sm text-muted">{products[0].desc}</p>
            <div className="flex justify-between items-center">
              <span className="font-outfit text-[28px] font-extrabold text-dark">{products[0].price}</span>
              <span className="flex items-center gap-1.5 px-6 py-2.5 rounded-[20px] bg-primary font-inter text-[13px] font-semibold text-white">
                <ShoppingCart className="w-4 h-4" />
                立即购买
              </span>
            </div>
          </div>
        </Link>

        <div className="flex-1 flex flex-col gap-6">
          <Link
            to="/products/nx-edu"
            className="flex-1 flex rounded-[20px] overflow-hidden bg-surface"
          >
            <div className="w-60 flex-shrink-0">
              <img src={products[1].img} alt={products[1].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 gap-2.5">
              <span className={`inline-flex px-3 py-1.5 rounded-[10px] ${products[1].tagColor} font-inter text-[11px] font-semibold w-fit`}>
                {products[1].tag}
              </span>
              <h3 className="font-outfit text-xl font-bold text-dark">{products[1].name}</h3>
              <p className="font-inter text-[13px] text-muted">{products[1].desc}</p>
              <span className="font-outfit text-[22px] font-extrabold text-dark">{products[1].price}</span>
            </div>
          </Link>
          <Link
            to="/products/nx-pro"
            className="flex-1 flex rounded-[20px] overflow-hidden bg-dark"
          >
            <div className="w-60 flex-shrink-0">
              <img src={products[2].img} alt={products[2].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 gap-2.5">
              <span className={`inline-flex px-3 py-1.5 rounded-[10px] ${products[2].tagColor} font-inter text-[11px] font-semibold w-fit`}>
                {products[2].tag}
              </span>
              <h3 className="font-outfit text-xl font-bold text-white">{products[2].name}</h3>
              <p className="font-inter text-[13px] text-muted-light">{products[2].desc}</p>
              <span className="font-outfit text-[22px] font-extrabold text-white">{products[2].price}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex gap-6 h-[380px]">
        {products.slice(3, 6).map((p, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col rounded-[20px] overflow-hidden bg-surface cursor-pointer hover:opacity-95 transition-opacity"
          >
            <div className="flex-1 min-h-0">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-5 bg-surface">
              <h3 className="font-outfit text-lg font-bold text-dark">{p.name}</h3>
              <span className="font-outfit text-lg font-extrabold text-dark">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
