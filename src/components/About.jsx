export default function About() {
  return (
    <section className="flex items-center gap-20 py-20 px-[360px] bg-white">
      <div className="flex-1 flex flex-col justify-center gap-8">
        <p className="font-outfit text-[13px] font-semibold text-primary tracking-[4px]">ABOUT NEXABOT</p>
        <h2 className="font-outfit text-[42px] font-extrabold text-dark tracking-[-1px] leading-[1.2]">
          让智能不再遥远
          <br />
          让未来触手可及
        </h2>
        <p className="font-inter text-base text-muted leading-[1.8]">
          NEXABOT 成立于 2020 年，是全球领先的人工智能机器人研发与制造企业。我们汇聚了来自麻省理工、斯坦福、清华等顶尖院校的 AI 研究人才，致力于将最前沿的人工智能技术转化为改变生活的产品。
        </p>
        <p className="font-inter text-base text-muted leading-[1.8]">
          从家庭到工业，从教育到医疗，我们的机器人产品线覆盖多个领域，服务全球超过 30 个国家和地区的用户。
        </p>
      </div>
      <div className="relative w-[520px] h-[440px] rounded-[20px] overflow-hidden flex-shrink-0">
        <img
          src="/images/generated-1770710573904.png"
          alt="NEXABOT 实验室"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 pt-7 pb-6 px-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]">
          <p className="text-5xl font-outfit font-black text-white/40 leading-none mb-3">"</p>
          <p className="font-inter text-[15px] font-medium text-white leading-[1.5] mb-1">
            我们相信，最好的技术
            <br />
            应该是无形的。
          </p>
          <p className="font-inter text-xs text-white/70">— 张明远，NEXABOT CEO</p>
        </div>
      </div>
    </section>
  )
}
