const chart = document.querySelector("#chart").getContext('2d');


new Chart(chart,{
    type: 'line',
    data: {
        labels: ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' ],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor : 'red',
                borderWidth: 2
            },

            {  
                 label: 'EHT',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor : 'black',
            borderWidth: 2
                
            },

            {
                label: 'EUR',
                data: [80000, 70000, 40842, 67054, 78523, 50547, 20146, 30214, 10015, 20154, 25054],
                borderColor : 'purple',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const investment = document.querySelector('.investments');
const $1 = investment.children[1]
const $2 = investment.children[2]
const $3 = investment.children[3]
const $4 = investment.children[4]

$1.addEventListener('click', function() {
    window.location.href = 'https://www.google.com/finance/quote/ULVR:LON?sa=X&ved=2ahUKEwjb8_-hv5L-AhVIVKQEHcHfBdEQ3ecFegQIGBAg';
});
  

$2.addEventListener('click', function() {
    window.location.href = 'https://www.google.com/finance/quote/TSLA:NASDAQ?sa=X&ved=2ahUKEwii6dzUvpL-AhVFTqQEHXiiCxAQ3ecFegQIHBAg';
});

$3.addEventListener('click', function() {
    window.location.href = 'https://www.google.com/finance/quote/MNST:NASDAQ?sa=X&ved=2ahUKEwia1_Kzv5L-AhX2VKQEHds3C_EQ3ecFegQIKBAg';
});

$4.addEventListener('click', function() {
    window.location.href = 'https://www.google.com/finance/quote/MCD:NYSE?sa=X&ved=2ahUKEwi0uJTyvpL-AhW6SaQEHQjUBCAQ3ecFegQIChAg';
});


// La side bar pour le responsive

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click' , () =>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click' , () =>{
    sidebar.style.display = 'none';
})

// changer de theme



themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')

    themeBtn.querySelector('span:first-child').classList.toggle('active')
    ;
    themeBtn.querySelector('span:last-child').classList.toggle('active')
} )


