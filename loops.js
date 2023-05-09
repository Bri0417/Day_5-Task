// For the given JSON iterate over for all loop (for,for in,for of,forEach)

var data = [{
    "name": "brindha",
    "coruce": "FTS",
    "mail": "brindha@gmail.com"

 },
 {
    "name": "mathan",
    "coruce": "Data science",
    "mail": "mathan@gmail.com"
 }
];

// FOR LOOP

for (var i = 0; i < data.length; i++) {
 var obj = data[i];

 console.log(obj.name);
 console.log(obj.coruce);
 console.log(obj.mail);

}

// FOR IN

for (let i in data) {
 console.log(data[i].name)
}

// FOR OF

for (let e of data) {
 console.log(e.name, "-", e.coruce)
}

// FOREach

data.forEach((e) => {
 console.log(e.name, "-", e.mail)
})