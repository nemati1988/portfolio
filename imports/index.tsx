import svgPaths from "./svg-7vw4ug17hw";

function Elements() {
  return (
    <div className="absolute flex inset-[9.38%_21.87%_9.37%_21.88%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="elements">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 11.25 16.25" width="11.25">
            <g id="elements">
              <path d={svgPaths.pae51d00} fill="#5A5A5D" id="Icon" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function FigmaCommunity() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] size-full" data-name="figma-community">
      <div aria-hidden className="absolute border border-[#e4e4e5] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[20px]" data-name="figma">
        <Elements />
      </div>
    </div>
  );
}