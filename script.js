gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#page1',
        start:'top top',
        end:'+=160%',
        scrub:1
    }
})
tl.to('#mountain img,#forest img,#boy img',{
    y:'25%',
    duration:2,
},'first')

tl.to('#high img',{
    y:'-20%',
    duration:2,
},'first')

tl.to('#rock img',{
    y:'-15%',
    duration:2,
},'first')
tl.to('#logo',{
    y:'150%',
    duration:2,
},'first')

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page4',
    }
});

tl2.from('#page4-top img',{
    y:'25%',
    duration:2,
},'second')
tl2.from('#page4-bottom img',{
    y:'-50%',
    duration:2,
},'second')

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page10',
    }
});

tl3.from('#page10-top img',{
    y:'25%',
    duration:2,
},'third')
tl3.from('#page10-down img',{
    y:'-50%',
    duration:2,
},'third')

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page12',
        start:'top top',
        end:'+=100%',
        scrub:1
    }
})
tl4.to('#page12-bottom img,#page12-bottom2 img',{
    y:'-15%',
    duration:2,
},'fourth')


ScrollTrigger.create({
    trigger:'#page6',
    start:'top top',
    end:'bottom bottom',
    pin:'.downwer .page6-left'
})


const images = document.querySelectorAll('.img-wrapper img');
const data = document.querySelectorAll('.page6-right-data h2');
images.forEach(element => {
    console.log(element);
    
});
console.log(data)
gsap.set(images[1],{opacity:0})
gsap.to(images[1],{
    opacity:1,
    scrollTrigger:{
        trigger:data[1],
        start:'200% center',
        end:'+=10%',
        scrub:true,
    }
})