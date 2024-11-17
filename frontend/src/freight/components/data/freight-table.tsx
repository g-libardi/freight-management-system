import Freight from "@/freight/entities/freight";
import useFreightData from "@/freight/hooks/use-freight-data";
import TableView from "@/shared/components/data/table-view";


const header: { key: keyof Freight; label: string }[] = [
  { key: "id", label: "Número" },
  { key: "date", label: "Data" },
  { key: "cargo_type", label: "Tipo de Carga" },
  { key: "carrier", label: "Transportadora/Carregadora" },
  { key: "freight_status", label: "Status" },
  { key: "price", label: "Custo total (R$)" },
];




export default function FreightTable() {
  const dataService = useFreightData()
  
  function mapper(item: Freight) {
    return {
      ...item,
      date: new Date(item.date).toLocaleDateString(),
      driver: item.driver.name,
      carrier: item.carrier.name,
      cargo_type: item.cargo_type.name,
      freight_status: item.freight_status.name,
    }
  }

  function doSomething(item: Freight) {
    alert(`Finalizando frete ${item.id}`)
  }

  return (
    <TableView data={dataService.data} setData={dataService.setData} header={header} dataMapper={mapper} actions={[{label: "Finalizar", onClick: doSomething}]} />
  )
}
