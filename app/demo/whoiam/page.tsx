import { AuthSession, authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const className = {
  th: "px-6 py-3 text-left text-sm text-neutral-500 uppercase tracking-wider",
  td: "px-6 py-4",
};

const Page = async () => {
  const session = (await getServerSession(authOptions)) as AuthSession;

  return (
    <div className="mx-auto flex h-screen max-w-screen-md flex-col justify-center space-y-8">
      <h1 className="text-2xl">User Information</h1>
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-50">
          <tr>
            <th className={className.th}>ID</th>
            <th className={className.th}>Name</th>
            <th className={className.th}>Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 bg-white">
          <tr>
            <td className={className.td}>{session?.user?._id}</td>
            <td className={className.td}>{session?.user?.name}</td>
            <td className={className.td}>{session?.user?.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Page;
