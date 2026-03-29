import { Twitter, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const productLinks = [
  { label: 'NX-One 家庭服务', href: '/products/nx-one' },
  { label: 'NX-Edu 教育机器人', href: '/products/nx-edu' },
  { label: 'NX-Pro 工业协作', href: '/products/nx-pro' },
  { label: 'NX-Med 医疗辅助', href: '/products/nx-med' },
]

const companyLinks = [
  { label: '关于我们', href: '/about' },
  { label: '新闻动态', href: '/news' },
  { label: '加入我们', href: '/careers' },
  { label: '投资者关系', href: '/investors' },
]

const supportLinks = [
  { label: '帮助中心', href: '/help' },
  { label: '技术文档', href: '/docs' },
  { label: '售后服务', href: '/support' },
  { label: '联系我们', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="py-[60px] px-[360px] pb-10 bg-dark">
      <div className="flex justify-between mb-12">
        <div className="w-80 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary" />
            <span className="font-outfit text-xl font-extrabold text-white tracking-[2px]">NEXABOT</span>
          </div>
          <p className="font-inter text-sm text-muted leading-[1.7]">
            重新定义人机交互的未来。
            <br />
            让每个家庭、每家企业都能享受
            <br />
            AI 机器人带来的便利。
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-muted-light hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-muted-light hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-muted-light hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit text-sm font-bold text-white">产品</h4>
            {productLinks.map((link) => (
              <Link key={link.label} to={link.href} className="font-inter text-[13px] text-muted hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit text-sm font-bold text-white">公司</h4>
            {companyLinks.map((link) => (
              <Link key={link.label} to={link.href} className="font-inter text-[13px] text-muted hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit text-sm font-bold text-white">支持</h4>
            {supportLinks.map((link) => (
              <Link key={link.label} to={link.href} className="font-inter text-[13px] text-muted hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px bg-white/10 w-full mb-10" />
      <div className="flex justify-between items-center">
        <span className="font-inter text-xs text-muted">© 2026 NEXABOT. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="font-inter text-xs text-muted cursor-pointer hover:text-white transition-colors">隐私政策</span>
          <span className="font-inter text-xs text-muted cursor-pointer hover:text-white transition-colors">服务条款</span>
        </div>
      </div>
    </footer>
  )
}
