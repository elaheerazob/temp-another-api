// const api_Key ='13cea69fbfe6ca578878db871d9aee1a';

const searchButton = () =>{
    const searchInput =document.getElementById('search-input').value;
    // console.log(searchInput);
    const url =`https://weatherdbi.herokuapp.com/data/weather/${searchInput}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayWeather(data))

    document.getElementById('search-input').value ='';
}

const innerTexts = (id,text) =>{
    document.getElementById(id).innerText =text;
}
const weitherIcone = (id,text) =>{
    document.getElementById(id).setAttribute ='src',text;
}
//displayWeather
const displayWeather= temp =>{
    // console.log(temp);
    innerTexts('day',temp.currentConditions.dayhour);
    // const url =temp.currentConditions.iconURL;
    // const weitherIcone= document.getElementById('weither-icone')
    // weitherIcone.setAttribute('src',url)
    weitherIcone('weither-icone',temp.currentConditions.iconURL)
    innerTexts('city',temp.region)
    innerTexts('tempratur',temp.currentConditions.temp.c)
    innerTexts('condition',temp.currentConditions.comment)

    // weither Saturday
    innerTexts('saturday',temp.next_days[2].day)
    weitherIcone('saturday-weither-icone',temp.next_days[2].iconURL)
    innerTexts('saturday-max-tempratur',temp.next_days[2].max_temp.c)
    innerTexts('saturday-min-tempratur',temp.next_days[2].min_temp.c)
    innerTexts('saturday-condition',temp.next_days[2].comment)

    // weither Sunday
    innerTexts('sunday',temp.next_days[3].day)
    weitherIcone('sunday-weither-icone',temp.next_days[3].iconURL)
    innerTexts('sunday-max-tempratur',temp.next_days[3].max_temp.c)
    innerTexts('sunday-min-tempratur',temp.next_days[3].min_temp.c)
    innerTexts('sunday-condition',temp.next_days[3].comment)

    // weither monday
    innerTexts('monday',temp.next_days[4].day)
    weitherIcone('monday-weither-icone',temp.next_days[4].iconURL)
    innerTexts('monday-max-tempratur',temp.next_days[4].max_temp.c)
    innerTexts('monday-min-tempratur',temp.next_days[4].min_temp.c)
    innerTexts('monday-condition',temp.next_days[4].comment)
    
    // weither tuesday
    innerTexts('tuesday',temp.next_days[5].day)
    weitherIcone('tuesday-weither-icone',temp.next_days[5].iconURL)
    innerTexts('tuesday-max-tempratur',temp.next_days[5].max_temp.c)
    innerTexts('tuesday-min-tempratur',temp.next_days[5].min_temp.c)
    innerTexts('tuesday-condition',temp.next_days[5].comment)
   
    // weither wednesday
    innerTexts('wednesday',temp.next_days[6].day)
    weitherIcone('wednesday-weither-icone',temp.next_days[6].iconURL)
    innerTexts('wednesday-max-tempratur',temp.next_days[6].max_temp.c)
    innerTexts('wednesday-min-tempratur',temp.next_days[6].min_temp.c)
    innerTexts('wednesday-condition',temp.next_days[6].comment)
    
    // weither thursday
    innerTexts('thursday',temp.next_days[7].day)
    weitherIcone('thursday-weither-icone',temp.next_days[7].iconURL)
    innerTexts('thursday-max-tempratur',temp.next_days[7].max_temp.c)
    innerTexts('thursday-min-tempratur',temp.next_days[7].min_temp.c)
    innerTexts('thursday-condition',temp.next_days[7].comment)
    
    // weither friday
    innerTexts('friday',temp.next_days[1].day)
    weitherIcone('friday-weither-icone',temp.next_days[1].iconURL)
    innerTexts('friday-max-tempratur',temp.next_days[1].max_temp.c)
    innerTexts('friday-min-tempratur',temp.next_days[1].min_temp.c)
    innerTexts('friday-condition',temp.next_days[1].comment)
}



