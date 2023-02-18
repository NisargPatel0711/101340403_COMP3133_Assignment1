const Employee = require("./models/Employee");

exports.resolvers = {
    Query: {
        getEmployees: async (parent, args) => {
            return Employee.find({});
        },
        getEmployeeByID: async (parent, args) => {
            return Employee.findById(args.id);
        },
    },

    Mutation: {
        addEmployee: async (parent, args) => {
            let newEmp = new Employee({
                first_name: args.firstname,
                last_name: args.lastname,
                email: args.email,
                gender: args.gender,
                salary: args.salary,
            });
            return await newEmp.save();
        },
        updateEmployee: async (parent, args) => {
            if (!args.id) {
                return;
            }

            return await Employee.findOneAndUpdate(
                {
                    _id: args.id,
                },
                {
                    $set: {
                        first_name: args.firstname,
                        last_name: args.lastname,
                        email: args.email,
                        gender: args.gender,
                        salary: args.salary,
                    },
                },
                { new: true },
                (err, employee) => {
                    if (err) {
                        console.log(
                            "Something went wrong when updating the employee"
                        );
                    } else {
                        return employee;
                    }
                }
            );
        },
        deleteEmployee: async (parent, args) => {
            console.log(args);
            if (!args.id) {
                return JSON.stringify({
                    status: false,
                    message: "No ID found",
                });
            }
            return await Employee.findByIdAndDelete(args.id);
        },
    },
};
