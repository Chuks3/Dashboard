import {Dashboard} from "@/app/components/Dashboard/Dashboard";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";

export default function Home() {
  return (
      <main className="grid gap-4 p-4 grid-cols-[220px_1fr]">
        <Sidebar />
        <Dashboard />
      </main>
  );
}