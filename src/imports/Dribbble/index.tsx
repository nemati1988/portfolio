import svgPaths from "./svg-08xhcpwia3";

function Elements() {
  return (
    <div className="absolute flex inset-[5.21%] items-center justify-center">
      <div className="-rotate-180 -scale-x-100 flex-none h-full w-full">
        <div className="relative size-full" data-name="elements">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.917" preserveAspectRatio="none" viewBox="0 0 17.917 17.917" width="17.917">
            <g id="elements">
              <path d={svgPaths.p23a8db00} fill="currentColor" id="Icon" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Dribbble() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] size-full" data-name="dribbble">
      <div aria-hidden className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[20px]" data-name="dribbble">
        <Elements />
      </div>
    </div>
  );
}