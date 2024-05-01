import { IUser } from "@/lib/models/User";
import { getUserData } from "./serverActions";

const className = {
  th: "px-6 py-3 text-left text-sm text-neutral-500 uppercase tracking-wider",
  td: "px-6 py-4",
};

const Page = async () => {
  const users = (await getUserData()) as IUser[];

  return (
    <div>
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-50">
          <tr>
            <th className={className.th}>Name</th>
            <th className={className.th}>Email</th>
            <th className={className.th}>Image</th>
            <th className={className.th}>First Name</th>
            <th className={className.th}>Last Name</th>
            <th className={className.th}>Password Hash</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 bg-white">
          {users.map((item) => (
            <tr key={item.name}>
              <td className={className.td}>{item.name}</td>
              <td className={className.td}>{item.email}</td>
              <td className={className.td}>{item.image}</td>
              <td className={className.td}>{item.firstName}</td>
              <td className={className.td}>{item.lastName}</td>
              <td className={className.td}>{item.passwordHash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
