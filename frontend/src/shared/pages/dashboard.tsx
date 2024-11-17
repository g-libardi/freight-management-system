import FreightTable from "@/freight/components/data/freight-table";
import { Card } from "../components/ui/card";


export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center size-full max-h-dvh p-14">
      <Card className="size-full p-3 max-h-full overflow-y-auto">
        <FreightTable />
      </Card>
    </div>
  )
}
