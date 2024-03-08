// formFields.d.ts

declare module '@/services/formFields' {
    export const fields: {
      id: string;
      type: string;
      label: string;
      placeholder?: string;
      is_visible: boolean;
      sequence: number;
      options?: { key: string; value: string }[];
    }[];
  }
  