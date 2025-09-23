import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import XlIcon from "../assets/icons/X.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import React from "react";
import InputText from "../components/input";
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "creating");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <InputCheckbox
            checked={task?.concluded}
            value={task?.concluded?.toString()}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XlIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
