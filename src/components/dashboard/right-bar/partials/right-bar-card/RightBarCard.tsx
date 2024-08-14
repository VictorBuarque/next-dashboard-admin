import Image from "next/image";
export default function RightBarCard() {
  return (
    <div className="w-full  bg-slate-200  rounded">
      <div className="flex justify-center py-4">
        <Image
          src="/images/Robot.jpeg"
          width={100}
          height={100}
          alt="photo"
          className="object-contain rounded"
        />
      </div>
      <div className="flex flex-col justify-center p-2">
        <h4 className="font-semibold text-center py-2">Esta é a nossa IA que disponível para auxiliar</h4>
        <p className="font-light text-center pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
          laudantium autem officiis quae sapiente debitis nisi accusantium
          nobis, itaque voluptates esse voluptas tempore, quis fuga porro sed
          corrupti cumque?
        </p>
      </div>
    </div>
  );
}
