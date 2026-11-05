import svgPaths from "./svg-fnayma7y7d";

function IconsInstagramLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons/Instagram/Line">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icons/Instagram/Line">
          <path clipRule="evenodd" d={svgPaths.p2c122200} fill="currentColor" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p230ffb00} fill="currentColor" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p7396ac0} fill="currentColor" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Instagram() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] size-full" data-name="instagram">
      <div aria-hidden className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[999px]" />
      <IconsInstagramLine />
    </div>
  );
}