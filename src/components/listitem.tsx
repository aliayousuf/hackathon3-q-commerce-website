import { FaCheck } from "react-icons/fa";

interface ListItemProps {
  text: string;
}

export default function ListItem({ text }: ListItemProps) {
  return (
    <div className="flex items-start gap-4">
      <FaCheck className="text-white text-lg" />
      <p className="text-base leading-relaxed">{text}</p>
    </div>
  );
}