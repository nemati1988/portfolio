import svgPaths from "./svg-qk1yiylc9f";

function Menu() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="menu">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="menu">
          <path d={svgPaths.p1c4b0100} id="Vector" stroke="#121216" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function HamburgerMenu() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] size-full" data-name="hamburger-menu">
      <div aria-hidden className="absolute border border-[#e4e4e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Menu />
    </div>
  );
}