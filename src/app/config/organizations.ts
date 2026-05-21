// Organization and assignment mappings
export const ORGANIZATIONS = {
  "cs1501-2264": {
    name: "CS 1501 Spring 2026",
    owner: "cs1501-2264", // GitHub organization/owner name
    assignments: {
      "🧑‍💻Lab: JDB Lab (Not For Grade)": "cs1501-jdblab",
      "🧑‍💻 Lab 1: ": "cs1501-lab1",
      "🧑‍💻 Lab 2: ": "cs1501-lab2",
      "🧑‍💻 Lab 3: ": "cs1501-lab3",
      "🧑‍💻 DLB Lab": "cs1501-DLB",
      "🧑‍💻 Lab 4": "cs1501-lab4",
      "🧑‍💻 Lab 5": "cs1501-lab5",
      "🧑‍💻 BFS and Dijsktras": "cs1501-bfs-dijkstras",
      "🧑‍💻 Lab 6": "cs1501-lab6",
      "🧑‍💻 Bonus Lab": "cs1501-bonus-lab",
      "🧑‍💻 Assignment 1: ": "cs1501-assignment1",
      "🧑‍💻 Assignment 2: ": "cs1501-assignment2",
      "🧑‍💻 Assignment 3: ": "cs1501-assignment3",
      "🧑‍💻 Assignment 4: ": "cs1501-assignment4",
      "🧑‍💻 Assignment 5: ": "cs1501-assignment5",
    }
  },
  "cs1550-2264": {
    name: "CS 1550 Spring 2026",
    owner: "cs1550-2264", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 Lab 1: ": "cs1550-lab1",
      "🧑‍💻 Lab 2: ": "cs1550-lab2",
      "🧑‍💻 Lab 3: ": "cs1550-lab3",
      "🧑‍💻 Lab 4: ": "cs1550-lab4",
      "🧑‍💻 Lab 5: ": "cs1550-lab5",
      "🧑‍💻 Project 1: ": "cs1550-project1",
      "🧑‍💻 Project 2: ": "cs1550-project2",
      "🧑‍💻 Project 3: ": "cs1550-project3",
      "🧑‍💻 Project 4: ": "cs1550-project4",
      "🧑‍💻 Demo for Project 4: ": "project4demo",
      "🧑‍💻 Fuse Lab: ": "fuselab"
    }
  },
  "cs0447-2267": {
    name: "CS 0447 Summer 2026",
    owner: "cs0447-2267", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 Lab 1: ": "cs0447-lab1",
      "🧑‍💻 Lab 2: ": "cs0447-lab2",
      "🧑‍💻 Lab 3: ": "cs0447-lab3",
      "🧑‍💻 Lab 4: ": "cs0447-lab4",
      "🧑‍💻 Lab 5: ": "cs0447-lab5",
      "🧑‍💻 Lab 6: ": "cs0447-lab6",
      "🧑‍💻 Lab 7: ": "cs0447-lab7",
      "🧑‍💻 Lab 8: ": "cs0447-lab8",
      "🧑‍💻 Lab 9: ": "cs0447-lab9",
      "🧑‍💻 Lab 10: ": "cs0447-lab10",
      "🧑‍💻 Project 1: ": "cs0447-project1",
      "🧑‍💻 Project 2: ": "cs0447-project2",
      "🧑‍💻 Project 3: ": "cs0447-project3"           
    },
     "cs0449-2267": {
    name: "CS 0449 Summer 2026",
    owner: "cs0449-2267", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 Lab 1: ": "cs0449-lab1",
      "🧑‍💻 Lab 2: ": "cs0449-lab2",
      "🧑‍💻 Lab 3: ": "cs0449-lab3",
      "🧑‍💻 Lab 4: ": "cs0449-lab4",
      "🧑‍💻 Lab 5: ": "cs0449-lab5",
      "🧑‍💻 Lab 6: ": "cs0449-lab6",
      "🧑‍💻 Lab 7: ": "cs0449-lab7",
      "🧑‍💻 Lab 8: ": "cs0449-lab8",
      "🧑‍💻 Lab 9: ": "cs0449-lab9",
      "🧑‍💻 Lab 10: ": "cs0449-lab10",
      "🧑‍💻 Project 1: ": "cs0449-project1",
      "🧑‍💻 Project 2: ": "cs0449-project2",
      "🧑‍💻 Project 3: ": "cs0449-project3",
      "🧑‍💻 Project 4: ": "cs0449-project4",
      "🧑‍💻 Project 5: ": "cs0449-project5"           
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
