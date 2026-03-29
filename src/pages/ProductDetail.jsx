import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Cpu, BatteryCharging, Radar, Calendar, Download, CheckCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const specs = [
  { label: '处理器', value: 'NX-7 神经网络芯片' },
  { label: '电池续航', value: '12 小时 / 10000mAh' },
  { label: '导航系统', value: 'LiDAR + 视觉融合' },
  { label: '尺寸', value: '450 × 380 × 1200 mm' },
  { label: '重量', value: '18.5 kg' },
  { label: '语音助手', value: '12 语言 / 98.5% 准确率' },
  { label: '传感器', value: '360° LiDAR + 深度摄像头' },
  { label: '连接', value: 'Wi-Fi 6 / BT 5.3 / Zigbee' },
]

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="flex items-center gap-20 px-[360px] py-[60px] min-h-[760px] bg-gradient-to-br from-white via-[#F5F8FF] to-[#EBF0FF]">
          <div className="w-[560px] h-[620px] rounded-2xl overflow-hidden flex-shrink-0 bg-surface-light">
            <img
              src="/images/generated-1770710499171.png"
              alt="NX-One 家庭服务机器人"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-7">
            <div className="flex items-center gap-2 text-muted font-inter text-[13px]">
              <Link to="/" className="hover:text-dark">首页</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-dark">产品</Link>
              <span>/</span>
              <span className="text-primary font-medium">NX-One</span>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-[14px] bg-red-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="font-inter text-xs font-semibold text-red-500">热销爆款 · 限时优惠</span>
            </div>
            <h1 className="font-outfit text-[48px] font-extrabold text-dark tracking-[-1px] leading-[1.15]">
              NX-One
              <br />
              家庭服务机器人
            </h1>
            <p className="font-inter text-base text-muted leading-[1.7]">
              全屋智能管家，集语音交互、自主导航、情感陪伴于一体。
              <br />
              搭载 NX-7 神经网络芯片，0.03s 极速响应。
            </p>
            <div className="flex items-end gap-3">
              <span className="font-outfit text-[36px] font-extrabold text-dark">¥29,800</span>
              <span className="font-inter text-base text-muted-lighter line-through">¥35,800</span>
            </div>
            <div className="flex gap-5">
              {[
                { icon: Cpu, label: 'NX-7 芯片' },
                { icon: BatteryCharging, label: '12h 续航' },
                { icon: Radar, label: '360° 感知' },
              ].map((item) => (
                <div key={item.label} className="flex-1 flex flex-col items-center gap-1.5 p-4 rounded-xl bg-surface">
                  <item.icon className="w-[22px] h-[22px] text-primary" />
                  <span className="font-outfit text-[13px] font-bold text-dark">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2.5 px-12 py-[18px] rounded-[32px] bg-primary font-inter text-base font-semibold text-white">
                <ShoppingCart className="w-5 h-5" />
                立即购买
              </button>
              <button className="flex items-center gap-2 px-8 py-[18px] rounded-[32px] border border-[#D0D5DD] font-inter text-base font-medium text-dark">
                <Heart className="w-5 h-5 text-muted" />
                收藏
              </button>
            </div>
          </div>
        </section>

        <section className="py-[100px] px-[360px] bg-white">
          <div className="flex flex-col items-center gap-3 mb-20">
            <p className="font-outfit text-[13px] font-semibold text-primary tracking-[4px]">CORE FEATURES</p>
            <h2 className="font-outfit text-[42px] font-extrabold text-dark tracking-[-1px] text-center">为智慧生活而生</h2>
            <p className="font-inter text-base text-muted text-center">六大核心功能，重新定义家庭智能服务体验</p>
          </div>
          <div className="space-y-20">
            {[
              { num: '01', title: '自然语音交互', desc: '支持中英日韩等 12 种语言的自然语音对话，语义理解准确率达 98.5%。可识别家庭成员声纹，提供个性化服务。', tags: ['12种语言', '98.5%准确率', '声纹识别'], img: '/images/generated-1770710499171.png' },
              { num: '02', title: '自主导航避障', desc: '搭载 LiDAR + 视觉融合导航系统，毫米级精度建图，智能规划最优路径。支持多楼层记忆，轻松跨越 2cm 障碍。', tags: ['LiDAR 导航', '多楼层记忆'], img: '/images/generated-1770710513187.png' },
              { num: '03', title: '情感陪伴交互', desc: '基于多模态情感计算引擎，实时感知用户情绪状态，提供温暖的情感陪伴。支持表情、语调、手势多维度情感表达。', tags: ['情绪感知', '多维表达'], img: '/images/generated-1770710521042.png' },
            ].map((feat, i) => (
              <div key={i} className={`flex gap-[60px] items-center ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1 h-[400px] rounded-[20px] overflow-hidden bg-surface">
                  <img src={feat.img} alt={feat.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-5">
                  <span className="font-outfit text-[64px] font-black tracking-[-2px] text-primary/20">{feat.num}</span>
                  <h3 className="font-outfit text-[28px] font-bold text-dark">{feat.title}</h3>
                  <p className="font-inter text-[15px] text-muted leading-[1.8]">{feat.desc}</p>
                  <div className="flex gap-2.5">
                    {feat.tags.map((tag) => (
                      <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-surface font-inter text-xs font-medium text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-[100px] px-[360px] bg-dark">
          <div className="flex flex-col items-center gap-3 mb-[60px]">
            <p className="font-outfit text-[13px] font-semibold text-primary tracking-[4px]">SPECIFICATIONS</p>
            <h2 className="font-outfit text-[42px] font-extrabold text-white tracking-[-1px]">技术规格</h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded-[20px] overflow-hidden">
            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between items-center px-7 py-6 bg-dark">
                <span className="font-inter text-sm text-muted-light">{spec.label}</span>
                <span className="font-outfit text-sm font-semibold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-[100px] px-[360px] bg-white">
          <div className="flex flex-col items-center gap-3 mb-[60px]">
            <p className="font-outfit text-[13px] font-semibold text-primary tracking-[4px]">GALLERY</p>
            <h2 className="font-outfit text-[42px] font-extrabold text-dark tracking-[-1px]">产品展示</h2>
          </div>
          <div className="flex gap-5 h-[320px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 rounded-2xl overflow-hidden bg-surface">
                <img src={`/images/generated-1770710499171.png`} alt={`产品图 ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center gap-[60px] py-20 px-[360px] bg-surface">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="font-outfit text-[36px] font-extrabold text-dark tracking-[-1px]">立即拥有 NX-One</h2>
            <p className="font-inter text-[15px] text-muted leading-[1.7]">
              现在下单即享限时优惠价 ¥29,800（原价 ¥35,800），
              <br />
              含免费上门安装调试、一年延保和 7×24 技术支持。
            </p>
            <div className="flex flex-col gap-3">
              {['30 天无理由退款', '免费上门安装调试', '终身 OTA 软件升级'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-primary flex-shrink-0" />
                  <span className="font-inter text-sm font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[360px] flex flex-col items-center gap-6 p-9 bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,15,30,0.08)]">
            <span className="font-inter text-sm font-medium text-muted">限时特惠价</span>
            <span className="font-outfit text-[44px] font-black text-dark">¥29,800</span>
            <span className="font-inter text-sm text-muted-lighter">原价 ¥35,800</span>
            <button className="w-full py-[18px] rounded-[32px] bg-primary font-inter text-base font-semibold text-white">
              立即购买
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
