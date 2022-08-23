function quote(){
    let arr=[{"quote":"", "author":""},
    {"quote":"Waste no more time arguing what a good man should be. Be One", "author":"Marcus Aurelius"},
    {"quote":"You could leave life right now. Let that determine what you do and say and think.", "author":"Marcus Aurelius"},
    {"quote":" He who fears death will never do anything worth of a man who is alive.", "author":"Seneca"},
    {"quote":"Life is very short and anxious for those who forget the past, neglect the present, and fear the future.", "author":"Seneca"},
    {"quote":" How long are you going to wait before you demand the best for yourself?", "author":"Epictetus"},
    {"quote":"Don’t explain your philosophy. Embody it.", "author":"Epictetus"},
    {"quote":"You have power over your mind — not outside events. Realize this, and you will find strength.", "author":"Marcus Aurelius"},
    {"quote":"Hang on to your youthful enthusiasms — you’ll be able to use them better when you’re older.", "author":"Seneca"},
    {"quote":"Wealth consists not in having great possessions, but in having few wants.", "author":"Epictetus"},
    {"quote":" If it is not right, do not do it; if it is not true, do not say it.", "author":"Marcus Aurelius"},
    {"quote":"Begin at once to live, and count each separate day as a separate life.", "author":"Seneca"},
    {"quote":"Stop drifting…Sprint to the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can.", "author":"Marcus Aurelius"},
    {"quote":" Whatever can happen at any time can happen today.", "author":"Seneca"},
    {"quote":"They lose the day in expectation of the night, and the night in fear of the dawn.", "author":"Seneca"},
    {"quote":"Let us prepare our minds as if we’d come to the very end of life. Let us postpone nothing. Let us balance life’s books each day… The one who puts the finishing touches on their life each day is never short of time.", "author":"Marcus Aurelius"},
    {"quote":"True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.", "author":"Seneca"}]
 let jo = Math.floor(Math.random()*17);
    document.getElementById("qu").innerHTML = `${arr[jo].quote+"-"+arr[jo].author}`;


}