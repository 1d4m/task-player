import {
  Table as OriginTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
};

export const Table = <T extends object, U extends keyof T>({
  headerColumns,
  bodyRows,
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
          <TableRow key={column.id}>
            {Object.entries(column.cells).map(([key, value]) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </OriginTable>
  );
};
