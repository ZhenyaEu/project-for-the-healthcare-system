import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "Заплановано",
        "bg-blue-600": status === "Обробляється",
        "bg-red-600": status === "Відхилено",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "Заплановано",
          "text-blue-500": status === "Обробляється",
          "text-red-500": status === "Відхилено",
        })}
      >
        {status}
      </p>
    </div>
  );
};
