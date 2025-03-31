const companies = [
    { name: "Tech Innovations Ltd.", category: "Software", startYear: 2010, endYear: 2025 },
    { name: "FutureSoft Solutions", category: "IT Services", startYear: 2005, endYear: 2023 },
    { name: "Quantum Dynamics Inc.", category: "IT Services", startYear: 2018, endYear: 2025 },
    { name: "Digital Enterprises", category: "Marketing", startYear: 2012, endYear: 2025 },
    { name: "Skyline Technologies", category: "Software", startYear: 2014, endYear: 2025 },
    { name: "NextGen Innovations", category: "Artificial Intelligence", startYear: 2019, endYear: 2025 },
    { name: "Visionary Systems", category: "Cybersecurity", startYear: 2015, endYear: 2025 },
    { name: "Infinite Horizons", category: "Consulting", startYear: 2010, endYear: 2025 },
    { name: "CyberWave Enterprises", category: "Software", startYear: 2017, endYear: 2025 },
    { name: "GlobalTech Solutions", category: "IT Services", startYear: 2011, endYear: 2025 }
];

  const ages = [33, 12, 20, 16, 5, 54, 61, 44, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach(function(company){
    console.log(company.name);
});

// Filter
const canDrink = ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
});
console.log(canDrink) 

// Filter
const canDrink1 = ages.filter(age => age >= 21);;
console.log(canDrink1) 

// Filter by category

const softwareCompanies= companies.filter(company => company.category === "Software");
console.log(softwareCompanies);

// map
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// map
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// sort
const sortedCompanies = companies.sort((a, b) => (a.startYear > b.startYear ? 1: -1));
console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// reduce
 const ageSum = ages.reduce((total, age) => total + age, 0);
 console.log(ageSum);