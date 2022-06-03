var days=[
    "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"
]
var hours=[
    1,2,3,4,5,6,7,8,9,10
]
var mydate= new Date();
var date=days[mydate.getDays()]  + hours[mydate.mygetHours()];
console.log(date)