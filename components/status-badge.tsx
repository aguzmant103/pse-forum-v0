import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "active" | "pending" | "blocked" | "archived"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-green-100 text-green-800": status === "active",
          "bg-yellow-100 text-yellow-800": status === "pending",
          "bg-red-100 text-red-800": status === "blocked",
          "bg-gray-100 text-gray-800": status === "archived",
        },
        className,
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

