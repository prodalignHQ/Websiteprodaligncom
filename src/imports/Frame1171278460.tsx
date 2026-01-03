import imgShip1 from "figma:asset/ed4ca6a6327363eabfafb2082120fc537cbad4d3.png";

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full">
      <div className="relative shrink-0 size-[268px]" data-name="Ship 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgShip1} />
      </div>
    </div>
  );
}