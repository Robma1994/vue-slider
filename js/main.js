

let app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        title: "Guarda le slide",
        images: ["img/image1.jpg","img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/diego-armando-maradona.jpg"]
    },  
    methods: {
        nextPhotos(){
            this.counter += 1;
            if(this.counter > (this.images.length -1)) {
                this.counter = 0
            }
        },
        backPhotos(){
            this.counter -=1; 
            if(this.counter < 0 ) {
                this.counter = (this.images.length -1);
            }
        }
    }
})