
'use-strict';

document.querySelector('.plan-1').addEventListener('click', function() {
    document.querySelector('.li-1').innerHTML = '';
    document.querySelector('.desc-1').innerHTML = "Charlie is a beloved Golden Retriever, medium-sized with a friendly disposition." +  
    " He has a distinctive white patch on his chest and was last seen wearing a blue collar with a name tag." +  
    " He responds to his name and basic commands. If found, please contact immediately as he is dearly missed by his family.";
});

document.querySelector('.plan-2').addEventListener('click', function() {
    document.querySelector('.li-2').innerHTML = '';
    document.querySelector('.desc-2').innerHTML = "Luna is a striking Husky with captivating bright blue eyes and a fluffy tail." +  
    " She's predominantly white with grey markings. Luna is a playful dog but might be timid around strangers." + 
    " She went missing near the local park on November 17th." + 
    " Her family is desperately seeking her return, any information would be greatly appreciated."
})

document.querySelector('.plan-3').addEventListener('click', function() {
    document.querySelector('.li-3').innerHTML = '';
    document.querySelector('.desc-3').innerHTML = "Max is a friendly black Labrador with a noticeable scar on his left paw." +
    " He's a loving dog who adores treats and attention. Max was last seen around Oak Street on November 20th." + 
    " His family misses him dearly and is hoping for any information leading to his safe return."
})