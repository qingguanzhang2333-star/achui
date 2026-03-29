import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-[360px] bg-white border-b border-black/5">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-primary" />
        <span className="font-outfit font-extrabold text-[22px] tracking-[2px] text-dark">NEXABOT</span>
      </Link>
      <nav className="flex items-center gap-10">
        <Link to="/" className="font-inter text-[15px] font-medium text-dark">首页</Link>
        <Link to="/products" className="font-inter text-[15px] font-medium text-muted">产品</Link>
        <Link to="/about" className="font-inter text-[15px] font-medium text-muted">关于我们</Link>
        <span className="font-inter text-[15px] font-medium text-muted cursor-pointer">技术</span>
        <span className="font-inter text-[15px] font-medium text-muted cursor-pointer">联系</span>
      </nav>
      <button className="px-7 py-3 rounded-full bg-primary font-inter text-sm font-semibold text-white">
        立即咨询
      </button>
    </header>
  )
}
