// Organization and assignment mappings
export const ORGANIZATIONS = {
  "cs1501-2264": {
    name: "CS 1501 Spring 2026",
    owner: "cs1501-2264", // GitHub organization/owner name
    assignments: {

      "🧑‍💻Lab: JDB Lab (Not For Grade)": "cs1501-jdblab",
      "🧑‍💻 Lab 1: ": "cs1501-lab1",
      "🧑‍💻 Lab 2: ": "cs1501-lab2",
      "🧑‍💻 Assignment 1: ": "cs1501-assignment1",
    }
  },
  "cs1550-2264": {
    name: "CS 1550 Spring 2026",
    owner: "cs1550-2264", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 Lab 1: ": "cs1550-lab1",
      "🧑‍💻 Lab 2: ": "cs1550-lab2",
      "🧑‍💻 Project 1: ": "cs1550-project1",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
