const sports = [
    {
        name: "Basket",
        averagePerformanceRequired: 60,
        membersNumber: 10
    },
    {
        name: "Voley",
        averagePerformanceRequired: 30,
        membersNumber: 2
    },
    {
        name: "Football",
        averagePerformanceRequired: 80,
        membersNumber: 23
    }
];

const members = [
    {
        name: "Alex",
        averagePerformance: 45,
        age: 23
    },
    {
        name: "Felix",
        averagePerformance: 70,
        age: 28
    },
    {
        name: "Florin",
        averagePerformance: 85,
        age: 32
    },
    {
        name: "Gabi",
        averagePerformance: 15,
        age: 24
    },
    {
        name: "Raluca",
        averagePerformance: 50,
        age: 19
    }
];

// 1
if (members[0].averagePerformance < sports[0].averagePerformanceRequired) {
    console.log("requirement met");
} else {
    console.log("requirement not met");
}

// 2
if (members[0].averagePerformance > sports[1].averagePerformanceRequired
    && members[1].averagePerformance > sports[1].averagePerformanceRequired) {
    console.log(`${members[0].name} and ${members[1].name} meet the requirement`);
} else {
    console.log("requirement not met");
}

// 3
if ((sports[1].averagePerformanceRequired + sports[2].averagePerformanceRequired) >= 100) {
    console.log(`${sports[1].averagePerformanceRequired} and ${sports[2].averagePerformanceRequired}`);
} else {
    console.log("requirement not met");
}

// 4
if (sports[2].membersNumber !== members.length) {
    console.log("not identical");
} else {
    console.log("identical");
}