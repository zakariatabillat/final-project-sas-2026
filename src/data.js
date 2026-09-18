const studentsData = [
    {
        id: 1,
        name: "Sara Dev",
        city: "Nador",
        results: [
            {
                jour: 1,
                exercicesTermines: 18,
                totalExercices: 20,
                challengeTermine: true
            },
            {
                jour: 2,
                exercicesTermines: 14,
                totalExercices: 20,
                challengeTermine: false
            }
        ]
    },

    {
        id: 2,
        name: "Yassine Code",
        city: "Oujda",
        results: [
            {
                jour: 1,
                exercicesTermines: 12,
                totalExercices: 20,
                challengeTermine: false
            }
        ]
    }
];


module.exports = studentsData;
//it is like saying:"Make this studentsData available to another JavaScript file."