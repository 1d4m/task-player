import {
  Table as OriginTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/shadcn/ui/table";
import { cn } from "@/utils/utils";

export type HeaderColumn<T extends object, U extends keyof T> = {
  key: U;
  children: React.ReactNode;
  className?: string;
};

type BodyRow<T extends object> = {
  id: string;
  cells: T;
};

type Props<T extends object, U extends keyof T> = {
  headerColumns: HeaderColumn<T, U>[];
  bodyRows: BodyRow<T>[];
  onRowClick?: (id: string) => void;
};

export const Table = <T extends object, U extends keyof T>({
  headerColumns,
  bodyRows,
  onRowClick,
}: Props<T, U>) => {
  return (
    <OriginTable>
      <TableHeader>
        <TableRow>
          {headerColumns.map((column) => (
            <TableHead key={String(column.key)} className={column.className}>
              {column.children}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bodyRows.map((column) => (
          <TableRow
            key={column.id}
            onClick={() => {
              onRowClick ? onRowClick(column.id) : () => {};
            }}
          >
            {Object.entries(column.cells).map(([key, value]) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </OriginTable>
  );
};
