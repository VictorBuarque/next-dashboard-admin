import RightBarCard from "./partials/right-bar-card/RightBarCard";


export default function RightBar() {
  return (
    <div className="flex flex-col h-full p-4 rounded w-[300px]  border-gray-400 border ml-4">
      <RightBarCard />
      <div className="py-2">
      <RightBarCard />
      </div>
    </div>
  );
}
