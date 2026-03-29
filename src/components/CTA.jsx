import { Calendar, Download } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-[100px] px-[360px] min-h-[600px] bg-gradient-to-b from-dark to-dark-light flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-24">
        <div className="w-[1200px] h-[500px] flex items-center justify-center">
          <img
            src="/images/generated-1770712769221.png"
            alt=""
            className="w-full h-full object-contain object-center mix-blend-screen"
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-10 max-w-[1200px] mx-auto">
        <div className="w-[60px] h-[3px] rounded-sm bg-primary" />
        <h2 className="font-outfit text-[48px] font-extrabold text-white text-center tracking-[-1px]">
          准备好迎接智能新时代了吗？
        </h2>
        <p className="font-inter text-lg text-muted-light text-center">
          立即联系我们，获取专属定制方案与产品咨询
        </p>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2.5 px-12 py-5 rounded-[32px] bg-primary font-inter text-base font-semibold text-white">
            <Calendar className="w-5 h-5" />
            预约演示
          </button>
          <button className="flex items-center gap-2.5 px-12 py-5 rounded-[32px] border border-white/30 font-inter text-base font-medium text-white">
            <Download className="w-5 h-5" />
            下载产品手册
          </button>
        </div>
        <p className="font-inter text-[13px] text-muted">
          已有 10,000+ 企业选择 NEXABOT  ·  30天无理由退款  ·  终身技术支持
        </p>
      </div>
    </section>
  )
}
