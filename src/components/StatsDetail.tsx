function StatsDetail({
  percentage,
  label,
  strokcolor,
}: {
  percentage: string;
  label: string;
  strokcolor: string;
}) {
  return (
    <div className="flex items-center gap-5 text-[#FFF] font-medium leading-6 text-right">
      <p className="w-[44px]">{percentage}</p>
      <div
        className={`h-[5px] w-[61px] rounded`}
        style={{ background: strokcolor }}
      ></div>
      <p className="w-[120px] text-left">{label}</p>
    </div>
  );
}

export default StatsDetail;
