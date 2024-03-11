export const fields = [
    {
      id: "1",
      type: "input",
      label: "Task Name",
      placeholder: "Add Task Name",
      is_visible: true,
      sequence: 1
    },
    {
      id: "2",
      type: "input",
      label: "Task Description",
      placeholder: "Add Task Description",
      is_visible: true,
      sequence: 2
    },
    {
    id: "3",
    type: "datepicker",
    label: "Task Completed date",
    is_visible: true,
    sequence: 3
  },
    {
      id: "4",
      type: "select",
      label: "Priority",
      is_visible: true,
      options: [
        { key: "p1", value: "Priority 1" },
        { key: "p2", value: "Priority 2" },
        { key: "p3", value: "Priority 3" },
        { key: "p4", value: "Priority 4" }
      ],
      sequence: 4
    }
  ];

  export const tableLabels = [
    "Task Name",
    "Task Description",
    "Task Created Time",
    "Task Achieve Time",
    "With In",
    "Priority",
    "Actions"
];