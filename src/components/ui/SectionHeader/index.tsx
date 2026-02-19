interface Props {
  num: string
  title: string
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <div className="reveal flex items-center gap-6 mb-16">
      <span className="text-accent text-xs tracking-[0.15em]">{num} /</span>
      <h2 className="font-syne font-bold text-4xl lg:text-5xl tracking-tight">{title}</h2>
      <div className="flex-1 max-w-[200px] h-px bg-[#1e2a38]" />
    </div>
  )
}
