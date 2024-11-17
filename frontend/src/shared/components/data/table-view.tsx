import { useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { EyeIcon } from "lucide-react";


interface TableViewHeaderItem<K extends string> {
  key: K;
  label: string;
}


interface Action<T> {
  label: string;
  onClick: (item: T) => void;
}


interface TableViewProps<T extends Record<string, any>> {
  header: TableViewHeaderItem<Extract<keyof T, string>>[];
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  actions?: Action<T>[];
  dataMapper?: (item: T) => any;
}


function ActionMenu<T extends Record<string, any>>({ actions, item }: { actions: Action<T>[]; item: T }) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <button>
          <EyeIcon/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-md">
        {actions.map((action, index) => (
          <DropdownMenuItem key={index} onClick={() => action.onClick(item)} className="p-3">
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export default function TableView<T extends Record<string, any>>({ header, data, actions, dataMapper }: TableViewProps<T>) {
  const tableData = useMemo(() => {
    if (dataMapper) {
      return data.map(dataMapper);
    }
    return data;
  }, [data]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {header.map((item, index) => (
            <TableHead key={index}>{item.label}</TableHead>
          ))}
          {actions && <TableHead>Ações</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item, itemIndex) => (
          <TableRow key={itemIndex}>
            {header.map((head, headIndex) => (
              <TableCell key={headIndex}>{item[head.key]}</TableCell>
            ))}
            {actions && (
              <TableCell>
                <ActionMenu actions={actions} item={data[itemIndex]} />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
