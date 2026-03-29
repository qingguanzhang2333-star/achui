const stats = [
  { value: '50+', label: '全球合作伙伴' },
  { value: '10万+', label: '用户选择' },
  { value: '200+', label: '技术专利' },
  { value: '99.8%', label: '客户满意度' },
]

export default function StatsBar() {
  return (
    <section className="px-[360px] py-0">
      <div className="flex items-center justify-around py-[60px] bg-surface rounded-[20px] max-w-[1200px] mx-auto">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-outfit text-[52px] font-black tracking-[-2px] text-primary">
              {stat.value}
            </span>
            <span className="font-inter text-sm text-muted">{stat.label}</span>
          </div>
          {i < stats.length - 1 && (
            <div className="w-px h-[60px] bg-[#D0D5DD] ml-10" />
          )}
        </div>
      ))}
      </div>
    </section>
  )
}
