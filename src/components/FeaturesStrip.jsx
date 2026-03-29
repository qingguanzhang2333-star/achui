import { Cpu, Sparkles, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: '前沿科技',
    desc: '搭载自研 NX-7 神经网络芯片，\n实时处理多模态感知数据',
  },
  {
    icon: Sparkles,
    title: '智能未来',
    desc: '深度学习自适应算法，\n让机器人真正理解人类意图',
  },
  {
    icon: ShieldCheck,
    title: '安全可靠',
    desc: '三重安全认证体系，\n通过国际 ISO 9001 标准检测',
  },
]

export default function FeaturesStrip() {
  return (
    <section className="flex items-center justify-center gap-10 py-[60px] px-[360px] bg-dark">
      {features.map((feature, i) => (
        <div key={i} className="flex-1 relative flex flex-col items-center justify-center py-8 px-7 min-h-[280px]">
          <span
            className="absolute inset-0 flex items-center justify-center font-outfit text-[200px] font-black tracking-[-8px] leading-none text-center bg-gradient-to-b from-primary/20 to-transparent bg-clip-text text-transparent"
            style={{ opacity: 0.16 }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="relative z-10 flex flex-col items-center gap-4 p-5 pt-7">
            <div className="flex items-center justify-center w-16 h-16 rounded-[18px] bg-gradient-to-b from-[#4D9AFF] to-[#0044DD] shadow-[0_10px_24px_-2px_rgba(0,102,255,0.3)]">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-outfit text-[22px] font-bold text-white text-center">{feature.title}</h3>
            <p className="font-inter text-sm text-muted-light leading-[1.6] text-center max-w-full whitespace-pre-line">
              {feature.desc}
            </p>
          </div>
          {i < features.length - 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[120px] bg-white/15" />
          )}
        </div>
      ))}
    </section>
  )
}
