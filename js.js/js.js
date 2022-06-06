var days=[
    "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"
]
var hours=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
]
var mydate= new Date();
var date=days[mydate.getDay()]  + hours[mydate.getHours()];
console.log(date)