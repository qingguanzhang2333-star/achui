import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="flex items-center gap-20 px-[360px] py-0 h-[720px] bg-gradient-to-br from-white via-[#F0F4FF] to-[#E8F0FE]">
      <div className="flex-1 flex flex-col justify-center gap-8">
        <div className="flex items-center gap-2 px-5 py-2 rounded-[20px] bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-inter text-[13px] font-medium text-primary">新一代智能机器人 · 2026</span>
        </div>
        <div>
          <h1 className="font-outfit text-[72px] font-black leading-[1.05] tracking-[-2px] text-dark">
            重新定义
            <br />
            人机交互的
            <br />
            <span className="bg-gradient-to-b from-primary via-[#00C2FF] to-[#60A5FA] bg-clip-text text-transparent">未来</span>
          </h1>
        </div>
        <p className="font-inter text-lg text-muted leading-[1.7] max-w-[480px]">
          NEXABOT 致力于打造最前沿的人工智能机器人，
          <br />
          将科技与生活无缝融合，开启智能新纪元。
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/products/nx-one"
            className="flex items-center gap-2.5 px-10 py-[18px] rounded-[32px] bg-primary font-inter text-base font-semibold text-white"
          >
            探索产品
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="flex items-center gap-2.5 px-10 py-[18px] rounded-[32px] border border-[#D0D5DD] font-inter text-base font-medium text-dark">
            了解更多
          </button>
        </div>
      </div>
      <div className="relative w-[560px] h-[600px] rounded-2xl overflow-hidden">
        <img
          src="/images/generated-1770710471264.png"
          alt="NX-One 机器人"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
