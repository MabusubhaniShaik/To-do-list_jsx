export const fields = [
    {
      id: "task_name",
      type: "input",
      label: "Task Name",
      placeholder: "Add Task Name",
      is_visible: true,
      sequence: 1
    },
    {
      id: "task_description",
      type: "input",
      label: "Task Description",
      placeholder: "Add Task Description",
      is_visible: true,
      sequence: 2
    },
    {
      id: "priority",
      type: "select",
      label: "Priority",
      is_visible: true,
      options: [
        { key: "p1", value: "Priority 1" },
        { key: "p2", value: "Priority 2" },
        { key: "p3", value: "Priority 3" },
        { key: "p4", value: "Priority 4" }
      ],
      sequence: 3
    }
  ];
  