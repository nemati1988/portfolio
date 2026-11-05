function Line() {
  return <div className="bg-[#909093] h-px relative shrink-0 w-[32px]" data-name="line" />;
}

export default function Subtitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="subtitle">
      <Line />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#909093] text-[11px] tracking-[2px] uppercase whitespace-nowrap">Experience</p>
    </div>
  );
}