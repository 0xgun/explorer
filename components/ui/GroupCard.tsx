import { GroupWithNetwork } from "@/lib/types";
import { formatId } from "@/lib/utils";

export default function GroupCard({ group }: { group: GroupWithNetwork }) {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-md border border-slate-700 bg-slate-800 p-3 text-sm transition hover:cursor-pointer hover:bg-slate-700 lg:flex-row lg:items-center lg:text-base">
      <div className="flex gap-2">
        <p className="rounded-2xl border border-amber-200 px-2 font-medium text-slate-300">
          {`ID: ${formatId(group.id)}`}
        </p>
        <p className="rounded-2xl bg-slate-600 px-2 text-slate-300">
          🔗 {group.network}
        </p>
      </div>
      <div className="flex gap-2 text-slate-400">
        <p>
          ✅{" "}
          {group.verifiedProofs?.length === 1
            ? "1 verified proof"
            : `${group.verifiedProofs?.length} verified proofs`}
        </p>
        <p className="text-slate-400">|</p>
        <p>
          👋🏽{" "}
          {group.members?.length === 1
            ? "1 member"
            : `${group.members?.length} members`}
        </p>
      </div>
    </div>
  );
}
