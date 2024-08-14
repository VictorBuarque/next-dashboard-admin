import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function LastUpdateTable() {
  return (
    <div className="flex bg-slate-200 rounded">
      <Table>
        <TableHeader  className="text-black  rounded">
          <TableRow >
            <TableHead className="w-[400px] text-center">Name</TableHead>
            <TableHead className=" text-center">Status</TableHead>
            <TableHead className=" text-center">Date</TableHead>
            <TableHead className=" text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="uppercase font-medium text-center">
          <TableRow className="border-b border-b-slate-300">
            <TableCell>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/noavatar.jpg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
                <span className="self-center">Victor Buarque</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="bg-orange-400 rounded p-1 text-center self-center">
                pending
              </span>
            </TableCell>
            <TableCell>14.08.2024</TableCell>
            <TableCell>$3.200</TableCell>
          </TableRow>
          <TableRow className="border-b border-b-slate-300">
            <TableCell>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/noavatar.jpg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
                <span className="self-center">Victor Buarque</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="bg-red-700 rounded p-1 text-center self-center">
                canceled
              </span>
            </TableCell>
            <TableCell>14.08.2024</TableCell>
            <TableCell>$3.200</TableCell>
          </TableRow>
          <TableRow className="border-b border-b-slate-300">
            <TableCell>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/noavatar.jpg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
                <span className="self-center">Victor Buarque</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="bg-green-500 rounded p-1 text-center self-center">
                done
              </span>
            </TableCell>
            <TableCell>14.08.2024</TableCell>
            <TableCell>$3.200</TableCell>
          </TableRow>
          <TableRow className="border-b  border-b-slate-300">
            <TableCell>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/noavatar.jpg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
                <span className="self-center">Victor Buarque</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="bg-orange-400 rounded p-1  text-center self-center">
                pending
              </span>
            </TableCell>
            <TableCell>14.08.2024</TableCell>
            <TableCell>$3.200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/noavatar.jpg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
                <span className="self-center">Victor Buarque</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="bg-green-500 rounded p-1 text-center self-center">
                done
              </span>
            </TableCell>
            <TableCell>14.08.2024</TableCell>
            <TableCell>$3.200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
