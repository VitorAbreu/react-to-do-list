import Icon from "./components/icon";
import Text from "./components/text";
// import TrashIcon from "./assets/icons/Trash.svg" normalmente importaria assim
// mas para tratar o svg como um componente e torna-lo mais customizavel usamos o
// plugin svgr e usamos ?react no final para torna-lo um component
// para padronizar e componentizar os icones criamos um Component icone que recebe
// o component svg
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check.svg?react";
import PencilIcon from "./assets/icons/Pencil.svg?react";
import PlusIcon from "./assets/icons/Plus.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import XIcon from "./assets/icons/X.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá Mundo
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>
      <div className="flex gap-1">
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      <div className="flex gap-1">
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  );
}
