// Organization and assignment mappings
export const ORGANIZATIONS = {
  "cs1501-2261": {
    name: "CS 1501 Fall25",
    owner: "cs1501-2261", // GitHub organization/owner name
    assignments: {

      "🧑‍💻Lab: JDB Lab (Not For Grade)": "cs1501-jdblab",
      "🧑‍💻 Lab 1: ": "cs1501-lab1",
      "🧑‍💻 Lab 2: ": "cs1501-lab2",
      "🧑‍💻 Assignment 1: ": "cs1501-assignment-1",
    }
  },
  "cs0445-2261": {
    name: "CS 0445 Fall25",
    owner: "cs0445-2261", // GitHub organization/owner name
    assignments: {

      "🧑‍💻Lab: JDB Lab (Not For Grade)": "cs0445-jdblab",
      "🧑‍💻 Lab 1: ": "cs0445-lab1",
      "🧑‍💻 Lab 2: ": "cs0445-lab2",
      "🧑‍💻 Assignment 1: ": "cs0445-assignment1",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
