const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        salary: Float!
    }

    type Query {
        getEmployees: [Employee]
        getEmployeeByID(id: ID!): Employee
    }

    type Mutation {
        addEmployee(
            id: ID!
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            salary: Float!
        ): Employee

        updateEmployee(
            id: ID!
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            salary: Float!
        ): Employee

        deleteEmployee(id: String!): Employee
    }
`;
