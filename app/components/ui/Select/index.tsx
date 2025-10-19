import {
  Select as OriginSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/shadcn/ui/select";

type Props = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  items: { name: string; value: string }[];
};

export const Select = ({
  value,
  onValueChange,
  placeholder = "選択してください",
  items,
}: Props) => {
  console.log(items);

  return (
    <OriginSelect value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.name} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </OriginSelect>
  );
};
